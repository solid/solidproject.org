---
layout: for-developers
title: "NeOn, a vocabulary creation methodology"
permalink: /developers/vocabularies/create/methodology
tags: [apps]
categories: [Vocabularies, Create]
exclude: true
redirect_from:
  - /for-developers/apps/vocabularies/create/methodology
redirect_to:
  - https://github.com/solid/solidproject.org/wiki/NeOn,-a-vocabulary-creation-methodology
---

### The NeOn methodology

NeOn is a reference method for building **ontology networks** or _inter-related vocabularies_. NeOn proposes different scenarios, to enable reusing existing resources (both ontological and non-ontological, i.e., data models that are not vocabularies) or building the vocabulary from scratch. Details of several scenarios are provided in [this publication](https://pdfs.semanticscholar.org/3d34/d26ddc2024b80c3296a8552e160d973cd9a2.pdf); here, we will give an overview of the "build-from-scratch" scenario.

#### Requirements specification

Requirements for a vocabulary include its purpose and scope (what is the covered domain), the target and intended use (who will typically use this vocabulary, and in what kind of applications), and finally a set of **competency questions**. Competency questions are basically requirements expressed as questions that you should be able to answer using your vocabulary. Try to find questions covering the complete scope of your vocabulary. If the scope is wide, you might also want to group questions to ease modularization. To help you build the vocabulary, you can provide a "typical answer" to each question.

You should end up with a set of requirements that covers your complete scope, that is consistent (no contradiction), that is non-ambiguous, and that is understandable (try having someone else read your questions/answers, and see if it makes sense to them).

Let's apply NeOn to our comic book example:

- **Purpose**: I want to be able to describe the webcomics that I follow
- **Scope**: This vocabulary will describe any type of comic posted periodically on the web. Printed comics (as well as their web previews) are out of scope: we only focus on purely web comics.
- **Target**: Webcomic lovers
- **Intended use**: This vocabulary is intended to be used in applications helping you keep up with all your webcomics (there are som many of them)
- **Competency questions**:
  - Related to **Topic**:
    - Q: What are the webcomics that I follow and that talk about "romance, sarcasm, math, and language"? A: XKCD
    - Q: What are the topics of existing webcomics? A: nationality, romance, technology
  - Related to **Release**:
    - Q: What are the webcomics that are published daily? A: Sinfest, Dilbert
    - Q: What are the webcomics that I follow that have an RSS or an Atom feed, and what is this feed? A: XKCD, https://xkcd.com/atom.xml
    - Q: Are there publications in the feeds of the comics I follow that I haven't read? A: Yes, https://satwcomic.com/i-guess
  - ...

#### Ontology specification

Once you are happy with your requirements, you can begin specifying the ontology. At this point, you should have a whole bunch of terms from your questions and answers that can describe the concepts you want to put in your vocabulary. You can organize these terms into:

- **Classes**
- **Properties**
- **Individuals**

For instance, we could say that, based on the competency questions of our webcomic vocabulary, we identify:

- **Classes**: Webcomic, Topic, Person, Feed
- **Properties**: follows, has topic, has release frequency, has feed
- **Individuals**:
  - Persons: I (identified by my webid),
  - Webcomics: XKCD, Sinfest, Dilbert...
  - Topics: Nationality, Romance, Technology...

At this point, your vocabulary is basically a graph, with bubbles connected by arrows. Keep this schema somewhere, it's a nice touch to the documentation.

![The webcomic vocabulary]({{site.baseurl}}/assets/img/tutorials/vocabularies/webcomic-vocab.svg)

#### Ontology implementation

At some point, you will be happy with your vocabulary as a drawing, but in this form it cannot be used by applications; for that, it must be **constructed as RDF**. For this, you can use a tool such as [Protégé](https://protege.stanford.edu/) to help you construct your vocabulary through a GUI, without having to write the RDF directly.

Next step, [publish your vocabulary](/developers/vocabularies/publish)!
