# RDFa Extraction Script

This script extracts RDFa markup from HTML files and URLs, converting it to Turtle (TTL) format. It uses industry-standard libraries (`rdfa-streaming-parser` and `N3.js`) to ensure proper RDFa parsing and Turtle serialization. The script can process local files, directories, or fetch content directly from URLs, making it perfect for extracting structured data from live websites.

## Features

- **Standards-Compliant RDFa Parsing**: Uses `rdfa-streaming-parser` for proper RDFa 1.1 specification compliance
- **Professional Turtle Output**: Uses `N3.js` for high-quality Turtle serialization with proper prefixes
- **URL Support**: Fetch and extract RDFa directly from live websites
- **Batch Processing**: Can process individual files or entire directories
- **Schema.org Support**: Handles common vocabularies including Schema.org, FOAF, DOAP, and others
- **Jekyll Compatible**: Works with Jekyll front matter and template files
- **Statistics**: Provides detailed extraction statistics with `--stats` flag
- **Error Handling**: Robust error handling and informative output

## Installation

```bash
npm install
```

## Usage

### Extract RDFa from a single file
```bash
node extract-rdfa.js ../events/archive.html events.ttl
```

### Extract RDFa from entire project
```bash
node extract-rdfa.js .. all-rdfa.ttl
```

### Extract RDFa from a specific directory
```bash
node extract-rdfa.js ../events events-only.ttl
```

### Extract RDFa from URLs
```bash
node extract-rdfa.js https://solidproject.org/community community.ttl
node extract-rdfa.js https://example.org/page.html example.ttl
```

### Extract RDFa from all Solid Project pages
```bash
# Save to single combined file
node extract-rdfa.js --all solidproject-all.ttl

# Save each page to individual files + combined file
node extract-rdfa.js --all --split solidproject-all.ttl
```
This discovers all HTML files in the root directory and extracts RDFa from their corresponding live URLs on solidproject.org (e.g., `index.html` → `https://solidproject.org/`, `about.html` → `https://solidproject.org/about`, etc.)

With `--split`, each page is saved to individual TTL files in the `ttl/` directory:
- `solidproject.org/` → `ttl/index.ttl`
- `solidproject.org/about` → `ttl/about.ttl`
- `solidproject.org/community` → `ttl/community.ttl`
- etc.

### Using npm scripts
```bash
# Extract from all files (local)
npm run extract-all

# Extract from all Solid Project pages (live URLs)
npm run extract-all-live

# Extract from all Solid Project pages (individual files)
npm run extract-all-split

# Extract from events directory
npm run extract-events

# Extract from community page (local file)
npm run extract-community

# Extract from community page (live URL)
npm run extract-community-url
```

### With statistics
```bash
node extract-rdfa.js ../events/archive.html events.ttl --stats
```

## Output

The script generates Turtle files with:
- Proper namespace prefixes for common vocabularies
- Grouped triples by subject
- Escaped literals with appropriate datatypes
- Clean URI resolution

### Example Output

```turtle
@prefix schema: <http://schema.org/>.
@prefix foaf: <http://xmlns.com/foaf/0.1/>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.

<https://solidproject.org/community> schema:hasPart <https://solidproject.org/community#where-to-collaborate>, <https://solidproject.org/community#meet-the-community>.
<https://solidproject.org/community#where-to-collaborate> schema:name "Where to Collaborate";
    rdfs:seeAlso <https://forum.solidproject.org>, <https://matrix.to/#/%23solid_project%3Amatrix.org>.
```

### Example Statistics Output

```
Processing: All root HTML files → solidproject.org URLs
Individual files: ttl/*.ttl
Combined output: solidproject-all.ttl

Found 22 HTML files in root directory
Extracting RDFa from corresponding live URLs on solidproject.org...

Processing index.html → https://solidproject.org/
  → Saved to ttl/index.ttl
Processing about.html → https://solidproject.org/about
  → Saved to ttl/about.ttl
Processing community.html → https://solidproject.org/community
  → Saved to ttl/community.ttl
...

📋 Processing Summary:
✅ index.html → https://solidproject.org/ (9 triples) → ttl/index.ttl
✅ about.html → https://solidproject.org/about (39 triples) → ttl/about.ttl
✅ community.html → https://solidproject.org/community (693 triples) → ttl/community.ttl
...

📊 Summary: 22 pages processed successfully, 0 errors
📊 Total triples extracted: 884

✅ Extraction completed successfully!
📝 Individual files saved to: ttl/*.ttl
📝 Combined output saved to: solidproject-all.ttl
```

## Supported RDFa Attributes

- `about`: Specifies the subject of the triples
- `typeof`: Specifies the RDF type of the subject
- `property`: Specifies a property of the subject
- `resource`: Specifies the object of a triple
- `rel`: Specifies a relationship property
- `datatype`: Specifies the datatype of a literal value
- `content`: Provides the literal value when different from element text

## Supported Vocabularies

The script includes built-in prefixes for:
- **schema**: http://schema.org/
- **foaf**: http://xmlns.com/foaf/0.1/
- **doap**: http://usefulinc.com/ns/doap#
- **og**: http://ogp.me/ns#
- **rdfs**: http://www.w3.org/2000/01/rdf-schema#
- **rdf**: http://www.w3.org/1999/02/22-rdf-syntax-ns#
- **xsd**: http://www.w3.org/2001/XMLSchema#

Additional prefixes can be declared in HTML files using the `prefix` attribute on the `<html>` element.

## Examples

### Events Data
The script excels at extracting structured event data from files like `events/archive.html`:

```html
<dl about="#event-2025-04-24" typeof="schema:Event">
  <dt>Title</dt>
  <dd property="schema:name">Solid Symposium 2025</dd>
  <dt>Date</dt>
  <dd>
    <time property="schema:startDate" datatype="xsd:date" content="2025-04-24">2025-04-24</time>
  </dd>
</dl>
```

### Community Information
Extracts navigation and structural data:

```html
<section rel="schema:hasPart" resource="#where-to-collaborate">
  <h2 property="schema:name">Where to Collaborate</h2>
  <a href="https://forum.solidproject.org" rel="rdfs:seeAlso">Solid Project Forum</a>
</section>
```

## Technical Details

- **RDFa Parser**: Uses `rdfa-streaming-parser` for standards-compliant RDFa 1.1 parsing
- **Turtle Serialization**: Uses `N3.js` for professional-quality Turtle output
- **HTML Processing**: Handles Jekyll front matter automatically
- **URI Resolution**: Resolves relative URLs to absolute URLs based on base IRI
- **RDF Store**: Uses N3 Store for efficient triple management
- **Streaming**: Supports streaming processing for large HTML files
- **Error Handling**: Comprehensive error handling with detailed messages

## Dependencies

- **[rdfa-streaming-parser](https://www.npmjs.com/package/rdfa-streaming-parser)**: Standards-compliant RDFa 1.1 parser
- **[N3.js](https://www.npmjs.com/package/n3)**: Professional RDF library for JavaScript
- **[node-fetch](https://www.npmjs.com/package/node-fetch)**: HTTP client for fetching content from URLs

## Contributing

The script uses industry-standard libraries for RDFa parsing and RDF serialization:
1. **RDFa parsing** is handled by `rdfa-streaming-parser` - no custom parsing needed
2. **Turtle serialization** is handled by `N3.js` - ensures proper formatting
3. **Configuration** can be extended by modifying the parser options and prefixes
4. **New features** can be added to the CLI interface and file processing logic
