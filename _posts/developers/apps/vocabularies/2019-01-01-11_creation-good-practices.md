---
layout: for-developers
title: "Vocabulary building best practices"
permalink: /developers/vocabularies/create/best-practices
tags: [apps]
categories: [Vocabularies, Create]
exclude: true
redirect_from:
  - /for-developers/apps/vocabularies/create/best-practices
---

Writing a vocabulary is good, writing a good vocabulary is better. To make it easier on others (and on yourself) when using your vocabulary, here is a set of good practices that you might consider applying. There are also external resources that we recommend you read:
- https://www.w3.org/2006/07/SWD/Vocab/principles


## <a id="documentation"/> Document your vocabulary

Basically, a vocabulary is code. And what should you always do when you write code ? That's right, write documentation !

### "Intrinsic" documentation

#### At the term granularity

There are tools within RDF to help you document your vocabulary. First, remember that an IRI should primarily be a machine-understandable identifier: it's nice if it's readable by humans, but it's not its intended use. Therefore,  you should always use `rdfs:label` and `rdfs:comment` to attach human-understandable descriptions to your concepts (please refer to [the vocabulary documentation](/developers/vocabularies/well-known) for more information). Pro tip: you can use the requirements you defined earlier to build the comments.

For instance:
```
@prefix webco: <http://w3id.org/webcomic/ns#>

webco:Webcomic a rdfs:Class;
    rdfs:label "Webcomic"@en;
    rdfs:comment "A comic periodically published online"@en.
    rdfs:comment "Une bande dessinée publiée en ligne périodiquement."@fr
```

Note that labels and comments can be attached a __language tag__, making internationalization a native feature of RDF.

#### <a id="vocab-doc"/> At the vocabulary granularity

Remember: your vocabulary itself will be online, with its own identifier. Which means that you can add useful metainformation to your vocabulary... as part of the published vocabulary.

For instance:
```
@prefix cc: <http://creativecommons.org/ns#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
@prefix vann: <http://purl.org/vocab/vann/> .

<http://w3id.org/webcomic/ns> rdf:type owl:Ontology ;
                               dc:description """
The Webcomic ontology aims at describing webcomics, the things they talk about, the artists who make them and the people who read them.
    """ ;
                               dc:title "Webcomic ontology" ;
                               foaf:primaryTopic "Webcomics" .
```

In the [publication](/developers/vocabularies/publish) tutorial, we'll discuss in more details the important metadata to attach to your vocabulary.

## "Human-friendly" documentation

Adding documentation as part of your vocabulary is a good thing, but it limits access to this documentation to people who can read RDF. Usually, this intrinsic documentation is leveraged by a tool that generates a good-looking html document capturing the information you embedded in your vocab. Here is a list of such tools:
- [Widoco](https://github.com/dgarijo/Widoco) is the most recent one, and it was recognized a useful resource by the community in 2017. Widoco generates an HTML file using [the LODE](#lode), enriched with JSON-LD annotations, generates diagrams, and comes with a GUI to help you specify relevant information.
- <a id="lode"/> [LODE](https://essepuntato.it/lode/) takes your vocabulary as an input, and generates an HTML document with the classes, properties and individuals it contains, described with their labels and comments.


## Reuse existing ontologies

We already mentionned that you should reuse as much existing ontologies as possible to describe the data used by your application. The same piece of advice applies when you build your own vocabulary: you can link your own terms to terms defined by other vocabularies, as we are, after all, in the world of Linked Data. You can basically, as any element (subject, predicate, object) of any triple, use a term defined in your vocabulary or in an external one.

### How to reuse ontologies

There are different "usual" ways to link to other vocabularies:

- __Equivalence__: You state that your term and the other represent exactly the same concept, and that logically, anything that goes for one goes for the other. For instance, we could say that `webco:Webcomic owl:sameAs schema:CreativeWork`. It is quite a strong statement, but it makes it possible to make plenty of deductions using a reasoner. The downside is that if you add a property to your local term, that is therefore considered applied to the other term, which can lead to contradiction when your vocabulary is reused. Let's imagine that the Webcomic vocabulary contains the triple `webco:Webcomic owl:disjointFrom ex:Book` (where `ex:Book` is a well-known term for books).  If a book ontology importing our webcomic vocabulary states that `ex:Book rdfs:subClassOf schema:CreativeWork`, an inconsistency is created, because `ex:Book` is both a subclass of and disjoint from `schema:CreativeWork`. The take-away message here is that equivalence should be used wisely.
- __Subclassing__: You state that your concept is a subclass of the remote concept you want to extend. It is not as powerful as equivalence, but it also causes less trouble. In this case, we would say that `webco:Webcomic rdfs:subClassOf schema:CreativeWork`.
- __Direct reuse__: In this case, you do not create a new term at all in your vocabulary, and you use the remote term directly. For instance, we could say that `webco:follows rdfs:domain schema:Person` instead of `webco:follows rdfs:domain webco:Person` and `webco:Person rdfs:subClassOf schema:Person`. This prevents redefining existing terms, but if not done carefully, it can create the same issues as equivalence.

Do as you see fit, but when in doubt subclassing is a safe option.

### Reusing different type of ontologies

Vocabularies are usually developed for a purpose, and this purpose can be of varying specificity/abstraction. They basically go on a spectrum from application-specific vocabulary only usable for one application, then reusable vocabulary that covers a specific domain (e.g. foaf to describe a person's contact info), and finally to very generic, upper-level vocabularies. The latter define abstract concepts, shared between many application domains. These definitions are too vague to be included as-is in any application, but their purpose is rather to be broad enough in order to cover concepts from different separate domains. Therefore, two ontologies dedicated to different domains may be connected through the same upper-level ontology, easing their common reuse in an application.

## <a id="modularization"/> Modularization

Vocabularies should have a focused scope and a defined, identifiable purpose. In order to achieve this, it is considered good practice to break down vocabularies that are too large and cover too wide a scope into smaller modules. This way, your application ends up resting on a network of interconnected modules, instead of on a monolithic vocabulary. It is __easier to maintain__, as each module has a scope which is more limited, and does not require an complete understanding of domain covered by the global vocabulary. It also helps __prioritizing__ module development. More information about ontology modularization in [this paper](https://hal.archives-ouvertes.fr/file/index/docid/710035/filename/WoMo_paper_2012_SBA_al.pdf)

## Ontology design patterns

Ontology design patterns are similar to design patterns in software engineering: they capture application-agnostic structures, with identified characteristics, providing a solution to a known recurrent issue. Similarly to ontology modules, ontology design patterns are reusable by nature. You can find some ontology design patterns on this [dedicated portal](http://ontologydesignpatterns.org). The key takeaway is that ontology design patterns __capture modeling efforts__: using them is a way to capitalize on previous work.

Let's implement these good practices by [improving the vocabulary we created](/developers/vocabularies/create/extended) in the quickstart tutorial
