---
layout: page
title: Frequently Asked Questions
permalink: faqs
---

Got a question that's not here? Try asking on the [Solid forum](https://forum.solidproject.org) or the [Solid tag on Stackoverflow](https://stackoverflow.com/questions/tagged/solid). 

# Definitions

## What exactly is personal data? 
Personal data is personal. It refers to data sets describing a person ranging from physical attributes to their preferences and behaviour. Personal data is a legal concept, not a technical concept, and it is not utilised in all jurisdictions. 
<details><summary><a>More details...</a> </summary>
Examples of personal data include: location, genome data, written communication, spoken communication, lists of contacts, internet browsing habits, financial transactions, supermarket spending, tax payments, criminal record, laptop and mobile phone camera lens recording, device microphone recordings, driving habits via car trackers, mobile and health records, fitness activity, nutrition, substance use, heartbeat, sleep patterns and other vital signs.

In Europe <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e1489-1-1">personal data is defined under the General Data Protection Regulation (GDPR)</a> as "any information relating to an identified or identifiable natural person (‘data subject’); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier such as a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person;"
</details>

<a id="interoperability"/>

## What is interoperability? 

According to the <a href="https://dictionary.cambridge.org/us/dictionary/english/interoperability">Cambridge dictionary</a>, interoperability is "the quality of being able to be used together". For example, if you use a Solid app, you can store your data in any [Pod](#pod) because apps and Pods are interoperable. Also, you should be able to reuse data from one Solid calendar app to another because apps are interoperable. 

<a id="pod"/>

## What is a Pod? 

A Pod is where data is stored on the Web with Solid. ([see quote](http://www.youtube.com/watch?v=eJ6IrWc7Wt4&t=1m13s)). A user may store their data in one Pod or several Pods, and applications read and write data into the Pod depending on the authorisations granted by the user or users associated to that Pod.

<a id="webid"/>

## What is a WebID? 

**A WebID is a unique identifier** used to identify a specific user. An example of what a WebID could look like is: https://fulano.pod.provider/profile/card#me. To share data with a third party, a user associates sharing preferences to the WebID of that third party. Don't worry though: [it's not just one more login to remember](#fewer_passwords). 
<details>
<summary><a>More details...</a></summary>
A WebID is an <a href="https://tools.ietf.org/html/rfc3987">Internationalised Resource Identifier (IRI)</a> that can be dereferenced as a <a href="http://xmlns.com/foaf/spec/">FOAF</a> profile document serialized in <a href="https://www.w3.org/RDF/">RDF</a> <a href="https://dvcs.w3.org/hg/WebID/raw-file/tip/spec/identity-respec.html">(source)</a>. In Solid, WebIDs are used to identify Agents i.e. people and organisations as well as to manage their access rights though <a href="https://solid.github.io/specification/wac/">Web Access Control</a>. 
</details>

## How are Pods different from WebIDs?

**The two are different things**: [the WebID is an identifier](#webid), and [the Pod is a data storage place](#pod). They are provided by two potentially distinct entities: 
- The Pod Provider hosts Pods
- The Identity Provider allows you to only have one account (identified by your WebID) to log into multiple apps. 

To log into Solid apps and/or access data on Pods, you just have to provide your WebID and login to your Identity Provider, like "Sign in with Google" today. It is possible for the same company or organisation to be both a Pod Provider and a Identity Provider although they are **distinct separable services** that are compatible with other Pod Providers and Identity Providers (which means you are free to choose the provider that suits you the most). 
<details> 
<summary><a>More details...</a></summary>
<p>An Identity Provider implements an identification protocol (e.g. [OIDC](https://openid.net/connect/)), and allows you to prove that you own the WebID.</p>
<p>A Pod Provider delivers storage space under one or more domains, usually (but not necessarily) pointed to by <code>&lt;webID&gt; solid:storage &lt;pod&gt;</code> statements included in the profile document associated to the WebID.</p>
</details>

# Web Standards 

## How does Solid relate to other Web standards?

**Solid does not reinvent the wheel**. When you use Solid you will still be able to access your data using the same Web browser on the same computer. Solid is still the web, but with a few things added and a few assumptions overturned ([see quote at 33:30](https://www.bbc.co.uk/programmes/m000bj15)). 

Solid adds: 
* An identification system so that instead of having to sign in to everything with Google or Facebook you can sign in with your favourite Solid provider and you won't be tracked. 
* Ubiquitous sharing control so that you can share anything with anybody no matter which social media they happen to be part of. 
* A sort of personal cloud storage or a A USB storage in the sky which is called a Pod.

Solid overturns assumptions: 
* When you start a Solid app, instead of the app storing the data itself, it stores it on your Pod. When you use the app, you choose which app to use, and you choose which Pod to use with which app. 
<details>
<summary><a>More details</a></summary>
Solid is built on top of existing Web standards. The core Solid specification relies on <a href="https://www.w3.org/TR/ldp/">LDP</a> and <a href="https://solid.github.io/specification/wac/">WAC</a> (<a href="https://github.com/solid/web-access-control-spec">WAC draft</a>, both being based on <a href="https://tools.ietf.org/html/rfc2616">HTTP</a> and <a href="https://www.w3.org/RDF/">RDF</a> vocabularies. Solid also uses a subset of <a href="https://www.w3.org/TR/sparql11-overview/">SPARQL</a> UPDATE through HTTP PATCH queries. Identification in Solid is based on <a href="https://www.w3.org/2005/Incubator/webid/spec/tls/">WebID-TLS</a> and/or <a href="https://openid.net/connect/">OIDC</a>.
</details>

# Storage 

## Are Solid users expected to setup their own servers and self-host?

**No**. Self-hosting means that your data would sit at home on your own physical hard drive or server. Self-hosting is possible but not essential when using Solid, and it currently requires some technical knowledge. A Solid user can rely on an Identity Provider and a Pod Provider, and is **not expected to have any particular expertise**. It is also possible to self-host and become a small Identity Provider and Pod Provider, to provide Solid to your family, association, friends...

<details>
<summary><a>More details</a></summary>
The Solid standard is open as are some of its implementations such as such as <a href="https://github.com/solid/node-solid-server">Node Solid Server</a> meaning that anyone can self-host their own Identity and Pod or the Identity and Pod of a group of users. 
</details>

## Can data exist in more than one Pod? 

**Yes**, the same data point can exist in more than one Pod. You can choose to have more than one Pod deliberately, for example for work and for home, in which case, some data may be relevant to both settings. You can also choose to have a single Pod and give selective access. Some data is relevant to multiple users so may be replicated in a slightly different way in another person’s Pod. For example, if you have a conversation with someone the data may be stored in both your Pod and the Pod of the person you spoke with. 

## Is it possible to use Solid offline (at least partially)? 

**Eventually, yes**. The Solid long term vision includes local first and a flexibility of different topologies of patch-passing sync networks. However, there are no implementations yet. 

## When I want to leave a Pod provider, can I take my data with me?
Yes, unless the Pod provider doesn't allow you to. The best way to understand the service of a particular Pod provider is to read the Terms. There are some support tools like [Terms of Service; Didn't Read](https://tosdr.org) to help you understand the small print more easily.

<details>
<summary><a>More details</a></summary>
The data in Solid Pods is structured according to Linked Data principles by the applications writing them in the first place. Therefore, the Pod Provider is completely neutral regarding the Pod <b>content</b>, and the same data structure should be supported by any Pod Provider. The storage technology picked by each Pod Provider is <a href="#how-storage">another question</a>. 
</details>

<a id="how-storage"/>

##  When using Solid, how is data stored? 

**It depends on the Pod Provider**. From a user point of view, how the data is stored is not as important as how it is accessed and controlled. No matter who the Pod Provider is, in order to be Solid compliant, it has to expose data the same way: as resources in folders. However,the implementors of the standard are free to pick the underlying technologies according to their own purposes and constraints. That is why performance may vary from one Pod Provider to another.

<details>
<summary><a>More details</a></summary>
As any standard, Solid only describes the interaction model the system must be compliant with. The Pod Provider only exposes a REST read-write interface to the clients, to which the storage technology is irrelevant, as it is in most Web-based systems. How this interface binds with the storage is specific to each Pod Provider.
</details>

# Identification

## Can Solid help store data of an organisation, not an individual?  
**Yes**. A WebID does not necessarily identify a single physical person: organisations and companies can get a WebID. More generally, a WebID may be used to identify a family, a team, or any group of people. Since the rights on a Pod are attached to WebIDs, Solid Pods can store data in any of these use cases with the same procedure. 

## I just signed up but have two profile locations, what is the difference between the two? 

Solid specifications can be implemented by a variety of identity providers, Pod providers, and apps. This allows you to use services from a variety of providers and take the data along with you when you switch i.e. they are compatible. 

You can find out the differences between each of the service providers by looking at their respective websites and terms and conditions.

Having two WebIDs with two different identity providers or the same identity provider is very much like having two email addresses. These WebIDs are unrelated to each other, and can have different data sharing preferences attached to them, e.g. one allowed to access your company documents, and the other your health record. 

## If I join Solid, can I stop using it when I want?
**Yes**. To leave Solid, you will need to: 
1. Delete your Pod(s)
2. Delete your WebID 

Each Pod Provider may offer a its own procedure to delete Pods, which means closing the storage space they rented to you. Once your Pods are deleted, you can delete your WebID by closing your account at your Identity Provider. As for Pod Providers, the exact procedure may differ from an Identity Provider to the other. Remember that you need to log in your Identity Provider to have access to your Pods: if you delete your Identity Provider account first, you may lock yourself out of your Pods.

<details>
<summary><a>More details</a></summary>
Technically, you may host your <a href="http://xmlns.com/foaf/spec/">FOAF</a> profile independently from your Identity Provider, and have it point to a WebID you control. In this case, to fully delete your Solid identity, you may want to delete this profile document as well.
</details>

# The Business Model 

## Will Pod providers get paid? By who? 
**This will be determined by the market**. It is likely that several business models emerge, some where the user pays for storage, and some funded by advertising for instance, like on the current Web platforms. However, with Solid, if the terms of your Pod Provider change, or if you want to switch to an advertising-free Provider, you can do so conveniently without losing your data, such as your contacts and chat history.

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

## Arguably the [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web) or [Linked Data](https://en.wikipedia.org/wiki/Linked_data) never took off, so why is Solid working with it? 

The Semantic Web and Linked Data principles and technologies have always meant to **make data more reusable**, and to **make data independent from applications**, which is why it is at the core of Solid.

<details>
<summary><a>More details</a></summary>
The Semantic Web and Linked Data technologies are centered on the question of interoperability. By using these technologies, data is provided a context and is made more reusable. In order to achieve one of the goals of Solid and enable applications to share and reuse data without having the control over it, this kind of interoperability is key, and the Semantic Web and Linked Data principles and technologies seemed to be the fittest for this purpose. 
</details>

## Does Solid use blockchain?
**No**. Solid is not a blockchain technology, but it can interact and use other blockchain initiatives.  

# Security 

<a id="fewer_passwords"/>

## Are all Solid compatible Pod providers and apps privacy preserving? 

When software services are Solid compatible it means that you as a user are free to switch to a similar alternative and bring your data along. For example, if you wanted to switch messaging app you could bring your contacts and chat history with you to the new messaging app. 

## Does Solid mean we won’t need so many passwords? 
**Yes**. When you use Solid, you only need to login to your Identity Provider. You can then use applications that interact with your Pod without logging in each of them individually, which is (in our opinion) simpler than having to create accounts on each and every service. However, you will still have to manage what data you would like to share with each application. 

## Is data in my Pod safe? Is the Pod encrypted while it is stored on a provider's system? 
**It depends on the Pod Provider**. Pod providers can be Solid compliant without encrypting the data stored on the Pod providers' system. If this encryption is important to you, use a Pod provider that does encrypt you data. The Solid standard describes rules for controlling access to the data, but encryption is dependant on the storage system, which is controlled by the Pod Provider. 

## Is my data safe when I use a Solid application? 
**It depends on the app**. Your data is always encrypted in transit from Pod to app and vice versa. You should always be conscious about which apps you are using the terms of those apps. Solid allows you to selectively share data with specific applications. 

## Is data on my Pod in one physical place?
Data on your Pod is stored where you choose your Pod to be. You can either store your Pod on a Pod provider or chose to self-host. All data on a single Pod is centrally stored in the same place. 

## If all my data is in one place, does it not become a vulnerable target for hackers? 
All of your data will not necessarily be in one place, since you can store pieces of data across several Pods. When it comes to malicious cyber attacks, an attack on a single source of many people's data is generally more likely than on an individual level.

## Can Solid prevent 3rd parties from replicating data they have legitimate access to ?
**No**. In Solid, the user grants permission to third-party apps to access data in his/her Pod. When said application has read access over your data, you cannot prevent it from duplicating it (which you cannot do with current applications either). What changes is that you control exactly what information the app has access to, and you can revoke this access at any time. What happens when this access right is revoked is [another question](#copy-after-revoking).

<a id="copy-after-revoking"/>

## When I revoke access of an application to my data, can it still hold a copy of the data it previously accessed? 
**Solid cannot delete the data you already sent out**. As soon as you start using Solid, you will be able to be more deliberate about your data sharing preferences from that point onwards. If you revoke the access of an application to your data at any point in time, and this application previously duplicated the data it had the right to access, the copy is not destroyed. However, the application is no longer able to update this copy according to the modifications you make on your Pod.
<details>
<summary><a>More details</a></summary>
If you would like to ask for your data to be deleted from other services, In Europe there is a law called the <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e2589-1-1">Right to be Forgotten</a> which makes it possible for European citizens to ask for their data to be deleted. You can find template letters and instructions on how to exercise this right <a href="https://www.datarequests.org/blog/sample-letter-gdpr-erasure-request/">here</a>. 
</details>

## Apps have my data today. If I move this data to Solid, will they still have a copy ?
**Yes**. Today, other people and organisations have a copy of your data, but you may not. If you join Solid and move your data there, it does not prevent the apps already having your data to keep their copy. However, these apps will have to ask for your authorization to access the new data you store in Solid.

## Could the Solid technology be a tool to trace or control criminal actions?
The law determines the remit of the government to track or control criminal action. The users choice of where to store their Pod would determine which jurisdiction had oversight of the data in that Pod. Expect if the user is based in Europe, in which case the General Data Protection Regulation applies regardless of where the Pod is stored. 

## As a Pod provider are you legally responsible for the data you are storing?
Pod providers have commitments to the individuals and legal entities that they provide services to based on the law of the countries in which the hosting provider is operating. As a Pod provider you should seek professional advice on how to be compliant. As an individual Solid user, you should carefully read the agreement with your hosting provider before agreeing. 

## Could Solid become another tech giant monopoly?

**No**. Solid is **not a company**, it is an open standard. Could it dominate the technical landscape, by being adopted by many? Yes, that would be ideal, so we would have one interoperable Solid web, not many. However, being compliant with Solid does not require developers to ask permission from anyone before building their applications, and does not prevent users from choosing the apps they want, and share their data how they see fit. In that sense, Solid cannot become a monopoly, in the same way that the Web is not considered a tech monopoly.

## Could a Solid app or Pod become another tech giant monopoly? 
**No**. Although an app or Pod could become very popular, with Solid, it is always possible for users to leave to another competitor app or Pod. People want different things so it is unlikely that one size will fit all.  

## Is it opt-in or opt-out to share my data when using Solid?
Opt-in. The default is for you not to share your data. You have to give your active consent to share your data.

## What if I don’t want to share my data at all? 
Solid makes sure that the minimum amount of data is shared while still providing you with services. Some services do need to know something about you to be able to function, for example, to send you a product the company will need to know where to send that product to. If you don't want to share your data with these services, you may not be able to use them.

Due to the nature of access control in Solid, if you don't want to allow any app to access any piece of data on your Pod, you can do just that. If you don't want a certain app to read data on your Pod, you can not give it any access right. However, it would still be allowed to read the public data on your Pod (if any is available). 

## Who controls the data of a child using Solid?
The child. The parents or guardians of a child are responsible for managing the data sharing preferences of the child until they reach the legal age of consent in their country of location. 
 
## If I use Solid, who controls my data when I die?
You decide based on your will and your agreement with any hosting provider and app you have been using. 
 
## Why do we need Solid when we already have laws for data protection?
Data protection laws in a nutshell tend to promote transparency around data use and insist on informed explicit consent from the user. Solid provides a tools to make this possible. 

## Isn’t having free Web services a good exchange for giving access to my data?
That’s up to you, Solid just gives you the choice. 

## Is it wise to trust people to make ethical decisions on such a complicated issue?
There is a lot of variation in what people feel to be right and wrong, and ultimately it is down to you to decide what to do with your data. Solid does try to help you make informed choices by providing relevant information and by constantly validating the accuracy of that information.

## Are apps vulnerable to an “Origin” bypass? 

The Solid specification [warns](https://github.com/solid/web-access-control-spec#adding-trusted-web-apps) that the “trusted apps” feature is new and experimental, as it is known that [Origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) has the common weakness ([CWE-346](https://cwe.mitre.org/data/definitions/346.html)) of "origin validation".  

Currently when a user gives a Solid web app access to their Pod, the app Origin is added to that user’s list of trusted apps. The app then receives a token that allows it to interact with the Pod on behalf of the user, and only the Origin included with those interactions is verified using the list of trusted apps. 

Although standard browsers automatically include the Origin when they send HTTPS requests, a non-browser client is not required to send one. This means anyone with access to the aforementioned Origin-based token can use non-browser clients to bypass Origin validation for the Pod.

Solutions already are planned to revise and replace this experimental use of Origin, in order to evolve security of the trusted app feature.
