---
layout: post
title: Notification in Solid
tags: [build], [pattern]
categories: [Build on Solid], [Common patterns]
permalink: Build-on-Solid/common-patterns/1-notification
exclude: true
---

# Notification in Solid apps

When developing social apps, where users interact asynchronously, or whenever an app wants to let you know that something relevant happened, notifications come in handy. Let's see how they are used in Solid.

## What you'll need for this tutorial

### Interacting entities

- We'll consider the online exchanges between [Cleopatra](https://cleopatra.solid.community) and [Julius Caesar](https://jcaesar.solid.community), both known for their activity on social media (among other things). In this case, we're not interested in Caesar as an imperarot, but rather as a successful book author: 'De Bello Gallico' is about to be out, and Caesar is having a release party for his memoirs. He wants to invite Cleopatra as a fellow elite member of the Roman society.
- If you have one, you'll also be able to use your own pod and webid to be invited to the party! These can easily be set up on the [solid community server](https://solid.community/).
- If you want to run pieces of code illustrating these examples, check out the [associated playground](https://tech.io/playgrounds/51181/common-patterns-with-solid)

### Vocabulary and concepts

Notifications in solid are based on the [Linked Data Notification (LDN) specification](https://www.w3.org/TR/ldn/):

![LDN overview](https://www.w3.org/ns/ldp/linked-data-notifications-overview.svg)

The following terms are defined by the LDN recommandation, and here is specifically how we use them in the context of solid:
- Sender: The application sending the notification
- Target: The id of the entity receiving the notification
- Receiver: The pod advertised by the Target as its own, and in particular hosting its inbox.
- Consumer: The app consuming the notification from the target's inbox
- Notification: The message itself

## First things first: inbox discovery

Notifications should be sent to inboxes, and any resource can advertize for an inbox (not only webids). It's up to the sender and to the receiver to select the appropriate resource when sending/receiving notifications. For instance, when sending a notification specifically related to Cleopatras busy schedule, one might consider addressing it to the inbox advertised by her calendar resource, `https://cleopatra.solid.community/public/calendar/inbox/`, that you can discover by examining the response to a GET on `https://cleopatra.solid.community/public/calendar`.

Let's dereference [cleopatra's webid](https://cleopatra.solid.community/profile/card#me), with a simple HTTP GET. You should be served an RDF document in which, among other things, you will find:
```
@prefix ldp: <http://www.w3.org/ns/ldp#>.
@prefix inbox: </inbox/>.

:me
    a schem:Person, n0:Person;
    ...
    ldp:inbox inbox:;
```

From this snippet, we see that the WebId advertises for an inbox, in this case `https://cleopatra.solid.community/inbox/`, thanks to the property `ldp:inbox`. And that's it, no we can get to notification sending!

[Try this live!](https://tech.io/playground-widget/1cee1f6e53d54b86a26dc8752218c3f018115/managing-notifications/890003/What%20is%20Cleopatra's%20inbox)

## Sending a notification

A notification is sent to the previously discovered inbox through a POST request, containing the notification body. Although it is not a strict requirement, a notification can be expressed using the ActivityStreams vocabulary (TODO: add link to voc documentation).

First, Caesar created the event [on his pod](https://jcaesar.solid.community/public/calendar/50BC/Martius/PartyAtCaesarPalace.ttl). He then sends the invite to Cleopatra's calendar inbox:
```
POST /public/calendar/inbox/ HTTPS/1.1
Host: cleopatra.solid.community
Content-Type: text/turtle

@prefix inv: <>.
@prefix as: <https://www.w3.org/ns/activitystreams#>.
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>.
@prefix xsd: <http://www.w3.org/2001/XMLSchema#>.

inv: a as:Invite;
    rdfs:label "Invitation";
    rdfs:comment "You are invited to my book release party";
    as:object <https://jcaesar.solid.community/public/calendar/50BC/Martius/PartyAtCaesarPalace.ttl>.
```

In the response, the Location header indicates the IRI of the created event. In order to get a name nicer than a generated UUID, Caesar could have proposed a name with a Slug header in his request.

[Try this live!](https://tech.io/playground-widget/1cee1f6e53d54b86a26dc8752218c3f018115/managing-notifications/890004/Let's%20get%20crazy%20sending%20out%20invites)
