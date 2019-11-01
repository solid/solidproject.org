---
layout: pages
title: faqs
permalink: faqs
---

Got a question that's not here? Try asking on the [Solid forum](https://forum.solidproject.org) or the [Solid tag on Stackoverflow](https://stackoverflow.com/questions/tagged/solid). 

# Definitions

## What exactly is personal data? 
Personal data is personal. It refers to data sets describing a person ranging from physical attributes to their preferences and behaviour. Examples of personal data include: location, genome data, written communication, spoken communication, lists of contacts, internet browsing habits, financial transactions, supermarket spending, tax payments, criminal record, laptop and mobile phone camera lens recording, device microphone recordings, driving habits via car trackers, mobile and health records, fitness activity, nutrition, substance use, heartbeat, sleep patterns and other vital signs.

## What is a Pod? 
In Solid, a Pod is where a user stores their data. 

## What is a WebID? 
In Solid, a WebID is the way you login and connect to your contacts. 

## To what extent are Pods conceived as distinct from the WebIDs?

An identity provider delivers your WebID as a form of authentication. The identity provider is the domain your WebID Profile is found. A Pod provider delivers one or more domains pointed to by solid:storage statements which can be the same of different to your identity provider.

# Web Standards 

## How does Solid relate to other Web standards?
Solid defines how apps and Pods communicate data by defining a single API. The client-server API is made up of [HTTP]( https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), [LDP]( https://en.wikipedia.org/wiki/Label_Distribution_Protocol), and [WAC]( https://www.w3.org/wiki/WebAccessControl). 

Users have more options of where to store the data generated while using an app as well as who has access to what data, when and under which conditions. 

Clients can send small changes to and data file as though it were a database and can also subscribe to any changes other users make.  Then clients can talk to each other via the servers without the servers needing to know anything about the applications. So then as well as the client-server API, we need common standards for allow the clients to interoperate: “client-client” specs. How to discover the user’s contacts, the user’s general stuff, (type indexes), preferences, groups and communities, preferences within those communities. And then domain-specific standards for chat, photos, music, issue tracking, likes, bookmarks, health, fitness, academic record, CV, and so on. 

# Storage 

## Are Solid users expected to setup their own servers and self-host?

You can choose to self-host or select a hosting provider. Self-hosting means that your data would sit at home on your own physical hard drive.

## Can data exist in more than one Pod? 

Yes, the same data point can exist in more than one Pod. You can choose to have more than one Pod deliberately, for example for work and for home, in which case, some data may be relevant to both settings. You can also choose to have a single Pod and give selective access. Some data is relevant to multiple users so may be replicated in a slightly different way in another person’s Pod. For example, if you have a conversation with someone the data may be stored in both your Pod and the Pod of the person you spoke with. 

## Is it possible to use Solid offline (at least partially)? 

Yes, the Solid long term vision includes local first and a flexibility of different topologies of patch-passing sync networks. However, there are no implementations yet. 

## When I want to leave a Pod provider, can I take my data with me?
This depends on the agreement you have with your hosting provider. There are some support tools like [Terms of Service Don't Read](https://tosdr.org) to help you understand the small print more easily.

## When using Solid, how is data stored?
Solid provides a general purpose read-write REST API to store data in individual files (resources) and directories (containers).

# Identification

## How does Solid help store data of an organisation, not an individual?  
Organisations that are legal entities can get a WebID and Pod in exactly the same way as an individual would. 

## I just signed up but have two profile locations, what is the difference between the two? 

Solid allows you to use services from a variety of identity providers, Pod providers, and apps and take the data along with you when you switch. You can find out the differences between each of the service providers by looking at their respective websites and terms and conditions.

## How can I delete my WebID? 
If you want to delete your WebID your identity provider should offer an endpoint for doing that. 

# The Business Model 

## Will Pod providers get paid? By who? 
This will be determined by the market. 

## If everyone used Solid would I lose my favourite internet services? 
No. Search engines and communication tools do not need to track you to work.  Hopefully over time all the nice things you get from silos which don’t let you control your data will be echoed by new solid-compatible ones which do.

# The Bigger Picture  

## Doesn't the [Data Transfer Project](https://datatransferproject.dev) fix the data concerns? 
It’s a great start. The next step is to build a healthy array of options for users to make their data work for themselves.

## How to integrate iOS and Android apps into Solid? 

Currently there are no developer kits in development for Android or iOS.If you really want to have an app that can be installed on Android or iOS, you might consider writing it as a progressive web app or writing it as a hybrid app. 

## Arguably the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) or [Linked Data](https://en.wikipedia.org/wiki/Linked_data) never took off, so why is Solid working with it? 

Today, almost a quarter of all websites are currently using the semantic web or linked data. The Solid community is working to provide seamless convenience to developers to work with the semantic web or linked data more easily.

## Does Solid use blockchain?
No. Solid is not a blockchain technology, but it can interact and use other blockchain initiatives. 

# Security 

## Does Solid mean we won’t need so many passwords? 
Yes. When you use Solid you can use applications that would interact with your Pod and therefore the login mechanism would be much simpler than having to create accounts on each and every service. However, you will still have to manage what data you would like to share with each application. 

## Is data in my Pod safe? Is the Pod encrypted while it is stored on a provider's system?
Data stored on your Pod is not encrypted, ideally this would be introduced in the near future. 

## Is my data safe when I use a Solid application? 
Your data is always encrypted in transit. 

## Is data on my Pod stored on a centralised server of the provider?
Data on your Pod is stored where you choose to store it. You can either store your Pod on a hosting provider or chose to self host. All data on a single Pod is centrally stored in the same place. 

## If all my data is in one place, does it not become a vulnerable target for hackers? 
When it comes to malicious cyber attacks, an attack on a single source of many people's data is generally more likely than on an individual level. 

## How will Solid prevent 3rd parties from replicating data?
Solid currently is working on access controls to selectively limit the data access to applications. 

## Can I make sure that nobody has a copy of my data? 
Solid does not get the data you already sent out back. As soon as you start using Solid, you will be able to be more deliberate about your data sharing preferences from that point onwards. If you would like to ask for your data to be deleted from other services, In Europe there is a law called the [Right to be Forgotten](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e2589-1-1) which makes it possible for European citizens to ask for their data to be deleted. You can find template letters and instructions on how to exercise this right [here](https://www.datarequests.org/blog/sample-letter-gdpr-erasure-request/). 

## Does a copy of my data controlled by others exist? 
Yes. Today, other people and organisations have a copy of your data, but you may not. And, just because you have a copy of your data doesn’t necessarily mean that others won’t also have a copy.

## Could the Solid technology be a tool to trace or control criminal actions?
The law determines the remit of the government to track or control criminal action. The users choice of where to store their Pod would determine which jurisdiction had oversight of the data in that Pod. Expect if the user is based in Europe, in which case the General Data Protection Regulation applies regardless of where the Pod is stored. 

## As a Pod provider are you legally responsible for the data you are storing?
Pod providers have commitments to the individuals and legal entities that they provide services to based on the law of the countries in which the hosting provider is operating. As a Pod provider you should seek professional advice on how to be compliant. As an individual Solid user, you should carefully read the agreement with your hosting provider before agreeing. 

## Could Solid become another tech giant monopoly?
Solid is an open standard. Could the solid standards dominate the technical landscape? Yes, that would be ideal, so we would have one interoperable Solid web, not many.

## Could a Solid app of Pod become another tech giant monopoly? 
Although an app or Pod could become very popular, with Solid, it is always possible for users to leave to another competitor app or Pod. People want different things so it is unlikely that one size will fit all.  

## Is it opt-in or opt-out to share my data when using Solid?
Opt-in. The default is for you not to share your data. You have to give your active consent to share your data.

## What if I don’t want to share my data at all? 
Solid makes sure that the minimum amount of data is shared while still providing you with services. Some services do need to know something about you to be able to function, for example, to send you a product the company will need to know where to send that product to. 

## Who controls the data of a child using Solid?
The child. The parents or guardians of a child are responsible for managing the data sharing preferences of the child until they reach the legal age of consent in their country of location. 
 
## If I use Solid, who controls my data when I die?
You decide based on your will and your agreement with any hosting provider and app you have been using. 
 
## Why do we need Solid when we already have laws for data protection?
Data protection laws in a nutshell tend to promote transparency around data use and insist on informed explicit consent from the user. Solid provides a tools to make this possible. 

## Isn’t having free Internet services a good exchange for giving access to my data?
That’s up to you, Solid just gives you the choice. 

## Is it wise to trust people to make ethical decisions on such a complicated issue?
There is a lot of variation in what people feel to be right and wrong, and ultimately it is down to you to decide what to do with your data. Solid does try to help you make informed choices by providing relevant information and by constantly validating the accuracy of that information.

