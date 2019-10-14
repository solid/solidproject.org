---
layout: internal
title: "1- Well-known vocabularies"
permalink: implement/apps/vocabularies/1-well-known
---

# <a id='core'/> Core vocabularies

These vocabularies are used as building blocks to make the others.

- [Resource Description Framework (rdf)](1-1-core#rdf)
- [RDF Schema (rdfs)](1-1-core#rdfs)
- [Web Ontology Language (owl)](1-1-core#owl)

# <a id='solid'/> Vocabularies essential to Solid

These vocabularies are the ones featured in the Solid standard.

- [Access Control List (acl)](1-2-solid#acl)
- [Linked Data Platform (ldp)](02-04-technical-vocabularies#ldp)
- [Media types (mime)](02-04-technical-vocabularies#mime)
- [Solid terms](1-2-solid#terms)
- [Workspace](1-2-solid#space)
- [Posix stat](1-2-solid#posix)
- [User Interface (ui)](1-2-solid#ui)

# <a id='common'/> Vocabularies solving common issues

These vocabularies have a general community support, and they address issues that are horizontal to many applications.

| Frequently Asked Questions | Relevant vocabularies |
|---|---|
|I want to talk about social interaction| [as](1-3-common#as) |
|I want to talk about licenses| [cc](1-3-common#cc) |
|I want to talk about documents' metadata (author, title, etc.)|[dc elements and terms](1-3-common#dc)|
|I want to talk about events| [levt](2-3-common#levt), [ical](1-3-common#ical) |
|I want to talk about people, communities and organizations| [foaf](1-3-common#foaf), [vcard](1-3-common#vc), [sioc](1-3-common#sioc) |
|I want to talk about places| [geonames](1-3-common#geonames), [wgs84](1-3-common#geonames)|
|I want to describe an online meeting | [meeting](1-3-common#meeting) |
|I want to talk about music | [mo](1-3-common#mo) |
|I want to describe things that are usually found on web pages| [schema](1-3-common#schema) |
|I want to talk about time and timezones |[time](2-3-common#time), [tzont](1-3-common#tzont)|
|I want to track issues and log events| [rlog](2-3-common#rlog), [wf](1-3-common#wf)|

# <a id='technical'/> Vocabularies describing technical elements

These vocabularies are tied to technical standard.

|Described element|Vocabulary|
---|---
|X509 Certificates|[cert](1-4-technical#cert)|
|HTTP messages| [http](1-4-technical#http)|
|HTTP headers| [httph](1-4-technical#httph)|
|Linked data platform| [ldp](1-4-technical#ldp) |
|RSS feeds| [rss](1-4-technical#rss) |
|XML Schema| [xsd](1-4-technical#xsd)|

Your application requires a vocabulary that you did not find on this page? Maybe it's out there somewhere. Next, we see how to [discover vocabularies](2-discover).
