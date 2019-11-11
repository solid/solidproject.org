---
layout: post
title: "Step 5: Writing data & what's next"
permalink: /for-developers/apps/first-app/5-writing-data
tags: [apps]
categories: [Writing a Solid application]
exclude: true
---

([This step as a Git commit.](https://gitlab.com/vincenttunru/notepod/commit/41d805dadb1d85eecb9675fe715cfa82a1d89ef5))

Now that the user's Pod is all set up, it's time to store some actual notes. Luckily, [now that we
already have our `notesList`]({{site.baseUrl}}/for-developers/apps/first-app/4-data-model), most of the heavy lifting is already done:

```javascript
async function addNote(note, notesList) {
  // Initialise the new Subject:
  const newNote = notesList.addSubject();
  // Indicate that the Subject is a schema:TextDigitalDocument:
  newNote.addRef(rdf.type, schema.TextDigitalDocument);
  // Set the Subject's `schema:text` to the actual note contents:
  newNote.addLiteral(schema.text, note);
  // Store the date the note was created (i.e. now):
  newNote.addLiteral(schema.dateCreated, new Date(Date.now()))

  const success = await notesList.save([newNote]);
  return success;
}
```
<span class="codesandbox-button-wrapper">
[![Edit on CodeSandbox]({{site.baseUrl}}/assets/img/play-codesandbox.svg)](https://codesandbox.io/s/github/Vinnl/notepod/tree/5-writing-data/?module=%2Fsrc%2Fservices%2FaddNote.ts)
</span>

With the user's Pod fully set up, the above is all there is to it, really!

So what's next? Start writing your own App! A couple of suggestions for avenues to explore while doing so:

- [Play around in the completed note-taking app](https://codesandbox.io/s/github/Vinnl/notepod/tree/5-writing-data/?module=%2Fsrc%2FApp.tsx).
- [Learn more about Vocabularies]({{site.baseUrl}}/for-developers/apps/vocabularies): learn about commonly used Vocabularies, how to find other Vocabularies if those do not match your use case, or how to write your own if none suit your app.
- [Try other libraries and tools]({{site.baseUrl}}/for-developers/apps/tools): we used [Tripledoc](https://vincenttunru.gitlab.io/tripledoc/) in this tutorial, but you might be interested in libraries for languages other than Javascript, or that give you more power.
- [Get help](https://forum.solidproject.org/): if you get stuck, do not hesitate to ask your question at our [Forum](https://forum.solidproject.org/) or [chat](https://gitter.im/solid/chat).


Good luck!
