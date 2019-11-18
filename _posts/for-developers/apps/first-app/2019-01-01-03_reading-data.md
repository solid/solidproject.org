---
layout: post
title: "Step 3: Reading data"
permalink: /for-developers/apps/first-app/3-reading-data
tags: [apps]
categories: [Writing a Solid application]
exclude: true
---

([This step as a Git commit.](https://gitlab.com/vincenttunru/notepod/commit/5c534abdd2d6ed18be8ddc256427fb7bc0baae71))

We've [got the user's WebID]({{site.baseUrl}}/for-developers/apps/first-app/1-authentication) and we
[know that it points to a
Document]({{site.baseUrl}}/for-developers/apps/first-app/2-understanding-solid); it's time we actually
read some data from that Document!

We will be using [Tripledoc](https://vincenttunru.gitlab.io/tripledoc/), which was designed
specifically for this tutorial. Other libraries exist, such as
[ldflex](https://www.npmjs.com/package/ldflex), [rdf-ext](https://www.npmjs.com/package/rdf-ext) and
[rdflib](https://www.npmjs.com/package/rdflib); Tripledoc has a more limitied scope designed to aid
"thinking in Solid". If, at some point in the future, you want to start combining many different
data sources, you might want to consider investigating those alternative libraries.

We will try to get the user's name as follows:

1. Fetch the Document living at their WebID.
2. From that Document, read the Subject representing the current user.
3. Get the `foaf:name` of that Subject, if set.

In code, that looks like this:

```typescript
import { fetchDocument } from 'tripledoc';

async function getName(webId) {
  /* 1. Fetch the Document at `webId`: */
  const webIdDoc = await fetchDocument(webId);
  /* 2. Read the Subject representing the current user: */
  const user = webIdDoc.getSubject(webId);
  /* 3. Get their foaf:name: */
  return user.getString('http://xmlns.com/foaf/0.1/name')
}
```

Tip: you can avoid typing the full 'http://xmlns.com/foaf/0.1/name' every time using the library
[rdf-namespaces](https://www.npmjs.com/package/rdf-namespaces). It exports strings for the URLs of
the terms in common Vocabularies, turning the above into:

```typescript
import { fetchDocument } from 'tripledoc';
import { foaf } from 'rdf-namespaces';

async function getName(webId) {
  /* 1. Fetch the Document at `webId`: */
  const webIdDoc = await fetchDocument(webId);
  /* 2. Read the Subject representing the current user: */
  const user = webIdDoc.getSubject(webId);
  /* 3. Get their foaf:name: */
  return user.getString(foaf.name)
}
```
<span class="codesandbox-button-wrapper">
[![Edit on CodeSandbox]({{site.baseUrl}}/assets/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Vinnl/notepod/tree/3-reading-data/?module=%2Fsrc%2Fcomponents%2FDashboard.tsx)
</span>

Two things to note here. First, we call `getString` to indicate that we are looking for an actual
value (i.e. a Literal), rather than a URL. (Likewise, we could e.g. use `getInteger` or `getDecimal`
if we would expect a number.) However, the value could also have been a URL pointing to a different
Subject, in which case we could in turn fetch _that_ Document. If that was what we expected, we
could have used the method `getRef` instead.

The second thing to consider is that we cannot make any assumptions about what data is or is not
present in the user's Pod. Thus, `user.getString(foaf.name)` might also return `null`. This
could happen if the Document does not include the user's name, if the name is stored differently
(e.g. using `foaf:firstName` and `foaf:familyName`), or the `foaf:name` is not a literal string.

Now that we're able to read data from the user's WebID, let's find out how we can read arbitrary
other data.

Next: [Setting up a Data Model]({{site.baseUrl}}/for-developers/apps/first-app/4-data-model)
