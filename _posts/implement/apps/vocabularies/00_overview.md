---
layout: internal
title: "Vocabularies overview"
permalink: implement/apps/vocabularies
---

One of the core ideas behind solid is to make __data__ independant from __applications__, so that one can be in control of his/her own data and share it with the apps of his/her choice. For this to be possible, the same piece of data must be understood __consistently__ from one app to another. This requires agreeing on the meaning of the data, as conveyed by its description. Therefore, to make data reusable, it should be described with vocabularies that are widely used and known. This section of the documentation aims at help you navigate through the main concepts of using vocabularies to describe your data, and to build applications on top of that.

To address right away the elephant in the room, in the world of Linked Data, vocabularies can also be called ontologies. Don't be afraid by this: as far as we are concerned, an ontology is just a vocabulary used to describe data.

When building a new app, here are the steps in choosing suitable vocabularies:
- Looking into [well-known vocabularies](vocabularies/1-well-known)
- [Searching](vocabularies/2-discover) vocabulary catalogues
- [Building](vocabularies/3-build) your own vocabulary
- [Publishing](vocabularies/4-publish) your own vocabulary (and associated artifacts)

Remember that the end-game here is first and foremost reusability, and therefore building your own vocabulary should always be a last resort.
