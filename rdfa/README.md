# RDFa Extraction Script

This script extracts RDFa markup from HTML files and URLs, converting it to Turtle (TTL) format. It uses industry-standard libraries (`rdfa-streaming-parser` and `N3.js`) to ensure proper RDFa parsing and Turtle serialization.

## Features

- **Standards-Compliant RDFa Parsing**: Uses `rdfa-streaming-parser` for proper RDFa 1.1 specification compliance
- **Professional Turtle Output**: Uses `N3.js` for high-quality Turtle serialization with proper prefixes
- **URL Support**: Fetch and extract RDFa directly from live websites with automatic path mapping
- **Batch Processing**: Can process individual files or entire directories
- **Schema.org Support**: Handles common vocabularies including Schema.org, FOAF, DOAP, and others
- **Automatic Statistics**: Provides detailed extraction statistics by default
- **Error Handling**: Robust error handling and informative output

## Installation

```bash
npm install
```

## Usage

### Extract RDFa from a URL
```bash
node extract-rdfa.js https://example.org/page
```

This will automatically save the extracted RDFa to `./ttl/page.ttl` using path mapping.

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

<https://example.org/page> schema:name "Example Page";
    schema:description "A sample page with RDFa markup".
```

### Example Statistics Output

```
Extracting from URL: https://example.org/page
  → Saved 5 triples to ttl/page.ttl

✅ Extracted 5 triples from https://example.org/page
📝 TTL output saved to: ttl/page.ttl

📈 Statistics:
   Unique subjects: 2
   Unique predicates: 3
   Unique objects: 5
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

## Path Mapping

When extracting from URLs, files are automatically saved to the `ttl/` directory with path mapping:

- `https://example.org/` → `./ttl/index.ttl`
- `https://example.org/page` → `./ttl/page.ttl`
- `https://example.org/section/page` → `./ttl/section/page.ttl`

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
