---
layout: page-about
title: About Solid
permalink: /about

---

# Solid

Solid is a [specification](https://solidproject.org/TR/protocol) that
lets people store their data securely in decentralized data stores
called Pods. Pods are like secure personal web servers for your data.

* Any kind of information can be stored in a Solid Pod.

* You control access to the data in your Pod. You decide what data to
  share and with whom (be it individuals, organizations, and/or
  applications). Furthermore, you can revoke access at any time.

* To store and access data in your Pod, applications use standard,
  open, and interoperable data formats and protocols.

## Solid Servers and Pods

A Solid Server hosts one or more Solid Pods. Pods are where you store
your data:

- Each Pod is fully controlled by the Pod owner (i.e., you).

- Each Pod's data and access rules are fully distinct from those of other Pods.

<img src="{{site.baseurl}}/assets/img/solid-pod-tour.svg" alt="[]" />

You can get a Pod from a [Pod Provider](/users/get-a-pod), or you may choose to 
[self-host](/self-hosting/) your Pod. 

You can even have multiple Pods. They can be hosted by the same Pod
Provider or by different Providers or be self-hosted or any combination
thereof. The number of Pods you have as well as which Solid Server or
Servers you use is effectively transparent to the applications and
services that you use. This is because, in the Solid ecosystem, data is
linked through your
[Identity](https://solidproject.org/TR/protocol#identity) and not
through the specifics of your Pod. This is true for your own data as
well as for data that others have shared with you.

#### Data

You can store any kind of data in a Solid Pod. 

<img src="{{site.baseurl}}/assets/img/store-anything-tour.svg" alt="[]" />

What makes Solid special is the ability to store data in a way that
promotes interoperability. Specifically, Solid supports storing Linked Data.
Structuring data as Linked Data means that different applications can work
with the same data.

#### Access

With Solid's 
[Authentication](https://solidproject.org/TR/protocol#authentication) and 
[Authorization](https://solidproject.org/TR/protocol#authorization) systems, 
you determine which people and applications can access your data. You grant or revoke access 
to any slice of your data as needed.  Consequently, you can do more with your data, 
because the applications you decide to use can be granted access to a wider and more diverse 
set of information.

And just as you can share your data with others, they can also share their data with you. 
This creates rich and collaborative experiences across a combination of
both personal and shared data.

## Solid Applications

Solid applications store and access data in Pods using the
[Solid Protocol](https://solidproject.org/TR/protocol).

Within the interoperable Solid ecosystem, different applications can
access the same data instead of requiring separate data silos specifically for the
applications. For example, instead of inputing your email with your bank
statement notification service, with your phone's billing service, etc., you can
instead store this information in your Pod and grant access to read your email information
to these disparate services/applications.

For developer resources, see [Developer Resources](/developers). For a listing of 
some Solid applications, see [Solid Applications](/apps).
