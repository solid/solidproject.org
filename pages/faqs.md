---
layout: pages
title: faqs
permalink: faqs
---

Got a question that's not here? Try asking on the [Solid forum](https://forum.solidproject.org) or the [Solid tag on Stackoverflow](https://stackoverflow.com/questions/tagged/solid). 

* Table of Contents
{:toc}


# Definitions

## What is a Pod? 

A Pod is where users stores their data on the Web with Solid. ([see quote](http://www.youtube.com/watch?v=eJ6IrWc7Wt4&t=1m13s)). A user may store their data in one Pod or several Pods, and applications read and write data into the Pod depending on the authorisations granted by the user or users associated to that Pod.

<a id="webid"/>

# Storage 

## Can data exist in more than one Pod? 

**Yes**, the same data point can exist in more than one Pod. You can choose to have more than one Pod deliberately, for example for work and for home, in which case, some data may be relevant to both settings. You can also choose to have a single Pod and give selective access. Some data is relevant to multiple users so may be replicated in a slightly different way in another person’s Pod. For example, if you have a conversation with someone the data may be stored in both your Pod and the Pod of the person you spoke with. 

## Is it possible to use Solid offline (at least partially)? 

**Eventually, yes**. The Solid long term vision includes local first and a flexibility of different topologies of patch-passing sync networks. However, there are no implementations yet. 

# Identification

## Can Solid help store data of an organisation, not an individual?  
**Yes**. A WebID does not necessarily identify a single physical person: organisations and companies can get a WebID. More generally, a WebID may be used to identify a family, a team, or any group of people. Since the rights on a Pod are attached to WebIDs, Solid Pods can store data in any of these use cases with the same procedure. 

# The Business Model 

## Will Pod providers get paid? By who? 
**This will be determined by the market**. It is likely that several business models emerge, some where the user pays for storage, and some funded by advertising for instance, like on the current Web platforms. However, with Solid, if the terms of your Pod Provider change, or if you want to switch to an advertising-free Provider, you can do so conveniently without loosing your data, such as your contacts and chat history.

## If everyone used Solid would I lose my favourite internet services? 
**No**. Search engines and communication tools do not need to track you to work. Hopefully over time all the nice things you get from silos which don’t let you determine your data sharing preferences will be echoed by new solid-compatible ones which do.

# The Bigger Picture  

## Doesn't the [Data Transfer Project](https://datatransferproject.dev) fix the data concerns? 
It’s a great start. The next step is to build a healthy array of options for users to make their data work for themselves.

## How to integrate iOS and Android apps into Solid? 

It is possible for developers to take an iOS or Android app and make it Solid compatible by following the standard and supporting documentation. 

<details>
<summary><a>More details</a></summary>
Currently there are no developer kits in development for Android or iOS. If you really want to have an app that can be installed on Android or iOS, you might consider writing it as a progressive web app or writing it as a hybrid app.
</details>

## Does Solid use blockchain?
**No**. Solid is not a blockchain technology, but it can interact and use other blockchain initiatives.  

# Security 

<a id="fewer_passwords"/>

## Does Solid mean we won’t need so many passwords? 
**Yes**. When you use Solid, you only need to login to your Identity Provider. You can then use applications that interact with your Pod without logging in each of them individually, which is (in our opinion) simpler than having to create accounts on each and every service. However, you will still have to manage what data you would like to share with each application. 

## Is my data safe when I use a Solid application? 
**It depends on the app**. Your data is always encrypted in transit from Pod to app and vice versa. You should always be conscious about which apps you are using the terms of those apps. Solid allows you to selectively share data with specific applications. 

## As a Pod provider are you legally responsible for the data you are storing?
Pod providers have commitments to the individuals and legal entities that they provide services to based on the law of the countries in which the hosting provider is operating. As a Pod provider you should seek professional advice on how to be compliant. As an individual Solid user, you should carefully read the agreement with your hosting provider before agreeing. 

## Could a Solid app or Pod become another tech giant monopoly? 
Although an app or Pod could become very popular, with Solid, it is always possible for users to leave to another competitor app or Pod. People want different things so it is unlikely that one size will fit all.  

## Is it opt-in or opt-out to share my data when using Solid?
Opt-in. The default is for you not to share your data. You have to give your active consent to share your data.

 
## If I use Solid, who controls my data when I die?
You decide based on your will and your agreement with any hosting provider and app you have been using. 
 
## Why do we need Solid when we already have laws for data protection?
Data protection laws in a nutshell tend to promote transparency around data use and insist on informed explicit consent from the user. Solid provides a tools to make this possible. 

## Isn’t having free Web services a good exchange for giving access to my data?
That’s up to you, Solid just gives you the choice. 

## Is it wise to trust people to make ethical decisions on such a complicated issue?
There is a lot of variation in what people feel to be right and wrong, and ultimately it is down to you to decide what to do with your data. Solid does try to help you make informed choices by providing relevant information and by constantly validating the accuracy of that information.

