---
layout: default
title: "4- Publish your vocabulary"
permalink: build/apps/vocabularies/4-publish
---
TODO

- get a purl

```
@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix vann: <http://purl.org/vocab/vann/> .

<http://w3id.org/webcomic/ns> rdf:type owl:Ontology ;
                               cc:license <http://creativecommons.org/licenses/by/4.0/> ;
                               dc:creator <https://solid.zwifi.eu/profile/card#me> ;
                               dc:description """
The Webcomic ontology aims at describing webcomics, the things they talk about, the artists who make them and the people who read them.
    """ ;
                               dc:title "Webcomic ontology" ;
                               vann:preferredNamespacePrefix "webco" ;
                               vann:preferredNamespaceURI <http://w3id.org/webcomic/ns> ;
                               owl:versionInfo 0.1 ;
                               foaf:primaryTopic "Webcomics" .
```
