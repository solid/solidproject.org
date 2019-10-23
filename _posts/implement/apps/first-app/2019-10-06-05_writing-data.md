---
layout: post
title: "Step 5: Writing data & what's next"
permalink: implement/apps/first-app/5-writing-data
tags: [implement, apps]
categories: [Writing a Solid application]
---

Now that the user's Pod is all set up, it's time to store some actual notes. Luckily, [now that we
already have our `notesList`](4-data-model), most of the heavy lifting is already done:

```javascript
async function addNote(note, notesList) {
  // Initialise the new Subject:
  const newNote = notesList.addSubject();
  // Indicate that the Subject is a schema:TextDigitalDocument:
  newNote.addNodeRef(rdf.type, schema.TextDigitalDocument);
  // Set the Subject's `schema:text` to the actual note contents:
  newNote.addLiteral(schema.text, note);
  // Store the date the note was created (i.e. now):
  newNote.addLiteral(schema.dateCreated, new Date(Date.now()))

  const success = await notesList.save([newNote]);
  return success;
}
```

With the user'd Pod fully set up, the above is all there is to it, really!

So what's next? Start writing your own App! A couple of suggestions for avenues to explore while doing so:

- [Learn more about Vocabularies]({{site.baseUrl}}/implement/apps/vocabularies): learn about commonly used Vocabularies, how to find other Vocabularies if those do not match your use case, or how to write your own if none suit your app.
- [Try other libraries and tools]({{site.baseUrl}}/implement/apps/tools): we used [Tripledoc](https://vincenttunru.gitlab.io/tripledoc/) in this tutorial, but you might be interested in libraries for languages other than Javascript, or that give you more power.
- [Get help](https://forum.solidproject.org/): if you get stuck, do not hesitate to ask your question at our [Forum](https://forum.solidproject.org/) or [chat](https://gitter.im/solid/chat).


Good luck!
