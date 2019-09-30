---
layout: default
title: FAQs
permalink: /faqs
---

Below are some FAQs. If you would like to add a question or elaborate on an answer, submit a pull request. 

You may also enjoy the [Solid tag on Stackoverflow](https://stackoverflow.com/questions/tagged/solid).

## What exactly is personal data? 
Personal data is personal. It refers to data sets describing a person ranging from physical attributes to their preferences and behaviour. Examples of personal data include: location, genome data, written communication, spoken communication, lists of contacts, internet browsing habits, financial transactions, supermarket spending, tax payments, criminal record, laptop and mobile phone camera lens recording, device microphone recordings, driving habits via car trackers, mobile and health records, fitness activity, nutrition, substance use, heartbeat, sleep patterns and other vital signs.

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

## Is it opt-in or opt-out to share my data when using Solid?
Opt-in. The default is for you not to share your data. You have to give your active consent to share your data.

## What if I don’t want to share my data at all? 
Solid makes sure that the minimum amount of data is shared while still providing you with services. Some services do need to know something about you to be able to function, for example, to send you a product the company will need to know where to send that product to. 

## Could Solid become another tech giant monopoly?
Solid is open source software and open standards. Could the solid standards dominate the technical landscape? Yes, that would be ideal, so we would have one interoperable solid web, not many.

## Could a Solid App become another tech giant monopoly? Could a Solid Storage Provider become another tech giant monopoly?
Yes, because these are open markets, it is possible that as time goes by one company or other becomes the dominant app provider,  or the dominant storage provider. Economies of scale tend to make monopolies eventually arise. If they do, it might even be necessary for antitrust agencies to put limits on the monopoly. But that is very speculative, and a long way down the road. We expect in the short and medium term the net effect of Solid to be a huge jump in diversity of offerings on all sides and an exciting robust competition. Ultimately on Solid, everybody can win and create applications that are larger than the sum of their parts. 

## Don’t the Data Transfer Portability Projects fix the data concerns? 
It’s a great start. The next step is to build a healthy array of options for users to make their data work for themselves. 

## As a hosting provider are you legally responsible for the data you are storing?
Hosting providers have commitments to the individuals and legal entities that they provide services to based on the law of the countries in which the hosting provider is operating. As a hosting provider you should seek professional advice on how to be compliant. As an individual Solid user, you should carefully read the agreement with your hosting provider before agreeing. 

## Could the solid technology be a tool to trace or control criminal actions?
The law determines the remit of the government to track or control criminal action. The users choice of where to store their Pod would determine which jurisdiction had oversight of the data in that Pod. Expect if the user is based in Europe, in which case the General Data Protection Regulation applies regardless of where the Pod is stored. 

## Will Solid Pod providers get paid? By who? 
This will be determined by the market. 

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
Solid does not get the data you already sent out back. As soon as you start using Solid, you will be the sole controller of the data you generate while using these apps. If you would like to ask for your data to be deleted from other services, In Europe there is a law called the Right to be Forgotten which makes it possible for European citizens to ask for their data to be deleted.

## Does a copy of my data controlled by others exist? 
Yes. Today, other people and organisations have a copy of your data, but you may not. And, just because you have a copy of your data doesn’t necessarily mean that others won’t also have a copy.
 
## If everyone used Solid would I lose my favorite internet services? 
No. Search engines and communication tools do not need to track you to work.  Hopefully over time all the nice things you get from silos which don’t let you control your data will be echoed by new solid-compatible ones which do.

## Can people working at the place where I choose to store my data see my data? 
Today, the Pod is not encrypted therefore your service provider could see your data. The Solid community is working on Pod encryption to change this. 

## When I want to leave a hosting provider, can I take my data with me?
This depends on the agreement you have with your hosting provider. 

## Arguably the Semantic Web or Linked Data never took off, so why is Solid working with it? 
Today, almost a quarter of all websites are currently using the semantic web or linked data. The Solid community is working to provide seamless convenience to developers to work with the semantic web or linked data more easily.

## What is the Solid architecture?
Technically, Solid is about creating a single solid API which any app can use to talk to any store, so the user has a choice of several places to put data, and complete control of sharing or not in in case. The client-server API is made of HTTP and LDP and WACL and some glue, extra HTTP headers, a little posix metadata. That is a significant, but finite, spec., which every Solid server must meet. Servers to storage, access control. Clients can send small changes to and data file as though it were a database, and can also subscribe to any changes other users make.  Then clients can talk to each other via the servers without the servers needing to know anything about the applications. So then as well as the client-server API, we need common standards for allow the clients to interoperate: “client-client” specs. How to discover the user’s contacts, the user’s general stuff, (type indexes), preferences, groups and communities, preferences within those communities. And then domain-specific standards for chat, photos, music, issue tracking, likes, bookmarks, health, fitness, academic record, CV, and so on. 
 
## Does Solid use blockchain?
No. Solid is not a blockchain technology, but it can interact and use other blockchain initiatives. 

## Are Solid users expected to setup their own servers and and self host?
You can choose to self host or select a hosting provider. Self hosting means that your data would sit at home on your own physical hard drive.

## How does Solid help store data of an organisation, not an individual?  
Organisations that are legal entities can get a WebID and Pod in exactly the same way as an individual would. 

## Can a data exist in more than one Pod? 
Yes, if the original data controller allows an app to transfer and store personal data, that data can exist in more than one Pod. 

## Does Solid mean we won’t need so many password? 
Yes. When you use Solid you can use applications that would interact with your Pod and therefore the login mechanism would be much simpler than having to create accounts on each and every service. However, you will still have to manage what data you would like to share with each application. 

## Where does authorisation happen? 
In the container server. 

## How does Solid ensure consumers really have control over data when companies need to have it on their own systems to actually get some work done?
Category: Solid: The Basics 
Data protection does not mean a total lock down of data, it means ensuring that data is used to the advantage and wishes of the individual to which that data belongs. If a service needs data to provide a service that the individual would like and does not put the individual at unnecessary risk, then that data transfer is legitimate. Solid provides an overview to an individual of their complete data via their Pod and allows them to conveniently give access and deny access at any point.

## How does a Pod determine who has access to data?
The specification for how Solid figures out access to a given resource is described in Web Access Control (WAC). The specification uses the terms Access Control List Resources (or simply ACLs) and agents (e.g. a random visitor or a authenticated user) to describe which modes of access a user might have to a resource (the modes described are Read, Write, Append, and Control).In addition to describing resources to a specific resource, ACLs can also be used to describe default access to resources that reside within a given container. So if a resource doesn’t have ACLs describing that specific resource, Solid will try to figure out which default access that resource have based on the containers it resides in. If it doesn’t find ACLs for the container, it will continue to look in the parent container, and so on, until it reaches the root container.You can think of containers as folders on your computer. In this case, Solid will look for ACLs for a resource by looking through the parent folders of a document until it comes to the root of your computer.

## What is a Solid pane?
Panes are an integral part of the Solid Data Browser, which is the view you’ll get when you’re consuming certain types of resources on the Solid server (and is the view most people discover once they’ve created a WebID and start looking around their Pod). 

You can think of them as interfaces that allows you to view aspects of a resource a given way, like you would look at something through the panes of a window. You can also reuse panes within other panes, which makes this metaphor very similar to composite design pattern, i.e. components that are a dear concepts to many programmers.

There are about 30 panes available in the Solid Data Browser today, such as profile, chat, contacts, folder, and source.

## How to add a contact?
If you want to do this using the Solid Data Browser (this is what will happen if you try to access your WebID) you can do this by using the tools Solid provides when you access your WebID.

When you are at your WebID, you can hover your name and see a set of tools. Amongst these are the Contact Pane, which is selected in the image below.

In this pane you can edit your contacts in the bottom section. If you don’t have any contacts from before, you’ll see a something like this:

To add a contact you’ll have to drag the the URL of the WebID onto the target-icon. You can see an animation of how this in done in the blog post of Don Tai. (Note: We might want to create our own animation instead of linking to external resources we cannot necessarily trust.)

## How can I access resources requiring authentication using curl?
The easiest way to make HTTP requests with curl is to reuse the cookie that is set when you log in with your browser. The default value for this is connect.sid, and you can find in your browsers Developers Tools.

In Firefox you’ll see something like:

In Chrome you’ll see something like:

Once you have the cookie value you can use this in your curl command by using the option cookie, e.g. --cookie "connect.sid=<your-cookie-value>".

## How to send HTTP requests using Postman? 
Making requests using Postman is similar to how you would do it with curl, i.e. set a cookie value. To see how you do this with Postman, check out their documentation on Cookies.

Note that you might run into trouble when using Postman to send requests to your local server if you’re using self-signed certificates. You can turn off the test that Postman does on self-signed certificates, but even then you might not be able to make it work.

https://forum.solidproject.org/t/testing-http-methods-on-local-server-using-postman/499
PROGRESS: Researching (easy to do on servers with proper certificates, not easy with self-signed certificates); Waiting for reply from Dmitri: https://forum.solidproject.org/t/testing-http-methods-on-local-server-using-postman/499/5 

## How do I  upload a document onto my Pod?
You can upload a document using the the Solid Data Browser by navigating to the container you want to upload the file to. If you navigate to your public container (e.g. https://YOUR-USERNAME.solid.community/public) you might see something like this:

By dropping documents onto the green plus-icon it will attempt to upload that file. If successful, you should see a new entry in the list of resources.

## How do I delete a document from my Pod?
To delete a document using the Solid Data Browser you need to navigate to the container the resource resides in (e.g. the container of https://megoth.solid.community/public/test.txt is https://megoth.solid.community/public/). Open the resource you want to delete, and look at the tools. Then choose the Internals pane:

Once you’ve selected that you should can hover the left side to see a stop sign icon:

By clicking this you’ll be asked to verify the action a couple of times, and then it will be removed. (Right now there is [a bug](https://github.com/solid/solid-panes/issues/71) so that the list isn’t reloaded when the resource is deleted, so you have to reload the page to see the change in the list.)

## How to add your picture to your Solid Pod? 
If you want to add a picture to your profile, the easiest thing is to use the Contact pane (it’s the default pane shown when you navigate to your WebID).

You should see something like this:

To add a profile picture, just drop it onto the picture area. (You can also have multiple profile pictures by adding multiple pictures this way.)

## How to change the sharing settings for a resource? 
To change the sharing settings for a given resource you can use the Sharing pane. This pane changes the ACLs of a the resource, is accessible via the Tools in resource, and is represented as a rainbow icon:

(If you cannot see the icon, it’s because you don’t have Control access to the resource.)

The sharing pane will look differently based on the current ACL state. If there is no specific ACL for the resource, you will see something like the following:

To enable specific sharing, click the button “Set specific sharing for this file”. Once you’ve done that, you’ll see something like the following:

(To return to the default sharing state of the container, click on the button in the bottom right corner.)

When you’re in the state with the groups in various colors you can alter the settings by dragging the current agents to other groups (e.g. dragging Everyone onto Editors will making the resource public for edit by everyone). You can also add new agents by dragging their WebID onto the group you want them in. The following is an example of how that can look:

Now, if you want to remove the specific access an agent have, you can do that by hovering the agent so you a stop sign:

By clicking that icon you’ll be prompted for verification. Verifying will remove the agent from the list.

Note: As long as you have Control access to a resource (meaning that you can see the rainbow icon), you’re able to change all kinds of access. That includes removing your own ability of changing access later on:

Then you’ll see something like this:

Currently there is no way of reverting this, and you’ll have to contact your Pod providers support if you need it changed.

## How can I delete my WebID? 
If you want to delete your WebID (and Pod), your Pod provider should offer an endpoint for doing that. This should be at <your-pod-provider>/account/delete, e.g.:

## How to integrate iOS and Android apps into Solid? 
Currently there are no developer kits in development for Android or iOS.

If you really want to have an app that can be installed on Android or iOS, you might consider:

- Writing it as a progressive web app, or
- Writing it as a hybrid app

## What is the best way to test while developing the panes in solid/solid-panes?
Status: My approach is quite convoluted, so might not be “the best” approach?
If you want to want to write your own Solid pane you want to clone the following repos:
solid/node-solid-server,
linkeddata/mashlib,
solid/solid-panes

First, you have to decide if you want to extend solid-panes, or if you want it to live in its own repo (some examples of this are solid/chat-pane, solid/contacts-pane, and solid/folder-pane). If you go for the latter, you want to npm link that repo in your local solid-panes repo.

In fact, npm link is the glue between all of this projects. In addition to linking your own pane repo to solid-panes (or just adding it to solid-panes directly), you want to link solid-panes in mashlib, and mashlib in node-solid-server. Lastly, you want to expose your changes to your local-server, which you can do by 
exposing mashlib/dist/mashlib.js instead of mashlib/dist/mashlib.min.js in lib/create-app-js, 
Make use of the newly exposed file in static/databrowser.html.
Now, for each change you do your custom pane that you want to expose, you need to run npm run build in each repo. This can get a bit tiresome, so you probably want to to have npm run watch running, as this will automatically build each time you do a change to your code.

‘Invalid login’ error message?
Category: Managing Your Solid Pod 
https://forum.solidproject.org/t/invalid-login-to-pod-on-own-server/142
STATUS: The specific issue is still being researched on, maybe not applicable for this FAQ?

## Why are Pods not encrypted? 

## What if my Pod provider stops being trustworthy and stops being Solid spec compliant so I can't switch to another Pod provider and bring my data with me anymore? what if pod providers just lock you in anyway? (it's not that easy to just download terabytes of data and move it to a different provider, without support of your current one)

## How does Solid ensure performance when querying lots of resources from all arround the web?

## Where would complex calculations like building up a personal news feed be? 

## Won't reliance on DNS get problematic? 

## When using Solid, how is data stored?
Solid provides a general purpose read-write REST API to store data in individual files (resources) and directories (containers).

## To what extent are Pods conceived as distinct from the WebIDs?

An identity provider delivers your webid as a form of authentication. The identity provider is the domain your WebID Profile is found. A Pod provider delivers one or more domains pointed to by solid:storage statements which can be the same of different to your identity provider.

## Is it possible to use Solid offline (at least partially)? 

Yes, the Solid long term vision includes local first and a flexibility of different topologies of patch-passing sync networks. However, there are no implementations yet. 

## What is a Pod? 

## I just signed up but have two profile locations, please could you advice the difference between the two? 
Solid allows you to use services from a variety of identity providers, Pod providers, and apps and take the data along with you when you switch. You can find out the differences between each of the service providers by looking at their respective websites and terms and conditions.
