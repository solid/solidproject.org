---
layout: post
title: "Step 4: Setting up a Data Model"
tags: [build]
categories: [Build on Solid]
permalink: Build-on-Solid/writing-solid-applications/4-data-model
exclude: true
---

Now it's time to start working on some actual functionality: we'll be making an app that allows
people to keep notes. In this step, we'll prepare their Pod for our data model — much like how you
might prepare database tables in a traditional application with a custom back-end.

At a high level, we'll set up the data model as follows:

1. Check if there exists a Document to track notes in.
2. If it does not exist, create it.
3. Fetch that Document.

So to start with the first step: in which Document should we track notes? The answer can be found in
the concept of the _Public Type Index_.

The Public Type Index is itself a publicly accessible Document stored in the user's Pod. This
Document contains a list of links to other Documents, along with the type of data that is to be
included in those Documents. To store notes, the data type we will use is the
[`TextDigitalDocument`](https://schema.org/TextDigitalDocument), defined by
[Schema.org](https://schema.org/). Every time the user saves a note, we will store it as a
TextDigitalDocument. 

If the Document containing these notes was located in the user's Pod at `/public/notes.ttl`, their
Public Type Index could refer to it like this:

| Subject | Predicate | Object |
| --- | --- | --- |
| `#notes` | `rdf:type`       | `solid:TypeRegistration`     |
| `#notes` | `solid:forClass` | `schema:TextDigitalDocument` |
| `#notes` | `solid:instance` | `/public/notes.ttl`          |

The above Type Index includes one Type Registration, identified by `#notes`, that registers
`/public/notes.ttl` for the data type `schema:TextDigitalDocument`.

So how do we find the user's Public Type Index? It's usually listed in their profile, i.e. the
Document accessible at their WebID:

| Subject | Predicate | Object |
| --- | --- | --- |
| `#me` | `solid:publicTypeIndex` | `/settings/publicTypeIndex.ttl` |

This is a pattern you'll often encounter when writing Solid apps: you start with the user's WebID,
read the profile Document located there, and from there you can find the data you need.

So let's see what this looks like in code:

```javascript
import { fetchDocument } from 'tripledoc';
import { solid, schema } from 'rdf-namespaces';

async function getNotesList(profile) {
  /* 1. Check if there exists a Document to track notes in. */
  const publicTypeIndexUrl = profile.getNodeRef(solid.publicTypeIndex);
  const publicTypeIndex = await fetchDocument(publicTypeIndexUrl);
  const notesListEntry = publicTypeIndex.findSubject(solid.forClass, schema.TextDigitalDocument);

  /* 2. If it does not exist, create it. */
  if (notesListEntry === null) {
    // We will define this function later:
    return initialiseNotesList(profile, publicTypeIndex);
  }

  /* 3. If it does exist, fetch that Document. */
  const notesListUrl = notesListIndex.getNodeRef(solid.instance);
  return await fetchDocument(notesListUrl);
}
```

Given the `profile` [we fetched before](3-reading-data), we can find a reference to the public Type
Index under `solid:publicTypeIndex`. Then in the public Type Index, we can find the `#notes` entry
by looking for the Subject that has a Statement saying it is for the class
`schema:TextDigitalDocument`.

If that Subject is not found, we initialise a new Document to contain the notes — more on that
later. If it _is_ found, we find the URL of the Document that should contain notes under the
`solid:instance` key. All we then have to do is to call `fetchDocument` to retrieve the Document at
that URL.

One thing to keep in mind, again, is that you can make no assumptions about the data in the user's
Pod. Thus, to be safe you should also check whether the return value of `getNodeRef()` is not
`null`. Consider using [TypeScript](https://www.typescriptlang.org/) to get a warning when you
forget to do so.

That leaves us with one loose thread: the function `initialiseNotesList()`, which creates a new
Document that will contain the notes, and adds it to the Public Type Index. Let's take a look:

```javascript
import { createDocument } from 'tripledoc';
import { space, rdf, solid } from 'rdf-namespaces';

async function initialiseNotesList(profile, typeIndex) {
  // Get the root URL of the user's Pod:
  const storage = profile.getNodeRef(space.storage);

  // Determine at what URL the new Document should be stored:
  const notesListUrl = storage + 'public/notes.ttl';
  // Create the new Document:
  const notesList = createDocument(notesListRef);
  await notesList.save();

  // Store a reference to that Document in the public Type Index;
  const typeRegistration = typeIndex.addSubject();
  typeRegistration.addNodeRef(rdf.type, solid.TypeRegistration)
  typeRegistration.addNodeRef(solid.instance, document.asNodeRef())
  typeRegistration.addNodeRef(solid.forClass, forClass)
  await typeIndex.save([ typeRegistration ]);

  // Then finally return the new Document:
  return notesList;
}
```

If all the above looks awfully complicated: that's because it is. [Work is underway to make this
easier in the future](https://ruben.verborgh.org/blog/2019/06/17/shaping-linked-data-apps/),
allowing you to point a library to a data model, and having the library make sure that the user's
Pod is prepared to handle that. For now, though, you'll have to live with these convoluted
instructions.

Next: [Writing data](5-writing-data)
