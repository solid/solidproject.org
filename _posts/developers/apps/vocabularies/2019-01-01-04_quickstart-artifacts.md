---
layout: for-developers
title: "Code with your vocabulary"
permalink: /developers/vocabularies/code/quickstart
tags: [apps]
categories: [Vocabularies, Quickstart]
exclude: true
redirect_from:
  - /for-developers/apps/vocabularies/code/quickstart
---

In this part of the tutorial, we will build on the [quickstart version](https://solidproject.org/assets/misc/tutorials/quickstart-obelisk.ttl) of the Obelisk vocabulary to develop a simple JavaScript application that answers the question: "Is this person an obelisk sculptor ?"

## The artifact generator

The last thing we want developers to do is memorize and type IRIs all over their code. That's why some libraries (such as `rdf-namespaces`) define constants giving easy access to the terms from common vocabularies:
```javascript
import { rdf } from 'rdf-namespaces';

// The value of iri will be http://www.w3.org/1999/02/22-rdf-syntax-ns#type.
const iri = rdf.type;
```
However, an issue with these libraries is that, by their nature, they are limited to just the common, well-known vocabularies. What about your specific vocabulary, designed for your app? How can you make the terms described in that vocabulary easily reusable in your code (and easily reusable in the code of others who may wish to reuse the terms you've defined in your cool vocabulary)?

The LIT artifact generator (which will be made publicly available soon) is a tool that takes any RDF vocabulary as input and automatically generates a nice source-code bundle (i.e. an artifact such as a Java JAR, or a JavaScript NPM module) that you can then easily use in your application. Let's see how it works.

### Generate the artifact

To generate a JavaScript artifact with the default options, you can use the following command:
- `lit-artifact-generator --inputResources https://solidproject.org/assets/misc/tutorials/quickstart-obelisk.ttl --outputDirectory /path/to/a/directory --noprompt`.

You can specify a local vocabulary file rather than an IRI if your vocabulary is not yet available online.

### Use the artifact

In your application (TODO: provide git repo with demo app), simply `require` the generated output, and use your vocabulary terms directly:
```javascript
const OBELISK = require("/path/to/generated/artifact/OBELISK")

// The value of sculptorIri will be http://w3id.org/obelisk/Sculptor
const sculptorIri = OBELISK.Sculptor.value;
// The value of sculptorDefaultLabel will be Sculptor
const sculptorDefaultLabel = OBELISK.Sculptor.labelInLang()
```
If you use an IDE, at this point you have auto-completion on all the terms of your vocabulary.

From there, we can build a simple app that tells you, based on a person's WebID, if that person is an obelisk sculptor or not. Note that the generated artifact is:
- imported on line 1,
- used on line 16 to get an IRI (`OBELISK.Sculptor.value`),
- used on line 20 to get a label (`OBELISK.Sculptor.labelInLang()`).

<iframe src="https://codesandbox.io/embed/lit-using-generated-artifact-8vfyf?fontsize=14" title="lit-using-generated-artifact" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

If you want to be recognised as an obelisk sculptor, you can uncomment line 35. You will have to add this app to your authorized apps to be able to write into your Pod.

Congratulations, you are now familiar with what's in a vocabulary, and saw how to code using one.

Next step: find out the [well-known vocabularies](/developers/vocabularies/well-known)
