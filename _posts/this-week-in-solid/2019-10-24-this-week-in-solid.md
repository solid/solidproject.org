---
layout: blog
title: Week Updates 2019-10-24
permalink: /this-week-in-solid/2019-10-24
tags: [weekly, updates]
categories: [Updates]
author: Mitzi László
---

# 24th October 2019

Hello and welcome to another edition of *This Week in Solid*!

If you are familiar with this newsletter you can [skip directly to updates](##updates).

[Solid](https://solidproject.org) is a standard that describes how to build data storage and applications in such a way that users can conveniently switch between data storage providers and application providers and take the data generated along.

This is a weekly summary of Solid progress.

Want something mentioned? Contact the Solid Manager at info@solidproject.org. This Week in Solid is openly developed [on GitHub](https://github.com/solid/information/blob/master/weekly-updates/next.md). If you find any errors in this week's issue please [submit a pull request](https://github.com/solid/information/pulls). 

Want to get involved? [Contributions are welcome.](https://github.com/solid/process)

## Updates

### Weekly Solid Call
Every Thursday there is an hour long public call where newcomers can introduce themselves, anyone can ask general questions about Solid, and we recap the weeks works on Solid. 

This week Michiel de Jong gave an app development tutorial session where they worked through the inrupt SDK, data discovery, and how to send notifications inside a Solid app. 

Next weeks call will be cancelled so the next call will be on the 31st October at 1000CEST on [this line](https://zoom.us/j/121552099).

### Press
You can read about [Why Solid on SAFE](http://dweb.happybeing.com/blog/post/004-why-solid-on-safe/) by Mark Hughes and there were a couple of talks: 
* 2019-10-21 Sarven Capadisli at [Redecentralise](https://redecentralize.org) in London
* 2019-10-24 Mitzi László at [Ada Lovelace Festival](https://www.ada-lovelace-festival.com) in Berlin

Upcoming this week is: 
* 2019-10-26 [Solid London](https://www.eventbrite.com/e/solid-intro-workshop-this-is-for-everyone-join-the-movement-tickets-77597174237?aff=ebdssbdestsearch) organised by [Kartika Tulusan](https://github.com/ktulusan)
* 2019-10-26 to 2019-10-27 Sarven Capadisli, Mitzi László, Jackson Morgan, Paul Worral at the [inrupt](https://inrupt.com) stand at [MozFest](https://www.mozillafestival.org) in London

Have you seen any articles or talks about Solid this week? If you've seen any talks, articles, or written blog posts about Solid please do send them over for next week.

Solid Events are run by members of the Solid community like you. If you are interested in organising a Solid Event you may be interested in reading the tips for a organising successful Solid events [here](https://github.com/solid/information/blob/master/solid-events.md).

### Solid Implementation
If you have any new [apps](https://github.com/solid/solid-apps), [Pods](https://github.com/solid/pods), or [identity providers](https://github.com/solid/solid-idp-list), or there are updates to existing Solid implementations, make sure to add them to the list so they get included in next week's edition.

* [Data Browser](https://github.com/orgs/solid/projects/4): A new version of the Data Browser was deployed to https://inrupt.net. It's been available for testing on https://dev.inrupt.net for a while, and is now generally available. This release is another step toward making the Data Browser more approachable to new users: it adds the ability to mark yourself as a Power User or Developer. This will allow us to hide some more-advanced functionality from new users, while keeping it available to those to whom it might be relevant. The new option can be found under the new "Preferences" item in your user menu.

### Solid Standardisation
A new module to translate from the [Test Anything Protocol (TAP)](http://testanything.org/) to the [Evaluation and Report Language (EARL)](https://www.w3.org/TR/EARL10-Guide/) saw its first pre-release namely [TAP::Formatter::EARL](https://metacpan.org/release/TAP-Formatter-EARL). Since Solid tests will be formulated with RDF, and EARL is also RDF, there is great potential in making it all Linked Data. The current release isn't there yet, but it should export the most important data to allow us to create consistent interface for data coming from different test frameworks.

Until next week!

[Mitzi László](https://github.com/Mitzi-Laszlo)
