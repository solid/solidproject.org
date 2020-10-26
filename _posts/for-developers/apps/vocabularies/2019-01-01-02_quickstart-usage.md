---
layout: for-developers
title: "Describe data"
permalink: /for-developers/apps/vocabularies/use/quickstart
tags: [apps]
categories: [Vocabularies, Quickstart]
exclude: true
---

Now that we have a vocabulary, let's use it to describe some real obelisk data! To this end, let us introduce the two most renowned obelisk sculptors of all time: [Vuittonluis](https://vuittonluis.solidcommunity.net/profile/card#me) and [G. Armani](https://garmani.solidcommunity.net/profile/card#me). If you look up their profiles, you'll notice that each of them describes himself as an [`obelisk:Sculptor`](http://w3id.org/obelisk/Sculptor):
```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
# The next line defines an empty prefix ":", which points to the current document (e.g. https://garmani.solidcommunity.net/profile/card)
@prefix : <#>.

# "a" is the standard shorthand for "rdf:type".
:me a obelisk:Sculptor.

#...
```
The following chart could be a graphical representation for this:
[G. Armani](https://garmani.solidcommunity.net/profile/card) is a [`obelisk:Sculptor`](http://w3id.org/obelisk/Sculptor)

![G. Armani]({{site.baseurl}}/assets/img/tutorials/vocabularies/obelisk_vocab_2.png)
We see on the top half our vocabulary, in its own document, and in the bottom half a snippet of the G.Armani's profile documentument. The profile document does not define new classes and properties: it is composed of data, which is described using existing vocabularies (such as the Obelisk vocabulary) by referencing the IRI of their terms (here, [`obelisk:Sculptor`](http://w3id.org/obelisk/Sculptor) for instance).

Describing data uses the same syntax as building a vocabulary: the thing that we are talking about is [`:me`](https://garmani.solidcommunity.net/profile/card#me), and we are saying that this thing is of [rdf:type](http://www.w3.org/1999/02/22-rdf-syntax-ns#type) [`obelisk:Sculptor`](http://w3id.org/obelisk/Sculptor).  

## Linking data in your Pod... and beyond!

Let's create the first obelisk of your collection in your own Pod. The piece of data we want to create looks like this:

![You're a proud obelisk owner!]({{site.baseurl}}/assets/img/tutorials/vocabularies/obelisk_vocab_3.png)

The new document containing your first obelisk is linked two other documents: the obelisk vocabulary, and your own profile document. Similarly to the [`obelisk:Sculptor`](http://w3id.org/obelisk/Sculptor) example, the new document references terms from the vocabulary. However, it also points to data from another document, here your profile. That's the power of Linked Data: each piece of data can point to another, so that your app can collect as much information as needed about the context of data.

You can see the previous graphs translated into RDF in the file `src/collection.js` of the sandbox below:
```turtle
@prefix : <#>.
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix me: <http://your.webid> .

:myFirstObelisk a obelisk:Obelisk ;
    obelisk:ownedBy me: ;
    obelisk:heigth "15.0" .
```

<iframe src="https://codesandbox.io/embed/my-first-obelisk-collection-1ybvq?fontsize=14" title="my first obelisk collection" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

However, it's not really convenient to manage vocabularies as plain text: it is error-prone, hard to maintain, and unpleasant to read.

Next step: [quickstart guide to using your vocabulary in code](/for-developers/apps/vocabularies/code/quickstart).
