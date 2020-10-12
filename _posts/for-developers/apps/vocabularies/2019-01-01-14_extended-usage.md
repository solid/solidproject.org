---
layout: for-developers
title: "Describe data for Solid"
permalink: /for-developers/apps/vocabularies/use/extended
tags: [apps]
categories: [Vocabularies, Create]
exclude: true
---

Now that we have a vocabulary, we can use it to describe data. To this end, let us introduce the two most renowned obelisks designers of their time: [Vuittonluis](https://vuittonluis.solidcommunity.net/profile/card#me) and [G. Armani](https://garmani.solidcommunity.net/profile/card#me). if you look up their profile, you will notice that each of them describes himself as an [`obelisk:Sculptor`](http://w3id.org/obelisk/Sculptor):
```turtle
@prefix obelisk: <http://w3id.org/obelisk/> .
# The next line defines an empty prefix ":", which points to the current document (e.g. https://garmani.solidcommunity.net/profile/card)
@prefix : <#>.

:me
    # "a" is short for "rdf:type"
    a obelisk:Sculptor.
#...
```

In this case, the thing that we are talking about is [`:me`](https://garmani.solidcommunity.net/profile/card#me), and we are saying that this thing is of type [`obelisk:Sculptor`](http://w3id.org/obelisk/Sculptor). [Vuittonluis](https://vuittonluis.solidcommunity.net/profile/card#me) keeps track of the [obelisks he sold to VIP](https://vuittonluis.solidcommunity.net/public/gallery/prestigious%20sales/). For instance, he built a [custom one](https://vuittonluis.solidcommunity.net/public/gallery/prestigious%20sales/cleopatra.ttl#cleopatras_obelisk) for his queen [Cleopatra](https://cleopatra.solidcommunity.net/profile/card#me):
```turtle
@prefix : <#>.
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

:cleopatras_obelisk a obelisk:Obelisk ;
    obelisk:ownedBy <https://cleopatra.solidcommunity.net/profile/card#me> ;
    obelisk:builtBy <https://vuittonluis.solidcommunity.net/profile/card#me> ;
    obelisk:heigth "25.0"^^xsd:float.
```

[Cleopatra](<https://cleopatra.solidcommunity.net/profile/card#me>) has a [collection of obelisks](https://cleopatra.solidcommunity.net/public/collections/My%20obelisk%20collection/). Let's check it out:
```turtle
@prefix : <#>.
@prefix coll: <>.
@prefix ldp: <http://www.w3.org/ns/ldp#>.
@prefix obelisk: <http://w3id.org/obelisk/> .
@prefix me: <https://cleopatra.solidcommunity.net/profile/card#me> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

coll:
    a ldp:BasicContainer, ldp:Container;
    ldp:contains :myFirstObelisk, :myDesignerObelisk, :myOwnObelisk.

:myFirstObelisk a obelisk:Obelisk ;
    obelisk:ownedBy me: ;
    obelisk:heigth "3.0"^^xsd:float ;
    rdfs:comment "I was offered this as a child. I don't remember who built it, and it's funny how it seemed big to me back then.".

:myDesignerObelisk a obelisk:Obelisk ;
    obelisk:ownedBy me: ;
    obelisk:builtBy <https://vuittonluis.solidcommunity.net/profile/card#me>;
    obelisk:heigth "25.0"^^xsd:float ;
    rdfs:seeAlso <https://vuittonluis.solidcommunity.net/public/gallery/prestigious%20sales/cleopatra.ttl#cleopatras_obelisk> .

:myOwnObelisk a obelisk:Obelisk ;
    obelisk:ownedBy me: ;
    obelisk:builtBy me: ;
    obelisk:heigth "0.2"^^xsd:float ;
    rdfs:comment "I made this one myself!" .
```

Some of the elements (e.g. [ldp:Container](http://www.w3.org/ns/ldp#Container)) in there are specific to how Solid represents data storage. If you want to find out more about that, you can look up the [description of this vocabulary](/for-developers/apps/vocabularies/well-known/technical). Otherwise, we can conclude this short tutorial by creating a nice collection of obelisks in your own pod. You can see the vocabulary snippet into `src/collection.js`.

<iframe src="https://codesandbox.io/embed/my-first-obelisk-collection-1ybvq?fontsize=14" title="my first obelisk collection" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

However, it's not really convenient to manage vocabularies as plain text: it is error-prone, hard to maintain, and unpleasant to read. To address this issue, we introduce some helper libraries that enable [publishing your vocabulary as code artifacts](/for-developers/apps/vocabularies/publish/artifacts), and to [use your vocabulary in your code](/for-developers/apps/vocabularies/code).
