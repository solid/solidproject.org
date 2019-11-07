---
layout: post
title: "Publish your vocabulary on your Pod"
permalink: /for-developers/apps/vocabularies/publish/quickstart
tags: [apps]
categories: [Vocabularies, Quickstart]
exclude: true
---

To share your vocabulary across different apps, the best way is to **make it available online**. One easy way of publishing your vocabulary is **putting it in your Pod**. For instance, the obelisk vocabulary is published on [Cleopatra's Pod](https://cleopatra.solid.community/public/voc/obelisk.ttl). It is quite a straightforward operation:
- create it as a new `Source` in a directory where people can access it,
- paste your RDF in the newly created document, 
- there you go, you are the proud owner of a published vocabulary. 
If you don't have a Pod yet, you can check out our [list of providers](/use-solid), or [self-host your Pod](/for-developers/pod-server).

Using a Pod IRI to store a vocabulary is good enough when it is in development, but imagine that your vocabulary grows successful, and is used by multiple applications to describe data. If you want to change your Pod provider, the IRI of your vocabulary would change, and all the applications depending on it would break. In our [advanced tutorial](/for-developers/apps/vocabularies/publish), we'll detail how to get a nice IRI, as **permanent** as possible.

Next step: [use your vocabulary to describe some data](/for-developers/apps/vocabularies/use/quickstart).