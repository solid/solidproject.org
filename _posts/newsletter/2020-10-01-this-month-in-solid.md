---
layout: newsletter
title: This Month in Solid 2020-10-01
permalink: /newsletter/2020-10-01
tags: [monthly, updates]
categories: [Updates]
---
{% include twis-intro.md %}

## Updates

### [Events](https://solidproject.org/events)

1 October 2020 - This month at Solid World we heard from a pair of guest presenters diving into the practicalities of building sophisticated, scalable Solid apps and services.

Justin Bingham, founder and CTO of [Janeiro Digital](https://www.janeirodigital.com/), presented their work with the National Health Service (NHS) in the United Kingdom. We learned how the NHS aims to improve patients’ access to their complete personal medical records, and their ability to share additional data with their doctors between their appointments to improve their overall health. With Solid, Janeiro Digital has built a solution that gives patients the control to access, share, and manage their medical information with various services there to help them. 

Justin and Josh Collins, Janeiro Digital’s VP of Technology, highlighted how the company’s XFORM Health technology made it possible to integrate existing data silos into Solid Pods in a standardized, interoperable format. They also demonstrated the functional and intuitive patient-focused user interface they were able to build on top of this Pod data.

We also heard from one of Inrupt’s engineering leads, Jack Lawson, about their React SDK V2. To begin, he went over the three major components that make up the React SDK — authentication, visualization, and data syncing. Next, he discussed how the open source toolkit is meant to make it easy for developers to build Solid applications, avoiding stress over tedious details, offering a smooth implementation, and providing the opportunity to leverage Inrupt’s best practices and coding standards. Unfortunately, we ran out of time to see the demo, but plan to see in the near future!   

If you missed Solid World you can look out for recordings of the guest presentations coming soon to [our Vimeo page](https://vimeo.com/solidworld). The next Solid World will take place on 5 November 2020. Follow along at [solidproject.org/events](https://solidproject.org/events) as we finalize the agenda, which will highlight Solid-based projects from several industries and research areas.


28th September 2020 - "Solid - Citizens in control of their own data— A virtual event in which the Prime Minister of Flanders explains why the Flemish government is investigating the concept with great interest to improve its services. Information Flanders, Imec and Ghent University are organizing a theme afternoon about Solid in which they propose Flemish initiatives in the fields of culture and media, mobility and GovTech.

### [Press](https://solidproject.org/press)
* [Daily Beast - One Simple Trick to Fix the Web: Give Us Back Our Data! by Ruben Verborgh](https://www.thedailybeast.com/one-simple-trick-to-fix-the-web-give-us-back-our-data)

### In Other News

#### Solid Implementations
* see an [announcement](https://forum.solidproject.org/t/making-access-to-solid-pods-data-a-breeze-solideal-storage/3427) of [Solideal](https://github.com/solideal/storage)
* [solid-file-client v1.1.0](https://github.com/jeff-zucker/solid-file-client) has been published. New functions have been added: 1) ACL builder class 2) zip/unzip. All delete functions includes auxiliary resources
* [PoPock](https://scenaristeur.github.io/solid-vue-panes/chat) is a great chat app on Solid 
* [Hubl](https://hubl.world/en/), a collaborative tools for distributed organization developed by [Startin'blox](https://startinblox.com/en/). It includes a chat, a job board, a skill directory and so many features are coming. Here is the [code](https://git.startinblox.com/applications/hubl), [Startin'blox documentation](https://docs.startinblox.com) and if you want to meet us it's on community.startinblox.com
* [Coopedia](https://coopedia.starter.coop/en/), collaborative search engine for cooperative entrepreneurship, built to inspire the next generation of cooperative entrepreneurs worldwide developed by [Startin'blox](https://startinblox.com/en/). Here is the [developper pack](https://coopseurope.coop/sites/default/files/Developer%20Pack%20Coopedia.pdf), [Startin'blox documentation](https://docs.startinblox.com) and if you want to meet us it's on community.startinblox.com

#### Job Openings
* [Digita](https://www.digita.ai/careers) is hiring a Full Stack Developer and a Linked Data Principal. Email tom@digita.ai for more information.
* [Contact Inrupt careers](https://inrupt.com/careers) 
* O Team is recruiting a ETL (Extract Transform Load) Engineer, a Linked Data Ontology Designer, and a JavaScript Developer. Email jobs@o.team for more information. 

### Update from the [Specification Editors](https://github.com/solid/process/blob/master/editors.md)
The Solid Community Group's https://github.com/solid/authorization-panel/ is collecting use cases (current state: https://solid.github.io/authorization-panel/wac-ucr/ ). There is also a survey to better understand stakeholders views and interest in the use cases whether they'll implement or not. It will help us to prioritise on the requirements that the panel should work on. One does not need to be a spec implementer / developer to fill out the survey. It'd be even better to gather responses from a wide range of stakeholders to further identify privacy, security, and ethical concerns or real-world behaviour that we haven't adequately looked into - I'm certain there are many. The survey is here: https://github.com/solid/authorization-panel/blob/master/proposals/wac-ucr/uc-survey.md and we are in the process of recording the responses eg. here is mine: https://github.com/solid/authorization-panel/pull/109/files based on my own views/interests/development . You can wear whatever hat you like. Share as much or as little as you want. The point is to help develop some insights and improve.
If you plan to respond in context of a product/project you're working on, I'd suggest to coordinate with your team so that there is only one response to the survey based on that.
We are trying to also come out of the survey with a rough idea on ongoing implementations.. and whether a particular use case will have significant number of implementations when we push the spec(s) through roughly equivalent of Candidate Recommendation. We could even get a sense on why something is not supported eg. is it because it'd be hard to implement with a particular tool stack? Completely out of scope of needs? Any geopolitical restrictions? Ethical considerations? This is an open list of possibilities and the numbers alone don't capture it. So, having a brief comment helps.
