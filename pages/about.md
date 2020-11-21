---
layout: page
title: About Solid
permalink: /about

---

# About Solid

Solid is a mid-course correction for the Web by its inventor, 
[Sir Tim Berners-Lee](/team). It realizes Tim's original vision for the 
Web as a medium for the secure, decentralized exchange of public 
and private data.

<img src="/assets/img/timbl-cern.jpg"/>

## Why fix the Web?

The [first web browser](https://worldwideweb.cern.ch/) was also an editor. 
The idea being that not only could everyone read content on the web, but 
they could also help create it. It was 
to be a collaborative space for everyone.

However, when the first browser that popularized the web came along, called 
Mosaic, it included multimedia and editing was taken out. It was considered 
too difficult a problem. This change was the first curtailing of the web’s 
promise and spawned an effort led by Tim and others to get the write 
functionality back. It was dubbed the ‘read-write web’ and led to Richard 
McManus' 
[seminal article](https://web.archive.org/web/20181214015324/http://readwrite.com/2003/04/19/the_readwrite_w) 
published in 2003.

The issue with writing data, as Wikipedia and others have learned, is that you 
need a degree of control over who can write what. That means you need to have 
permissions to dictate what individuals can do to the data. And to have 
permissions you need to have a system for identity - a way of uniquely 
authenticating that an individual is who they purport to be.

Of course the social networks solved this problem within their own systems 
using their own specific identity and access control, but these were not 
standard, not interoperable, and gave you no choice in what applications you
could use to access that data. You had to have your entire personal
or professional life within one silo for it to work. And since the Web
is ubiquitous, these silos exist across the data spectrum, from social
and medical to financial and civil. 

When your data is siloed away from you:

* You have hardly any visibility into what is being retained.
* You have little control over how it is used, or who is using it. 
* You have little choice in which applications you can use to access it.
* It is hard to use as a cohesive unit, specifically because it is siloed,
scattered across proprietary vendors, interfaces, and data formats.

All of these factors combine to make it very hard to access all of your
own data, and put it to work on your behalf.

## Why is Solid better?

Solid lets you bring your data together into a decentralized data 
store called a Pod. It is like a personal Web server for your data.

* You control the data in your Pod. 
* It is all stored
and accessed using standard, open, and interoperable mediums. 
* Any kind of information can be stored
in a Solid pod. 
* You can share slices of your data with the people, organizations, 
and applications you choose, and you can revoke that access at any time.

Because everything is interoperable, different applications can
read and write the same data, instead of creating new data silos that make 
your data difficult to use in its entirety.

Consequently, you can do more with your data, because the applications 
you decide to use can be granted access to a wider and more diverse 
set of information. This lets them give you more value, without 
forcing you to relinquish control of what's yours.

## How does Solid work?

A Solid Server hosts one or more Solid Pods, accessible via the
[Solid Protocol](https://solid.github.io/specification/#protocol).

A pod hosted on a Solid Server is fully compartmentalized from 
any others. It has its own set of data and access rules, and is
fully controlled by whoever it belongs to (i.e. you).

You decide where to host your Pod. You can opt to have it hosted for
you by an expanding network of 
[Pod Providers](/users/get-a-pod), or you can 
[host it yourself](/self-hosting/).

You can also have more than one pod, hosted in different places. This is 
effectively transparent to the applications and services you use, because
your data, wherever it is hosted, or data that has been shared with you, 
is all linked through your 
[Identity](https://solid.github.io/specification/#identity).

You can store any kind of data in a Solid Pod, and you can
determine who or what can access that data at a granular level,
using Solid's 
[Authentication](https://solid.github.io/specification/#authentication) and 
[Authorization](https://solid.github.io/specification/#authorization) systems.

The linked data model makes the data you store 
interoperable by using open, standard formats, that can be validated by 
the Solid Server to ensure data isn't corrupted by disparate applications.

This means that you can share select portions of your data with other 
people and groups you trust, or with an emerging ecosystem of 
applications and services, that can read and write data in your pod using
standard patterns for application interoperability.
