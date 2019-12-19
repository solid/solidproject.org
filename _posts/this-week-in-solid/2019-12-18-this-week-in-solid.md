---
layout: blog
title: Week Updates 2019-12-18
permalink: /this-week-in-solid/2019-12-18
tags: [weekly, updates]
categories: [Updates]
author: Mitzi László
---

# This Year in Solid 2019

Hello and welcome to another edition of [This Week in Solid](https://solidproject.org/this-week-in-solid)!

[Solid](https://solidproject.org) is a standard that allows users to switch between storage and app while taking the data along. 

This is the last edition of 2019 so here's a recap of This Year in Solid to look at the highlights of the year. 

### [solidproject.org](https://solidproject.org) is live and up to date 
At the start of the year information about Solid was dispersed over various locations, by different people, sometimes duplicated and even conflicting. Over the year we have come together to collect the information about Solid in a single repository (which was called 'Information'). This was the base content used to build solidproject.org which was put together with a lot of hard work from the [Creators](https://github.com/solid/process/blob/master/creators.md). This website is being maintained regularly so that it is up to date with the latest information. 

### A mailing list was set up 
This Week in Solid has been set up as a touchpoint to easily stay in the loop and share information with each other. Rather than having to check many channels and reach out to several people This Week in Solid has meant people working on Solid are more in the loop with what's going on. 

### The process of working in the Solid GitHub was recorded
Solid has grown meaning that more and more people are contributing and knowing how to slot in as a newcomer or how to get an overview of what others are working on and how to work together is more complex. Over the year we have worked on [recording who works on what and where](https://github.com/solid/process) so that newcomers know how to support others and when to start new projects. In particular, the process for improving the Solid standard has been defined along with teams defined by expertise and responsibility and shared [milestones](https://github.com/solid/specification/milestones). 

### Weekly recurring and well-attended calls on specific themes to develop Solid 
Every Thursday there has been a [W3C Solid Community Group](https://www.w3.org/community/solid/) alternating between 1600CET and 1000CET. On top of that, there have been more in-depth calls on specific topics such as authentication, data interoperability, and authorisation. [Read more](https://solidproject.org/standardisation) about when these calls are if you are interested in joining.

### 25 Solid Events, 60+ talks and 150+ articles mentioning Solid
Over the year there have been more than sixty [talks mentioning Solid](https://solidproject.org/press) along with [150+ articles](https://solidproject.org/press). Looking forward to many more in the coming year. Over 2019 we had 25 [Solid Events](https://solidproject.org/events) in 18 locations in the USA, Europe, and China. Solid Events have been a great way for local communities to form around their interest in Solid. Thank you to all the hard work by the event organisers for making this happen! Anyone can become a Solid Event organiser. [Reach out to other Solid Event organisers](https://gitter.im/solid/solid-events) or contact the Solid Manager if you would like to brainstorm ideas and learn how to make a successful local community.  

### Solid standardisation work
The Solid standard is still a work in progress. At the start of the year, Solid was being worked on in several different repositories asynchronously by many people with a variety of focuses. Now, there is a clear agreed destination where to put the final result as well as defined [milestones](https://github.com/solid/specification/milestones). Work on the test suite which is incorporated into the Solid standard has also started led by Kjetil Kjernsmo. 

### The Solid properties have been collected and maintained by the Administrators 
Solid properties, such as domains, hosting, and chat tools were organised organically by a variety of people meaning that when services needed maintenance it was not clear who was able to carry that out. This year a defined group called the [Administrators](https://github.com/solid/process/blob/master/administrators.md) have been carefully collecting and maintaining Solid properties to ensure consistent maintenance and a single touchpoint to flag issues. 

### More extensive and organised documentation for developers working with Solid 
As part of the Solid website launch a major effort went underway to collect [material for developers](https://solidproject.org/for-developers) as well as mature the content. Some big advances include [triple doc](https://vincenttunru.gitlab.io/tripledoc/) and an [exploration of client-side RDF libraries](https://github.com/inrupt/solid-lib-comparison). 

### Course teaching how to build a Solid app at University of Oviedo led by [Jose Emilio Labra Gayo](http://labra.weso.es)
Building a Solid application became part of an assignment for a course in software architecture taught in the second semester of the third year of the Bachelor's degree in Software Engineering at the School of Computer Science from the University of Oviedo, Spain taught by  [Jose Emilio Labra Gayo](http://labra.weso.es). 116 students were grouped in teams of four to eight students to describe the architecture a Solid chat app and to implement a prototype using open-source software. Although the students had previous knowledge of programming languages like Java and JavaScript most of them had no knowledge of RDF or semantic technologies which was also not part of the course. Despite this, fourteen groups managed to develop a Solid chat app. Mitzi László and [Jose Emilio Labra Gayo](http://labra.weso.es) assessed the fourteen apps to select a winner based on predefined criteria. At the prize ceremony, Mitzi László gave a talk about Solid, to both the students and several local companies including [Empathy](https://www.empathy.co), [Izertis](https://www.izertis.com/en/), and [The Cocktail](https://the-cocktail.com). [Empathy](https://www.empathy.co) went on to employ two of the students on the course to continue working on Solid as part of the company. 

### Several teams working full time to implement Solid in practice 
The Solid standard needs to be implemented to demonstrate it in practice. Here are few updates from the teams who have been busy with this: 
* [**Inrupt**](https://inrupt.com): 
**React SDK**
January 2019 saw the first release the  Solid React SDK v0.1.0. While barebones it was functional and integrated the LDFlex library for reading (and soon after, writing) linked data as well as the Solid React Application Generator. The Solid React Application Generator contained only basic critical functionality such as registration, login, workflow, and a welcome page with a profile image and name. The Solid React Application Generator relied on the Data Browser to actually set the data and integrated the style guide to give the Generator a clean look and feel, and a good jumping-off point for developers. In March, a file uploader was introduced, demonstrating how to upload profile images on the welcome page, along with internationalisation using standard React i18n tools to show current best practices for making a website accessible to multiple languages. In April live updates were added allowing applications to be responsive to real-time updates of data. In May, the ShExFormBuilder was released, a component that takes a ShEx shape and renders it as a form. The Profile page was updated to use this new tool as an example of how it could be used in the real world, using an externally hosted ShEx shape. In August, the Tic-Tac-Toe game was released which is a hybrid mashup of the concepts from Solid Chess and the standard React tutorial application. The Tic-Tac-Toe game integrates application data storage, inbox discovery, reading and setting permissions as well as sending real-time notifications. Our latest work is related to Form Language and working with Form Models. This new feature incorporates two main components that convert a ShEx shape into an RDF-based Form Model and dynamically render a form based on an RDF-based Form Model.This new functionality represents a new and highly configurable way of displaying forms within a Solid application. So much so, the Profile page was updated to render the form based on a User Profile form model that was originally created from a ShEx shape.
**Data Browser**
The focus has been to make it easier to develop the project itself via [mashlib-dev](https://github.com/inrupt/mashlib-dev). We've 
[also](https://github.com/solid/mashlib/pulls?utf8=%E2%9C%93&q=is%3Apr+is%3Aclosed) 
[fixed](https://github.com/solid/solid-panes/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93) 
[many](https://github.com/solid/solid-ui/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93) 
[issues](https://github.com/solid/chat-pane/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93) 
[and](https://github.com/solid/contacts-pane/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93) 
[bugs](https://github.com/solid/folder-pane/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93) 
[in](https://github.com/solid/issue-pane/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93) 
[the](https://github.com/solid/meeting-pane/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93) 
[related](https://github.com/solid/source-pane/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93) 
[projects](https://github.com/solid/pane-registry/pulls?page=2&q=is%3Apr+is%3Aclosed&utf8=%E2%9C%93), as well as contributing to related tools such as [rdflib](https://github.com/linkeddata/rdflib.js). Elements introduced include the header, dashboard, user menu, and [user roles](https://github.com/solid/userguide/blob/master/appendix/userroles.md) which allow users to better tailor their experience with the data browser. The code is being migrated to TypeScript to allow for better code maintenance with fewer bugs. The data browser team are always open for a chat on [on the forum](https://forum.solidproject.org/c/build-a-solid-app/solid-data-browser) ^_^
* [**Empathy**](https://www.empathy.co): At [Empathy](https://www.empathy.co) we envision an e-commerce search based on Solid where user rights including privacy prevail. Data should be stored in Pods so that relevant results depend on contextulised data that is controled by the user. Therefore, at [Empathy](https://www.empathy.co) we are working on a Pod management experience that makes the user feel that is a projection of their self image that they love to use. 
* [**Startin' Blox](https://startinblox.com)**: Startin' Blox is a framework of Web components that connect to Solid data sources with an emphasis on ease of use. Our philosophy is to start as quickly as possible to develop a SOLID ecosystem with an application and junior friendly approach. We are creative in our project choices in order to quickly prove the benefits of the decentralized web to as many people as possible. We have already realised four online applications and three are under development and we're more motivated than ever. 2020 promises to be a particularly intense year for us. We will focus on developing our community, consolidating our framework and multiplying the applications of our technology. Don't hesitate to contact us, we'll be delighted :)
* [**Ontola**](https://ontola.io) This year was all about linked data. We launched our new RDF based e-democracy app at [Argu.nl](https://argu.nl), published meeting data from [120+ Dutch governments](https://openbesluitvorming.nl) as linked data, and we shared various RDF libraries at [js.rdf.dev](https://js.rdf.dev). We also started the [@ontologies](https://github.com/ontola/ontologies/) repo, to make it easier to work with ontologies in JS. We worked closely with Inrupt to convert RDFlib.js to Typescript, we started work a new Front-end for Solid ([Mash](https://ontola-mash.herokuapp.com/)) and we improved our RDF-in-React library [link-redux](https://fletcher91.github.io/link-redux/). We're excited for next year, as we have many plans to increase adoption of Solid. 

## Wishlist and what to look forward to in 2020
There's plenty of work to carry out in the year to come. Here's a little list of things that people have mentioned they would love to see happen in 2020: stable standard, improved onboarding, user friendly apps, multiple Pod implementations, and better developing tools. 
* At CERN, the birthplace of the web, a group will be meeting to talk about work on Solid. [Read more](https://indico.cern.ch/e/CERN-Solid-brainstorming) about the Solid event at CERN. 
* There are already a few [Solid Events](https://solidproject.org/events) and [talks](https://solidproject.org/press) about Solid, more coming soon 
* There will be another course teaching Solid at the University of Oviedo

Until next year :) 

[Mitzi László](https://github.com/Mitzi-Laszlo)
