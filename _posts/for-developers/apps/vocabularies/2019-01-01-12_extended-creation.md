---
layout: for-developers
title: "Improve your vocabulary"
permalink: /for-developers/apps/vocabularies/create/extended
tags: [apps]
categories: [Vocabularies, Create]
exclude: true
---

This tutorial extends the [quickstart vocabulary creation](/for-developers/apps/vocabularies/create/quickstart), so make sure to complete it first. Just as a reminder, here is a graphical representation of the terms we want to include in our vocabs:

![The obelisk vocabulary]({{site.baseurl}}/assets/img/tutorials/vocabularies/obelisk_vocab_1.png)

## Refining properties

We initially defined our properties as [rdf:Property](http://www.w3.org/1999/02/22-rdf-syntax-ns#Property). However, we can see in the graphical representation that there are two different kind of properties:
- the ones that connect a bubble to another,
- the one that connects a bubble to a literal value (i.e. a string, a number, a date, etc).

The properties of things in RDF are called properties (how convenient). Therefore, following what we did for Classes, we might write:
- [obelisk:ownedBy](http://w3id.org/obelisk/ownedBy) [is a](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) [property](???).
- [obelisk:builtBy](http://w3id.org/obelisk/builtBy) [is a](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) [property](???).
- [obelisk:height](http://w3id.org/obelisk/height) [is a](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) [property](???).

We already know that [is a](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) is identified by the IRI [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type), so we can now go ahead and change that into:
- [obelisk:ownedBy](http://w3id.org/obelisk/ownedBy) [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) [property](???).
- [obelisk:builtBy](http://w3id.org/obelisk/builtBy) [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) [property](???).
- [obelisk:height](http://w3id.org/obelisk/height) [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) [property](???).

However, as we can see on the graphical representation we made earlier, there are two kind of properties: the ones connecting things (i.e. bubbles) together, and the ones attaching a 'value' to a thing. These are actually two different Classes of properties: the former are called [owl:ObjectProperty](http://www.w3.org/2002/07/owl#ObjectProperty), and the latter [owl:DataProperty](http://www.w3.org/2002/07/owl#DataProperty).

Which leads to our vocabulary looking like this:

```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

obelisk:Obelisk rdf:type rdfs:Class .
obelisk:Person rdf:type rdfs:Class .
obelisk:Sculptor rdf:type rdfs:Class .

obelisk:ownedBy rdf:type owl:ObjectProperty .
obelisk:builtBy rdf:type owl:ObjectProperty .
obelisk:height rdf:type owl:DataProperty .
```

### Connecting to other vocabularies

Terms in vocabularies are identified by IRI, and it's not for decoration: it means that you can use the identifiers across the entire Web. The cool thing about that is that it makes it really easy to reuse terms from remote vocabularies in your own vocabularies. For instance, [`obelisk:Obelisk`](http://w3id.org/obelisk/Obelisk) is quite a specific term, so it makes perfect sense to define it ourselves. What about [`obelisk:Person`](http://w3id.org/obelisk/Person) ? Maybe there is a reference vocabulary out there that defines the concept of person... And if you pay a quick visit to [our list of well-known vocabularies](/for-developers/apps/vocabularies/well-known), you will see that indeed there is! For instance, [Friend of a Friend](http://xmlns.com/foaf/0.1/) (foaf for short) defines the term [foaf:Person](http://xmlns.com/foaf/0.1/Person), and it would make our vocabulary easier to integrate into any application if we just reused this term instead of defining our own. Therefore, our vocabulary could look more something like this:

```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/>

obelisk:Obelisk rdf:type rdfs:Class .
obelisk:Sculptor rdf:type rdfs:Class .

obelisk:ownedBy rdf:type owl:ObjectProperty ;
    rdfs:domain obelisk:Obelisk ;
    # Now using the foaf:Person class
    rdfs:range foaf:Person .

obelisk:builtBy rdf:type owl:ObjectProperty ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range obelisk:Sculptor .

obelisk:height rdf:type owl:DataProperty ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range xsd:float .
```

Moreover, sculptors are people too! Therefore the class we define, and that is specific to our vocabulary, is a specialization of a class defined elsewhere. Saying so is actually very easy, with the [rdfs:subClassOf](http://www.w3.org/2000/01/rdf-schema#subClassOf) property:
```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/>

obelisk:Obelisk rdf:type rdfs:Class .
obelisk:Sculptor rdf:type rdfs:Class ;
    # We say that a obelisk:Sculptor is a specific type of foaf:Person
    rdfs:subClassOf foaf:Person.

obelisk:ownedBy rdf:type owl:ObjectProperty ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range foaf:Person .

obelisk:builtBy rdf:type owl:ObjectProperty ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range obelisk:Sculptor .

obelisk:height rdf:type owl:DataProperty ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range xsd:float .
```

## Adding human readability

### Adding multilingual support

So far all our labels and comments are written in English, yet there is no explicit indication of that in the vocabulary. To do so, RDF uses the concept of __language tag__: after a string, you can add a tag (e.g. `@en` for English, or `@es` for Spanish) to stipulate its language.

```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/>

obelisk:Obelisk a rdfs:Class ;
    rdfs:label "Obelisk"@en ;
    rdfs:comment "An obelisk is a four-sided pilar with a pyramid-shaped top."@en .

obelisk:Sculptor a rdfs:Class ;
    rdfs:label "Sculptor"@en ;
    rdfs:comment "An artist who sculpts obelisks."@en ;
    rdfs:subClassOf foaf:Person .

obelisk:ownedBy a owl:ObjectProperty ;
    rdfs:label "owned by"@en ;
    rdfs:comment "Relationship between an obelisk and the person who owns it, which is typically the person who ordered it, or to whom it was offered."@en ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range foaf:Person .

obelisk:builtBy a owl:ObjectProperty ;
    rdfs:label "built by"@en ;
    rdfs:comment "Relationship between an obelisk and the person who built it."@en ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range obelisk:Sculptor .

obelisk:heigth a owl:DataProperty ;
    rdfs:label "heigth"@en ;
    rdfs:comment "The distance from the ground to the highest point of the obelisk, in meters."@en ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range xsd:float.
```

And why stop there? [Cleopatra](https://cleopatra.solidcommunity.net/profile/card#me) and [Caesar](https://jcaesar.solidcommunity.net/profile/card#me) want their vocabulary to be reused throughout the entire Roman empire, so they decide to also provide Italian translations for their labels and comments.
```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/>

obelisk:Obelisk a rdfs:Class ;
    rdfs:label "Obelisk"@en ;
    rdfs:label "Obelisco"@it ;
    rdfs:comment "An obelisk is a four-sided pilar with a pyramid-shaped top."@en ;
    rdfs:comment "Un obelisco è un pilastro a quattro lati con una cima a forma di piramide."@it .

obelisk:Sculptor a rdfs:Class ;
    rdfs:label "Sculptor"@en ;
    rdfs:label "Scultore"@it ;
    rdfs:comment "An artist who sculpts obelisks."@en ;
    rdfs:comment "Un artista che scolpisce obelischi."@it ;
    rdfs:subClassOf foaf:Person .

obelisk:ownedBy a owl:ObjectProperty ;
    rdfs:label "owned by"@en ;
    rdfs:label "posseduto da"@it ;
    rdfs:comment "Relationship between an obelisk and the person who owns it, which is typically the person who ordered it, or to whom it was offered."@en ;
    rdfs:comment "Relazione tra un obelisco e la persona che lo possiede, che in genere è la persona che lo ha ordinato o a chi è stato offerto."@it ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range foaf:Person .

obelisk:builtBy a owl:ObjectProperty ;
    rdfs:label "built by"@en ;
    rdfs:label "costruito da"@it ;
    rdfs:comment "Relationship between an obelisk and the person who built it."@en ;
    rdfs:comment "Relazione tra un obelisco e la persona che l'ha costruito."@it ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range obelisk:Sculptor .

obelisk:heigth a owl:DataProperty ;
    rdfs:label "heigth"@en ;
    rdfs:label "altezza"@it ;
    rdfs:comment "The distance from the ground to the highest point of the obelisk, in meters."@en ;
    rdfs:comment "La distanza dal suolo al punto più alto dell'obelisco, in metri."@it ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range xsd:float.
```

## Adding some metadata

The finishing touch to this vocabulary is to add some metadata, so that people who find it will have a global description before going through its details. We already decided that the IRI of the vocabulary would be `http://w3id.org/obelisk/`, so this is the identifier we are going to use in RDF to say stuff about the vocabulary. In Linked Data terminology a vocabulary is called an [`owl:Ontology`](http://www.w3.org/2002/07/owl#Ontology), so the first thing to say is:
```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .

# `obelisk:` is equivalent to http://w3id.org/obelisk/
obelisk: rdf:type owl:Ontology .

# The remainder of the vocabulary is unchanged
obelisk:Obelisk a rdfs:Class ;
    rdfs:label "Obelisk"@en ;
    rdfs:label "Obelisco"@it ;
    rdfs:comment "An obelisk is a four-sided pilar with a pyramid-shaped top."@en ;
    rdfs:comment "Un obelisco è un pilastro a quattro lati con una cima a forma di piramide."@it .
# ...
```

### Adding some description

Much like we described each term with human-friendly labels and comments, we can add a title ([`dcterms:title`](http://purl.org/dc/terms/title)) and a description ([`dcterms:description`](http://purl.org/dc/terms/description)) to our vocabulary. To make it easier to reuse, we can also indicate a preferred prefix ([`vann:preferredNamespacePrefix`](http://purl.org/vocab/vann/preferredNamespacePrefix)) and a preferred IRI ([`vann:preferredNamespaceUri`](http://purl.org/vocab/vann/preferredNamespaceUri)) (since multiple IRIs may point to the same vocabulary).
```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

obelisk: rdf:type owl:Ontology ;
    dcterms:title "Obelisk ontology" ;
    # The description can be a multi-line text
    dcterms:description """
    The obelisk ontology aims at describing obelisks.
    """ ;
    vann:preferredNamespacePrefix "obelisk" ;
    vann:preferredNamespaceUri <http://w3id.org/obelisk/> .

# The remainder of the vocabulary is unchanged
obelisk:Obelisk a rdfs:Class ;
    rdfs:label "Obelisk"@en ;
    rdfs:label "Obelisco"@it ;
    rdfs:comment "An obelisk is a four-sided pilar with a pyramid-shaped top."@en ;
    rdfs:comment "Un obelisco è un pilastro a quattro lati con una cima a forma di piramide."@it .
# ...
```

### Give to Caesar what is Caesar’s

It is good practice to give ownership information about the vocabulary:
- who created it ([`dcterms:creator`](http://purl.org/dc/terms/creator)),
- who contributed to it ([`dcterms:contributor`](http://purl.org/dc/terms/contributor)),
- who publishes it ([`dcterms:publisher`](http://purl.org/dc/terms/publisher)),
- under what license it is distributed ([`dcterms:license`](http://purl.org/dc/terms/license))

```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

obelisk: rdf:type owl:Ontology ;
    dcterms:title "Obelisk ontology" ;
    dcterms:description """
    The obelisk ontology aims at describing obelisks.
    """ ;
    vann:preferredNamespacePrefix "obelisk" ;
    vann:preferredNamespaceUri <http://w3id.org/obelisk/> ;
    # Ownership information
    dcterms:license <https://creativecommons.org/licenses/by/4.0/> ;
    # Note that people are identified by their webid
    dcterms:creator <https://cleopatra.solidcommunity.net/profile/card#me> ;
    dcterms:contributor <https://jcaesar.solidcommunity.net/profile/card#me> ;
    # Here, the publisher is not a person, but an institution
    dcterms:publisher <https://jcaesar.solidcommunity.net/profile/organizations/spqr.ttl#spqr> .

# The remainder of the vocabulary is unchanged
obelisk:Obelisk a rdfs:Class ;
    rdfs:label "Obelisk"@en ;
    rdfs:label "Obelisco"@it ;
    rdfs:comment "An obelisk is a four-sided pilar with a pyramid-shaped top."@en ;
    rdfs:comment "Un obelisco è un pilastro a quattro lati con una cima a forma di piramide."@it .
# ...
```

### Versioning the vocabulary

A vocabulary may change over time, and so it is helpful to also provide some explicit version information. Details about versioning a vocabulary are given later in the [vocabulary publication tutorial](/for-developers/apps/vocabularies/publish), but we can add some basic information here, e.g.:
- a version number ([`owl:versionInfo`](http://www.w3.org/2002/07/owl#versionInfo))
- an initial publication date ([`dcterms:issued`](http://purl.org/dc/terms/issued))
- a version release date ([`dcterms:modified`](http://purl.org/dc/terms/modified))

This last modification yields a vocabulary in good shape to be used to describe our data:
```turtle
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix vann: <http://purl.org/vocab/vann/> .
@prefix dcterms: <http://purl.org/dc/terms/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

@prefix obelisk: <http://w3id.org/obelisk/> .

obelisk: rdf:type owl:Ontology ;
    # Description
    dcterms:title "Obelisk ontology" ;
    dcterms:description """
    The obelisk ontology aims at describing obelisks.
    """ ;
    vann:preferredNamespacePrefix "obelisk" ;
    vann:preferredNamespaceUri <http://w3id.org/obelisk/> ;
    # Ownership
    dcterms:license <https://creativecommons.org/licenses/by/4.0/> ;
    dcterms:creator <https://cleopatra.solidcommunity.net/profile/card#me> ;
    dcterms:contributor <https://jcaesar.solidcommunity.net/profile/card#me> ;
    dcterms:publisher <https://jcaesar.solidcommunity.net/profile/organizations/spqr.ttl#spqr>;
    # Version
    owl:versionInfo "0.1.0" ;
    dcterms:issued "52BC-01-01" ;
    dcterms:modified "2019-10-09".

obelisk:Obelisk a rdfs:Class ;
    rdfs:label "Obelisk"@en ;
    rdfs:label "Obelisco"@it ;
    rdfs:comment "An obelisk is a four-sided pilar with a pyramid-shaped top."@en ;
    rdfs:comment "Un obelisco è un pilastro a quattro lati con una cima a forma di piramide."@it .

obelisk:Sculptor a rdfs:Class ;
    rdfs:label "Sculptor"@en ;
    rdfs:label "Scultore"@it ;
    rdfs:comment "An artist who sculpts obelisks."@en ;
    rdfs:comment "Un artista che scolpisce obelischi."@it ;
    rdfs:subClassOf foaf:Person .

obelisk:ownedBy a owl:ObjectProperty ;
    rdfs:label "owned by"@en ;
    rdfs:label "posseduto da"@it ;
    rdfs:comment "Relationship between an obelisk and the person who owns it, which is typically the person who ordered it, or to whom it was offered."@en ;
    rdfs:comment "Relazione tra un obelisco e la persona che lo possiede, che in genere è la persona che lo ha ordinato o a chi è stato offerto."@it ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range foaf:Person .

obelisk:builtBy a owl:ObjectProperty ;
    rdfs:label "built by"@en ;
    rdfs:label "costruito da"@it ;
    rdfs:comment "Relationship between an obelisk and the person who built it."@en ;
    rdfs:comment "Relazione tra un obelisco e la persona che l'ha costruito."@it ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range obelisk:Sculptor .

obelisk:heigth a owl:DataProperty ;
    rdfs:label "heigth"@en ;
    rdfs:label "altezza"@it ;
    rdfs:comment "The distance from the ground to the highest point of the obelisk, in meters."@en ;
    rdfs:comment "La distanza dal suolo al punto più alto dell'obelisco, in metri."@it ;
    rdfs:domain obelisk:Obelisk ;
    rdfs:range xsd:float.
```
A reference version of this final vocabulary is available [here](/assets/misc/tutorials/quickstart-obelisk.ttl).

You can now use this vocabulary to [describe data for Solid](/for-developers/apps/vocabularies/use/extended). If you want a more advanced tutorial to create vocabularies, you can learn about [the NeOn methodology](/for-developers/apps/vocabularies/create/methodology).
