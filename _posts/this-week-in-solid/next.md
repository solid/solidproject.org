---
layout: this-week-in-solid
title: This Week in Solid 2020-03-05
permalink: /this-week-in-solid/2020-03-05
tags: [weekly, updates]
categories: [Updates]
author:
---
{% include twis-intro.md %}
## Updates
### [Press](https://solidproject.org/press)
There have been a few new articles about Solid:
* [Jon Henshaw](https://twitter.com/henshaw) published an article about the work Angelo Veltens has been doing. [Read more here](https://www.coywolf.news/social/solid-profile-design/).
* [Travis Vachon](https://robboss.art/@travis) has published a series of articles about the Solid app prototyping he has been working on. Read[a solid foundation for a new web](https://trav.page/log/solid-foundation), [solid at ground level](https://trav.page/log/solid-ground/) and [writing the web with solid](https://trav.page/log/write-solid)
Solid Events are run by people like you, read more about tips on organising a successful Solid Event [here](https://solidproject.org/events) or [chat](https://forum.solidproject.org/c/solid-events) with other attendees and organisers. There have been several more Solid Events:
* We saw the first Solid Event in Africa led by Ali Siragedien in [Solid Khartoum](http://solid-khartoum.atspace.cc). You can watch a [recording of the event here](https://youtu.be/BhFFCzjAqm4).
* 30th January - [Solid Amsterdam](https://www.pldn.nl/index.php/2nd_Solid_Amsterdam_Meetup_%E2%80%93_January_30th,_2020) led by Jeroen van Beele
* 10th February - [Solid Berlin](https://www.eventbrite.com/e/solid-meetup-berlin-tickets-88843267605) led by Christian Buggedei
* 19th February - [Solid Barcelona](https://ingenieriainformatica.uniovi.es/actualidad/eventos/-/asset_publisher/uS6D/content/conferencia-solid-search:-introduccion-a-solid-y-como-cambiar-el-paradigma-de-los-buscadores-de-co?redirect=%2F) where [Alex Corvis](https://www.linkedin.com/in/alejandro-juan-garc%C3%ADa-a6087684/) from [Empathy](https://www.empathy.co/) presented his work on Solid search. [Watch a recording](https://youtu.be/xBopDO2NTxo) and [see the slides](https://docs.google.com/presentation/d/19Glq6dcIa83nliQR1fvS9ZzYglogFD7mT5Pb5JLFrIQ/edit?usp=sharing)
* 20th February - [Solid San Francisco](https://meetabit.com/events/february-2020-bay-area-solid-interest-club-meetup) led by [Travis Vachon](https://robboss.art/@travis)
* [Solid Utrecht] led by [Pieter van Everdingen](https://github.com/pietervaneverdingen). [See slides](https://www.slideshare.net/PLDN)
There have been several talks on Solid around the world:
* 10th January - At the [P2P Festival in Paris](https://p2p.paris/fr/event/festival-0/) there was a session on the Future of the Solid Spec led by Alice Poggioli from Startin' Blox
* 11th January - At the [P2P Festival in Paris](https://p2p.paris/fr/event/festival-0/) there was a talk by Jonas Smedegaard who gave an Introduction to Solid Box
* 27th January - Michiel de Jong from Inrupt presented on the [Workshop on Cloud Services for File Synchronisation and Sharing](https://cs3.deic.dk)
* 24th February - Davi Ottenheimer from Inrupt gave a talk about Solid at [RSA](https://www.rsaconference.com/experts/davi-ottenheimer-3)
* 7th February - Maria Dimou organised a [workshop about Solid at CERN](https://indico.cern.ch/e/CERN-Solid-brainstorming) where Sarven Capadisli and Mitzi László from Inrupt
* 12th February - Pieter van Everdingen spoke at [KNVI](https://www.knvi.nl/agenda/5e1b2ec705aac30110b2fe90/Je-persoonlijke-data-beheren-met-Solid?backUrl=%2Fagenda)
There are a few upcoming events where you can learn more and meet others working on Solid:
{%
 include talk.html
  date="2020-04-02"
  title="Bay Area Solid Interest Club"
  website="https://meetabit.com/events/4-2-20-bay-area-solid-interest-club-meetup"
  speaker="TBD"
%}
Have you seen any articles or talks about Solid this week? If you've seen any talks, articles, or written blog posts about Solid please do send them over for next week.
### Solidproject.org
The landing page has been redesigned, and most other pages have received a small touch-up. Additionally, most content has undergone editing to ensure the information is relevant and free of typos. All in all, the starting point for all things Solid should be more pleasant to use now.
### [Developer Tools](https://solidproject.org/for-developers/apps/tools)
* [Mark Hughes](https://github.com/theWebalyst) is working on [showing how to use various RDF libs with Sveltejs](https://github.com/theWebalyst/svelte-with-rdf-libs-webpack) and has rdflib.js and graphy working
* [Jeff Zucker](https://github.com/jeff-zucker), [Alain Bourgeois](https://github.com/bourgeoa), and [Otto_AA](https://github.com/Otto-AA) released **[version 1.0.0 of Solid-File-Client](https://github.com/jeff-zucker/solid-file-client)**, a library of methods to manage Solid files and folders that now has the ability to copy and move entire folder trees from one pod to another or back and forth between a pod and a local file system. It supports both text and binary files and works in either a browser or node/console context. Also new in this version is extensive support for linked resources (.acl and .meta files). [Read the release announcement.](https://forum.solidproject.org/t/announce-major-new-version-of-solid-shell/2561)
* [Jeff Zucker](https://github.com/jeff-zucker) also released a major new version of **[Solid-Shell](https://github.com/jeff-zucker/solid-shell)**, a tool for handling Solid files and folders from the command-line, in an interactive shell, and using batch-processing. You can automate and test tasks with robust error logging options. Solid Shell is built on top of Solid-File-Client and is therefore able to handle uploading, downloading, copying, moving, linked resources (.acl,.meta) and other Solid-specific features. [Read the release announcement](https://forum.solidproject.org/t/announce-major-new-version-of-solid-shell/2561).
* [Angelo Veltens](https://angelo.veltens.org/profile/card#me) published [Molid](https://molid.readthedocs.io/en/latest/), a mock server
* [Matthias Evering](https://github.com/ewingson) has upgraded [solidweb.org](https://solidweb.org), an experimental server, to 5.2.3
### [Apps](https://solidproject.org/use-solid/apps), [Pods, and Identity Providers](https://solidproject.org/use-solid)
If you have any new apps, Pods, or identity providers, or there are updates to existing Solid implementations, make sure to add them to the list so they get included in next week's edition. Here are a few updates on implementations of Solid:
* [Social app](https://scenaristeur.github.io/compagent-tuto/)
* [Darcy Ibex](https://ibex.darcy.is) got made in a hackathon. Darcy Ibex is a prototype social media stream based entirely on Solid
* [Pod Homepage](https://gitlab.com/angelo-v/pod-homepage), a potential homepage for your Solid Pod ([Live Example](https://angelo.veltens.org/)).
* [Solidarity](https://scenaristeur.github.io/solidarity/) is the start of a new chat forum project based on LongChat and inbox
* [Golf Course Assistant](https://gca-solid.now.sh/) is an app where golfers can track their score on the course. Built with the solid-react SDK.
* [Portal](https://github.com/steamory/portal) is a competely new data browser that allows you to explore your personal data in SoLiD Pod.[Concept](https://useconcept.art/) ([GitHub](https://github.com/travis/concept)) is an embarrassingly simple clone of [notion.so](https://notion.so) built on Solid. Currently very much in alpha.
* [Webbook](https://pmbrull.github.io/solid-webbook/)
### Job Openings
* [Digita is hiring](https://www.digita.ai/careers) a Full Stack Developer and a Linked Data Principal. Email tom@digita.ai for more information
* [Inrupt is hiring](https://inrupt.com/careers) a Head of Business Development, DevOps Engineer, and Senior Front-End Engineer/Architect.)
