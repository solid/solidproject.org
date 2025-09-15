#!/usr/bin/env node

/**
 * RDFa to Turtle Extraction Script
 * 
 * This script extracts RDFa markup from HTML files and converts it to Turtle format.
 * It uses the rdfa-streaming-parser library for proper RDFa parsing and N3.js for
 * Turtle serialization, ensuring standards compliance and reliability.
 */

const fs = require('fs');
const path = require('path');
const { Readable } = require('stream');
const { RdfaParser } = require('rdfa-streaming-parser');
const { Writer, Store } = require('n3');

class RDFaExtractor {
  constructor() {
    this.baseURL = 'https://solidproject.org';
    this.store = new Store();
  }

  /**
   * Extract RDFa from HTML content
   */
  async extractFromHTML(htmlContent, sourceFile = '', baseIRI = null) {
    return new Promise((resolve, reject) => {
      // Determine base IRI from source file
      if (!baseIRI && sourceFile) {
        const cleanPath = sourceFile.replace(/^\.\.\//, '').replace(/\.html$/, '');
        baseIRI = cleanPath === 'index' ? this.baseURL : `${this.baseURL}/${cleanPath}`;
      } else if (!baseIRI) {
        baseIRI = this.baseURL;
      }

      const parser = new RdfaParser({
        baseIRI: baseIRI,
        contentType: 'text/html',
        // Enable vocabulary processing
        vocab: true,
        // Include default prefixes
        defaultPrefixes: {
          'schema': 'http://schema.org/',
          'foaf': 'http://xmlns.com/foaf/0.1/',
          'doap': 'http://usefulinc.com/ns/doap#',
          'og': 'http://ogp.me/ns#',
          'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
          'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
          'xsd': 'http://www.w3.org/2001/XMLSchema#'
        }
      });

      const quads = [];
      let errorOccurred = false;

      parser.on('data', (quad) => {
        quads.push(quad);
        this.store.addQuad(quad);
      });

      parser.on('error', (error) => {
        if (!errorOccurred) {
          errorOccurred = true;
          console.error(`Error parsing RDFa from ${sourceFile}:`, error.message);
          reject(error);
        }
      });

      parser.on('end', () => {
        if (!errorOccurred) {
          console.log(`Extracted ${quads.length} triples from ${sourceFile}`);
          resolve(quads);
        }
      });

      // Create a readable stream from the HTML content
      const htmlStream = new Readable();
      htmlStream.push(htmlContent);
      htmlStream.push(null); // End the stream

      // Pipe the HTML content to the parser
      htmlStream.pipe(parser);
    });
  }

  /**
   * Extract RDFa from a single file
   */
  async extractFromFile(filePath) {
    try {
      const htmlContent = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative(path.dirname(filePath), filePath);
      return await this.extractFromHTML(htmlContent, relativePath);
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
      return [];
    }
  }

  /**
   * Extract RDFa from a URL
   */
  async extractFromURL(url) {
    try {
      console.log(`Fetching content from: ${url}`);
      
      // Dynamic import for node-fetch (ES module)
      const { default: fetch } = await import('node-fetch');
      
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'RDFa-Extractor/1.0 (Solid Project; +https://solidproject.org)',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
        timeout: 10000 // 10 second timeout
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type') || '';
      if (!contentType.includes('text/html') && !contentType.includes('application/xhtml+xml')) {
        console.warn(`Warning: Content-Type is '${contentType}', expected HTML`);
      }

      const htmlContent = await response.text();
      
      // Use the URL as the base IRI
      return await this.extractFromHTML(htmlContent, url, url);
    } catch (error) {
      console.error(`Error fetching URL ${url}:`, error.message);
      return [];
    }
  }

  /**
   * Check if input is a URL
   */
  isURL(input) {
    try {
      const url = new URL(input);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  }

  /**
   * Find HTML files in directory
   */
  findHTMLFiles(dir, files = []) {
    try {
      const items = fs.readdirSync(dir);
      
      for (let item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== '_site' && item !== 'node_modules') {
          this.findHTMLFiles(fullPath, files);
        } else if (stat.isFile() && item.endsWith('.html')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error.message);
    }
    
    return files;
  }

  /**
   * Process all HTML files in a directory
   */
  async processDirectory(dir) {
    const htmlFiles = this.findHTMLFiles(dir);
    
    console.log(`Found ${htmlFiles.length} HTML files to process`);
    
    const allQuads = [];
    for (const file of htmlFiles) {
      try {
        const htmlContent = fs.readFileSync(file, 'utf8');
        const relativePath = path.relative(dir, file);
        const quads = await this.extractFromHTML(htmlContent, relativePath);
        allQuads.push(...quads);
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    return allQuads;
  }

  /**
   * Find HTML files in root directory only (non-recursive)
   */
  findRootHTMLFiles(dir) {
    const files = [];
    try {
      const items = fs.readdirSync(dir);
      
      for (let item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isFile() && item.endsWith('.html')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${dir}:`, error.message);
    }
    
    return files;
  }

  /**
   * Convert HTML filename to solidproject.org URL
   */
  htmlFileToURL(filePath) {
    const filename = path.basename(filePath, '.html');
    
    if (filename === 'index') {
      return 'https://solidproject.org/';
    } else {
      return `https://solidproject.org/${filename}`;
    }
  }

  /**
   * Process all root HTML files by extracting from their live URLs
   */
  async processAllSolidProjectPages(rootDir, saveIndividualFiles = false) {
    const htmlFiles = this.findRootHTMLFiles(rootDir);
    
    console.log(`Found ${htmlFiles.length} HTML files in root directory`);
    console.log('Extracting RDFa from corresponding live URLs on solidproject.org...\n');
    
    // Create ttl directory if saving individual files
    if (saveIndividualFiles) {
      const ttlDir = path.join(__dirname, 'ttl');
      if (!fs.existsSync(ttlDir)) {
        fs.mkdirSync(ttlDir, { recursive: true });
      }
    }
    
    const results = [];
    for (const file of htmlFiles) {
      const url = this.htmlFileToURL(file);
      const filename = path.basename(file);
      
      console.log(`Processing ${filename} → ${url}`);
      
      try {
        // Create a separate extractor for each page if saving individual files
        const extractor = saveIndividualFiles ? new RDFaExtractor() : this;
        const quads = await extractor.extractFromURL(url);
        
        // Save individual file if requested
        if (saveIndividualFiles && quads.length > 0) {
          const outputFilename = path.basename(file, '.html');
          const ttlFilename = outputFilename === 'index' ? 'index.ttl' : `${outputFilename}.ttl`;
          const ttlPath = path.join(__dirname, 'ttl', ttlFilename);
          
          const turtle = await extractor.toTurtle();
          fs.writeFileSync(ttlPath, turtle);
          console.log(`  → Saved to ttl/${ttlFilename}`);
        }
        
        results.push({ file: filename, url, quads: quads.length, outputFile: saveIndividualFiles ? `ttl/${path.basename(file, '.html') === 'index' ? 'index' : path.basename(file, '.html')}.ttl` : null });
      } catch (error) {
        console.error(`Error processing ${filename}:`, error.message);
        results.push({ file: filename, url, quads: 0, error: error.message });
      }
    }
    
    return results;
  }

  /**
   * Convert the RDF store to Turtle format
   */
  async toTurtle() {
    return new Promise((resolve, reject) => {
      const writer = new Writer({ 
        format: 'Turtle',
        prefixes: {
          'schema': 'http://schema.org/',
          'foaf': 'http://xmlns.com/foaf/0.1/',
          'doap': 'http://usefulinc.com/ns/doap#',
          'og': 'http://ogp.me/ns#',
          'rdfs': 'http://www.w3.org/2000/01/rdf-schema#',
          'rdf': 'http://www.w3.org/1999/02/22-rdf-syntax-ns#',
          'xsd': 'http://www.w3.org/2001/XMLSchema#'
        }
      });

      // Add all quads from the store to the writer
      this.store.forEach((quad) => {
        writer.addQuad(quad);
      });

      writer.end((error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  /**
   * Get statistics about extracted data
   */
  getStats() {
    const totalTriples = this.store.size;
    const subjects = new Set();
    const predicates = new Set();
    const objects = new Set();

    this.store.forEach((quad) => {
      subjects.add(quad.subject.value);
      predicates.add(quad.predicate.value);
      objects.add(quad.object.value);
    });

    return {
      totalTriples,
      uniqueSubjects: subjects.size,
      uniquePredicates: predicates.size,
      uniqueObjects: objects.size
    };
  }

  /**
   * Clear the store for fresh extraction
   */
  clear() {
    this.store = new Store();
  }
}

// CLI functionality
async function main() {
  const args = process.argv.slice(2);
  const extractor = new RDFaExtractor();
  
  if (args.length === 0) {
    console.log('Usage: node extract-rdfa.js [input-file-directory-or-url] [output-file]');
    console.log('       node extract-rdfa.js --all [output-file]');
    console.log('');
    console.log('Examples:');
    console.log('  node extract-rdfa.js index.html output.ttl');
    console.log('  node extract-rdfa.js . all-rdfa.ttl');
    console.log('  node extract-rdfa.js events/archive.html events.ttl');
    console.log('  node extract-rdfa.js https://solidproject.org/community community.ttl');
    console.log('  node extract-rdfa.js https://example.org/page.html example.ttl');
    console.log('  node extract-rdfa.js --all solidproject-all.ttl');
    console.log('  node extract-rdfa.js --all --split solidproject-all.ttl');
    console.log('');
    console.log('Options:');
    console.log('  --all      Extract from all root HTML files via solidproject.org URLs');
    console.log('  --split    Save each page to individual TTL files (use with --all)');
    console.log('  --stats    Show extraction statistics');
    console.log('  --help     Show this help message');
    process.exit(1);
  }
  
  const showStats = args.includes('--stats');
  const useAll = args.includes('--all');
  const useSplit = args.includes('--split');
  const input = args.find(arg => !arg.startsWith('--'));
  
  let output;
  if (useAll) {
    // For --all, the first non-option arg is the output file
    output = input || 'solidproject-all.ttl';
  } else {
    // For normal mode, second arg is output file
    output = args[1] && !args[1].startsWith('--') ? args[1] : 'output.ttl';
    
    if (!input) {
      console.error('No input file or directory specified');
      process.exit(1);
    }
  }
  
  try {
    if (useAll) {
      console.log('Processing: All root HTML files → solidproject.org URLs');
      if (useSplit) {
        console.log(`Individual files: ttl/*.ttl`);
        console.log(`Combined output: ${output}`);
      } else {
        console.log(`Output: ${output}`);
      }
      console.log('');
      
      // Process all root HTML files by extracting from their live URLs
      const results = await extractor.processAllSolidProjectPages('..', useSplit);
      
      // Print summary
      console.log('\n📋 Processing Summary:');
      let totalTriples = 0;
      let successCount = 0;
      let errorCount = 0;
      
      for (const result of results) {
        if (result.error) {
          console.log(`❌ ${result.file} → ${result.url} (Error: ${result.error})`);
          errorCount++;
        } else {
          const fileInfo = useSplit && result.outputFile ? ` → ${result.outputFile}` : '';
          console.log(`✅ ${result.file} → ${result.url} (${result.quads} triples)${fileInfo}`);
          totalTriples += result.quads;
          successCount++;
        }
      }
      console.log(`\n📊 Summary: ${successCount} pages processed successfully, ${errorCount} errors`);
      console.log(`📊 Total triples extracted: ${totalTriples}`);
    } else {
      console.log(`Processing: ${input}`);
      console.log(`Output: ${output}`);
      console.log('');
      
      if (extractor.isURL(input)) {
        // Handle URL input
        await extractor.extractFromURL(input);
      } else {
        // Handle file/directory input
        const stat = fs.statSync(input);
        
        if (stat.isDirectory()) {
          await extractor.processDirectory(input);
        } else if (stat.isFile() && input.endsWith('.html')) {
          await extractor.extractFromFile(input);
        } else {
          console.error('Input must be an HTML file, directory, or URL');
          process.exit(1);
        }
      }
    }
    
    // Generate Turtle output
    console.log('Generating Turtle output...');
    const turtle = await extractor.toTurtle();
    fs.writeFileSync(output, turtle);
    
    const stats = extractor.getStats();
    console.log(`\n✅ Extraction completed successfully!`);
    console.log(`📊 Extracted ${stats.totalTriples} triples`);
    console.log(`📝 Turtle output saved to: ${output}`);
    
    if (showStats) {
      console.log('\n📈 Statistics:');
      console.log(`   Unique subjects: ${stats.uniqueSubjects}`);
      console.log(`   Unique predicates: ${stats.uniquePredicates}`);
      console.log(`   Unique objects: ${stats.uniqueObjects}`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (process.env.DEBUG) {
      console.error(error.stack);
    }
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Unexpected error:', error.message);
    process.exit(1);
  });
}

module.exports = { RDFaExtractor };
