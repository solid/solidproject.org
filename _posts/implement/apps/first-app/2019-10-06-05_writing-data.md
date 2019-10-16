---
layout: post
title: "Step 5: Writing data"
permalink: implement/apps/first-app/5-writing-data
tags: [implement, apps]
categories: [Implememt]
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

So what's next? Start writing your own App! [Next step](../vocabularies): find a vocabulary that matches your use case; we've used
Schema.org here, but[ we listed some for you](../vocabularies/1-well-known), and there are many more on the [Linked Open
Vocabularies](https://lov.linkeddata.es/dataset/lov/). And if you're stuck and need help, do not
hesitate to ask your question at the [Solid Forum](https://forum.solidproject.org/).


Good luck!
