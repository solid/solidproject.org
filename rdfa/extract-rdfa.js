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
   * Convert URL to TTL file path
   * Examples:
   * http://localhost:4000/ -> ./ttl/index.ttl
   * http://localhost:4000/x -> ./ttl/x.ttl
   * http://example.org/x/y -> ./ttl/x/y.ttl
   */
  urlToTTLPath(url) {
    try {
      const urlObj = new URL(url);
      let pathname = urlObj.pathname;
      
      // Remove leading slash
      if (pathname.startsWith('/')) {
        pathname = pathname.substring(1);
      }
      
      // Handle root path (empty after removing leading slash)
      if (pathname === '' || pathname === '/') {
        return path.join(__dirname, 'ttl', 'index.ttl');
      }
      
      // Remove trailing slash if present
      if (pathname.endsWith('/')) {
        pathname = pathname.substring(0, pathname.length - 1);
      }
      
      // Build the TTL file path
      const ttlPath = path.join(__dirname, 'ttl', `${pathname}.ttl`);
      return ttlPath;
    } catch (error) {
      console.error(`Error converting URL to TTL path: ${url}`, error.message);
      // Fallback to a safe filename
      const safeName = url.replace(/[^a-zA-Z0-9]/g, '_');
      return path.join(__dirname, 'ttl', `${safeName}.ttl`);
    }
  }

  /**
   * Extract RDFa from a URL and save to TTL file using path mapping
   */
  async extractAndSaveFromURL(url, ttlDir = null) {
    try {
      console.log(`Extracting from URL: ${url}`);
      
      // Create a separate extractor for this URL
      const extractor = new RDFaExtractor();
      const quads = await extractor.extractFromURL(url);
      
      if (quads.length > 0) {
        const ttlPath = ttlDir ? 
          path.join(ttlDir, path.relative(__dirname, this.urlToTTLPath(url)).replace('ttl/', '')) :
          this.urlToTTLPath(url);
        
        // Create directory if it doesn't exist
        const ttlDirPath = path.dirname(ttlPath);
        if (!fs.existsSync(ttlDirPath)) {
          fs.mkdirSync(ttlDirPath, { recursive: true });
        }
        
        const turtle = await extractor.toTurtle();
        fs.writeFileSync(ttlPath, turtle);
        
        const relativePath = ttlDir ? 
          path.relative(ttlDir, ttlPath) :
          path.relative(__dirname, ttlPath);
        console.log(`  → Saved ${quads.length} triples to ${relativePath}`);
        
        return { url, quads: quads.length, outputFile: relativePath, success: true };
      } else {
        console.log(`  → No RDFa found in ${url}`);
        return { url, quads: 0, outputFile: null, success: true };
      }
    } catch (error) {
      console.error(`Error processing ${url}:`, error.message);
      return { url, quads: 0, outputFile: null, error: error.message, success: false };
    }
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

}

// CLI functionality
async function main() {
  const args = process.argv.slice(2);
  const extractor = new RDFaExtractor();
  
  if (args.length === 0) {
    console.log('Usage: node extract-rdfa.js [input-file-directory-or-url] [output-file]');
    console.log('');
    console.log('Note: When extracting from URLs, TTL files are automatically saved to ./ttl/ with path mapping:');
    console.log('  http://localhost:4000/ → ./ttl/index.ttl');
    console.log('  http://localhost:4000/x → ./ttl/x.ttl');
    console.log('  https://example.org/x/y → ./ttl/x/y.ttl');
    console.log('');
    console.log('Examples:');
    console.log('  node extract-rdfa.js index.html output.ttl');
    console.log('  node extract-rdfa.js . all-rdfa.ttl');
    console.log('  node extract-rdfa.js events/archive.html events.ttl');
    console.log('  node extract-rdfa.js https://solidproject.org/community');
    console.log('  node extract-rdfa.js http://localhost:4000/');
    console.log('  node extract-rdfa.js http://localhost:4000/x');
    console.log('  node extract-rdfa.js https://example.org/x/y');
    process.exit(1);
  }
  
  const inputArg = args.find(arg => !arg.startsWith('--'));
  
  if (!inputArg) {
    console.error('No input file, directory, or URL specified');
    process.exit(1);
  }
  
  const output = args[1] && !args[1].startsWith('--') ? args[1] : 'output.ttl';
  
  try {
    console.log(`Processing: ${inputArg}`);
    console.log(`Output: ${output}`);
    console.log('');
    
    if (extractor.isURL(inputArg)) {
      // Handle URL input - use new method that saves with proper path mapping
      const result = await extractor.extractAndSaveFromURL(inputArg);
      if (result.success && result.outputFile) {
        console.log(`✅ Extracted ${result.quads} triples from ${inputArg}`);
        console.log(`📝 TTL output saved to: ${result.outputFile}`);
        // Don't generate additional Turtle output since it's already saved
        return;
      } else if (result.success && result.quads === 0) {
        console.log(`⚠️  No RDFa found in ${inputArg}`);
        return;
      } else {
        throw new Error(result.error || 'Unknown error processing URL');
      }
    } else {
      // Handle file/directory input
      const stat = fs.statSync(inputArg);
      
      if (stat.isDirectory()) {
        await extractor.processDirectory(inputArg);
      } else if (stat.isFile() && inputArg.endsWith('.html')) {
        await extractor.extractFromFile(inputArg);
      } else {
        console.error('Input must be an HTML file, directory, or URL');
        process.exit(1);
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
    
    console.log('\n📈 Statistics:');
    console.log(`   Unique subjects: ${stats.uniqueSubjects}`);
    console.log(`   Unique predicates: ${stats.uniquePredicates}`);
    console.log(`   Unique objects: ${stats.uniqueObjects}`);
    
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
