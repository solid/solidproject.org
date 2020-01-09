---
layout: this-week-in-solid
title: This Week in Solid 2020-01-09
permalink: /this-week-in-solid/2020-01-09
tags: [weekly, updates]
categories: [Updates]
author: Mitzi László
---

{% include twis-intro.md %}

## Updates

### [Press](https://solidproject.org/press)
This week we had our first Solid event in Africa led by Ali Siragedien with [Solid Khartoum](http://solid-khartoum.atspace.cc). There are a few upcoming events where you can learn more and meet others working on Solid: 

{%
  include talk.html
    date="2020-01-10"
    title="P2P"
    website="https://p2p.paris/fr/event/festival-0/"
    speaker="Alice Poggioli"
%}

{%
  include talk.html
    date="2020-01-11"
    title="P2P"
    website="https://p2p.paris/fr/event/festival-0/"
    speaker="Jonas Smedegaard"
%}

{%
  include talk.html
    date="2020-01-27"
    title="Workshop on Cloud Services for File Synchronisation and Sharing"
    website="https://cs3.deic.dk"
    speaker="Michiel de Jong"
%}

{%
  include talk.html
    date="2020-02-10"
    title="Solid Berlin"
    website="https://www.eventbrite.com/e/solid-meetup-berlin-tickets-88843267605"
    speaker="Christian Buggedei"
%}

{%
  include talk.html
    date="2020-02-10"
    title="Solid San Francisco"
    website="https://meetabit.com/events/february-2020-bay-area-solid-interest-club-meetup"
    speaker="Travis Vachon"
%}

{%
  include talk.html
    date="2020-02-24"
    title="RSA"
    website="https://www.rsaconference.com/experts/davi-ottenheimer-3"
    speaker="Davi Ottenheimer"
%}

{%
  include talk.html
    date="2020-02-07"
    title="Solid CERN"
    website="https://indico.cern.ch/e/CERN-Solid-brainstorming"
    speaker="Maria Dimou, Sarven Capadisli, and Mitzi László"
%}

Solid Events are run by people like you, read more about tips on organising a successful Solid Event [here](https://solidproject.org/events) or [chat](https://forum.solidproject.org/c/solid-events) with other attendees and organisers. 

Have you seen any articles or talks about Solid this week? If you've seen any talks, articles, or written blog posts about Solid please do send them over for next week. 

### Solidproject.org

The landing page has been redesigned, and most other pages have received a small touch-up. Additionally, most content has undergone editing to ensure the information is relevant and free of typo's. All in all, the starting point for all things Solid should be more pleasant to use now.

### Developer Tools
* [Mark Hughes](https://github.com/theWebalyst) is working on [showing how to use various RDF libs with Sveltejs](https://github.com/theWebalyst/svelte-with-rdf-libs-webpack) and has rdflib.js and graphy working (though graphy only works in Chrome not Firefox atm).
* [Jeff Zucker](https://github.com/jeff-zucker) is releasing [version 1.0.0 of Solid-File-Client](https://github.com/jeff-zucker/solid-file-client), a library of methods to manage Solid files and folders that now has the ability to copy or move entire folder trees from one pod to another or back and forth between a pod and a local file system. It supports both text and binary files and works in either a browser or node/console context. Also new in this version is extensive support for linked resources (.acl and .meta files). By default linked resources are copied, moved, and deleted with their associated resource, but options allow you to adjust that behavior as well as to discover the location of linked resources. [Read the release announcement.](https://forum.solidproject.org/t/announce-much-updated-solid-file-client/2546/33)

### Apps, Pods, and Identity Providers
* [Angelo Veltens](https://github.com/angelo-v) published [Molid]](https://molid.readthedocs.io/en/latest/), a mock server
* [Social app](https://scenaristeur.github.io/compagent-tuto/)

### Job Openings 
* [Digita is hiring](https://www.digita.ai/careers) a Full Stack Developer and a Linked Data Principal. Email tom@digita.ai for more information
* [Inrupt is hiring](https://inrupt.com/careers) a Head of Business Development, Project Manager, DevOps Engineer, and Senior Front-End Engineer/Architect.  

Until next week!

[Mitzi László](https://github.com/Mitzi-Laszlo)

