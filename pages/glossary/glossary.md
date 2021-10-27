# Glossary of Solid Terms

**Note:** This is a **work in progress** - feedback/ammendments are welcome. Links to related definitions will be added later.

**See Also** [Solid : Core Concepts and terms](https://github.com/solid/solidproject.org/blob/glossary/pages/glossary/Solid_Core_Concepts.md) for these terms organized thematically.


### Access Mode
A permission to read, create, modify, or share data. For each resource in your Pod, you can specify which Access modes you grant to specific Agents or classees of Agents.  The basic modes are Read

### ACL
Access Control Resource

### ACP
Access Control Policy

### Agent
A person, social entity, or software.

### Append Access Permission

### Control Access Permission

### CSS
Community Solid Server

### DPoP
Demonstration of Proof of Possession

### ESS
Enterprise Solid Server

### graph

### IdentityProvider
An Identity Provider (abbreviated as **IdP**)  is a host service that provides Solid identity authentication.  When you register with an IdP, the IdP assigns you a WebID. Each time you login to the IdP, you are authenticatd as owning that WebID.  Identity Providers are also often Pod Providers but it does not matter if you get your WebID from one provider and store your Pod data with a different provider.

### IdP
See Identity Provider

### JSON-LD

### JWT
Javascript Web Token

### knowledge graph
 
### LDP

### Linked Data Platform

### N3

### named graph

### NSS
Node Solid Server

### object

### OIDC

### OpenID Connect

### OWL

### Pod
A personal on/offline data storage space that you control. When logged in, you can modify the data and make any part of it private, 
public, or available to specific audiences.  Personal data includes things like social media postings - in Solid, those belong to you,
not to the social media company. A **Self-Hosted Pod** is a pod that you install and host yourself.  It may either be totlly private
or public-facing with access rules you set.

### Pod Provider
A host service that provides you Pod storage space and maintains Solid Server software that enforces the privacy rules you have defined.
You are free to switch pod providers at any time.

### predicate

### PSS
PHP Solid Server

### quad
RDF Triples may be grouped together in a **named graph**.  A triple with the URL of the graph it occurs in  is called a **quad**. 

### Read Access Permission

### RDF
Resource Description Framework is a language for describing the semantic web in ways that both humans and computers can understand. RDF can be represented using a number of syntaxes including **Turtle** (Terse RDF Triple Language), **JSON-LD** (JSON for Linked Data), **RDFa** (RDF in HTML attributes), **N3**, and others.  **OWL** (Web Ontology Language) is a language to create RDF vocabularies.  **SPARQL** (SPARQL Protocol and RDF Query Language) is a language to query RDF data sources.

### RDFa

### Semantic Web
The Semantic Web is a web based on **Linked Data** - meaningful relationships between resources. The link between the pages "The Color Purple" and "Alice Walker" is not just any link, it is an authorship link that holds meaning. ( _tbd : needs fixing)

### Solid Server
The software used to provide access to Pods. It is maintained by the Pod Provider, or by you if you self-host your Pod.
In either case, it enforces the access rules you set for your own Pod and serves your data in a way that makes its semantic
relationships accessible.  Solid Servers may also provide identity services. Current implementations of Solid Servers include

### SPARQL

### subject

### Trinpod
A Solid Server from graphmetrix

### Triple
A Triple is an RDF statement.  RDF statements take the form of short sentences asserting that thingA is in some relationship with thingB. Each statement (triple) has three parts : a **subject** (thingA), a **predicate** (the relationship), and an **object** (thingB).

### Turtle

### WAC
Web Access Control

### WebID
A WebID is a universal identifier that uniquely identifies you wherever you go. After getting a WebID, you can login once and have that login and WebID recognized anywhere that uses Solid.  It's easy to have more than one WebID and they are anonymous by default.

### Write Access Permission

<!-- to be added
ontology, namespace, prefix, foaf:, pim:, schema:, interoperability, shapes, footprints, SHEX, SHACL, LDN, github, PR, issue, WiP, DEI, Solid Team, Solid Process, Code of Conduct, SolidOS
-->
