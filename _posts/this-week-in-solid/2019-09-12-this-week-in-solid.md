---
layout: blog
title: Week Updates 2019-09-12
permalink: /this-week-in-solid/2019-09-12
tags: [weekly, updates]
categories: [Updates]
author: Mitzi László
---

# 12th September 2019

Hello and welcome to another issue of This Week in Solid!

[Solid](https://solidproject.org/information/) is a standard that describes how to build data storage and applications in such a way that users can conveniently switch between data storage providers and application providers and take the data generated along. If you have a suggestion on how to improve this description you may be interested in [joining the Explaining the Vision panel](https://github.com/solid/process/blob/master/panels.md#explaining-the-vision-panel) who are working on describing [Solid in a Nutshell](https://github.com/solid/Explaining-the-Vision-Panel).

This is a weekly summary of Solid progress.

Want something mentioned? Contact the Solid Manager at info@solidproject.org or [send a pull request](https://github.com/solid/information/edit/master/weekly-updates/next.md). Want to get involved? [Contributions are welcome](https://github.com/solid/information#develop).

This Week in Solid is openly developed [on GitHub](https://github.com/solid/information/edit/master/weekly-updates/next.md). If you find any errors in this week's issue please [submit a pull request](https://github.com/solid/information/pulls).

## Weekly Solid Call
Every Thursday there is an hour long public call where newcomers can introduce themselves, anyone can ask general questions about Solid, and we recap the weeks works on Solid. This week the call was cancelled so there are no minutes but next weeks call will be on the 19th September at 1000CEST on [this line](https://zoom.us/j/121552099).

## Press

### Talks & Articles
Have you seen any articles or talks about Solid this week? If you've seen any talks, articles, or written blog posts about Solid please do send them over for next week.

* [Solid Social Linked Data in Beijing](https://github.com/learnsolid/meetup/blob/master/2019-09-08%20:%20Beijing%20SoLiD%20Social%20Linked%20Data.pdf)

Upcoming:
* Mitzi L to speak at the [Nextcloud conference on the 15th September](https://nextcloud.com/conf-2019/)

### Upcoming Events
Solid Events are run by members of the Solid community like you. If you are interested in organising a Solid Event you may be interested in reading the tips for a organising successful Solid events [here](https://github.com/solid/information/blob/master/solid-events.md).

|Date|Event|Organiser|
| ------------- | ------------- |------------- |
|12-09-2019|[Solid Berlin](https://www.eventbrite.com/e/solid-meetup-berlin-tickets-70748445505)|[Christian Buggadei](https://github.com/JollyOrc)|
|10-10-2019|[Solid Amsterdam](https://www.meetup.com/nl-NL/Solid-Netherlands/events/263745707)|[Jeroen van Beele](https://github.com/jjvbeele)|

## Solid Implementation

If you have any new [apps](https://github.com/solid/solid-apps), [Pods](https://github.com/solid/pods), or [identity providers](https://github.com/solid/solid-idp-list) or there are updates to existing Solid implemntations make sure to add them to the list so they get included in next weeks edition.

### Solid Data Workers
NLNet Foundation [has accepted](https://nlnet.nl/project/SOLIDdataworkers/) the application to the NGI0 PET Fund for the Solid Data Workers project, which aims to populate and enrich the personal linked data graph hosted in a Solid pod by fetching data from existing sources through dedicated applications (called "Workers"). You can find progress notes about the various components involved in the project - still in a very early stage - at https://semantic.builders/
If you have any new [apps](https://github.com/solid/solid-apps), [Pods](https://github.com/solid/pods), or [identity providers](https://github.com/solid/solid-idp-list) or there are updates to existing Solid implemntations make sure to add them to the list so they get included in next weeks edition. There are no updates on Solid implementations this week.

### Have you ever heard about Startin'Blox? 
**Startin'Blox** is a french community of freelancers developping a framework of web components to be used in the creation of applications. TA DA ! On September 4th **Happy Dev** has published its brand new web site entirely made with **Startinblox** ! **Happy Dev** is a European network of 500+ digital freelancers: https://happy-dev.fr. And guess what, all **Startin’blox** components are **Solid** compatible. This is the 5th **Startin’Blox** application running in production, and more coming soon!

## Solid Development 
The Solid standard is currently referred to as [the specification](https://github.com/solid/specification) and all work is carried out on the [Solid GitHub](https://github.com/solid) account. Solid Development is led by the [editors](https://github.com/solid/process/blob/master/editors.md) who give the weekly update: 

* [Minutes from Panel Meeting #3](https://github.com/solid/data-interoperability-panel/blob/master/meetings/3-20190909.md#minutes) on 2019-09-09, which was focused on reviewing proposed [Use Cases for Data Validation](https://github.com/solid/data-interoperability-panel/pull/23)

## Updates on Solid Projects
[Solid projects](https://github.com/orgs/solid/projects) are activities happening on the Solid GitHub other than panesl. Below are the links to where there were active conversations on each of the projects.

### [Node Solid Server Project](https://github.com/orgs/solid/projects/2)
No updates

### [Data Browser Project](https://github.com/orgs/solid/projects/4)

A number of libraries that together combine to form the data browser have seen a version 1 release. More specifically, this concerns [mashlib](https://www.npmjs.com/package/mashlib), [solid-ui](https://www.npmjs.com/package/solid-ui) and [rdflib](https://www.npmjs.com/package/rdflib).

These releases do not contain major changes; rather, marking them as v1 merely represents the reality of trying not to introduce breaking changes to them.

#### Introducing user types Developer and Power User

The data browser team at inrupt is dedicated to improving the Solid data browser. As part of this work, we wanted to improve the onboarding experience for new users, and we identified the number of views (aka panes) as one of the challenges for new users. Some of these views are also difficult to use, and we concluded that it might be prudent to limit some of the views shown.

To address this we've introduced the concept of [user types](https://megoth.inrupt.net/public/SolidDataBrowser//current.html#user-types---developer-and-power-user). These are opt-in and saved in user's preferences, which are private by default. The idea is that the various views can describe which user types they consider as their audience, and the data browser will hide these views if the user hasn't self-assigned that user type.

An exception to this rule is that if a given resource is about a very specific thing, the data browser will still include the most relevant view for this, even thought the view have indicated an audience that you're not part of (this is useful when resources are shared with other users that have other or no user types self-assigned).

#### How will this affect my experience of the data browser

If the Solid server that hosts your Pod is using a version of the data browser that includes this feature _(note: solid.community and inrupt.net will upgrade to this as soon as we've fixed some bugs, probably by early October, 2019)_, you may notice that some views disappear. To access these views, you will have to set user roles for yourself. You can do this through Preferences, which you can access through your Dashboard (which is globally available through your user menu, or on the root of your Pod).

To get a complete list of views and which ones that are connected to the various user roles, please refer to [this document that describes the current state of the data browser (work in progress)](https://megoth.inrupt.net/public/SolidDataBrowser//current.html#conceptual-model-of-panes-in-the-current-data-browser).

## Tasks
If you are keen to get started but are not sure where, check out the [list of tasks](https://github.com/solid/information/blob/master/tasks.md). If you need help on something specific or know of something that would be useful to do make sure it's listed by [submitting a pull request](https://github.com/solid/information/blob/master/tasks.md)

Until next week!

[Mitzi László](https://github.com/Mitzi-Laszlo)
