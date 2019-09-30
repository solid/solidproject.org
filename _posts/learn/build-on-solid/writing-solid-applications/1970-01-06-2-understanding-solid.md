---
layout: post
title: "Step 2: Understanding Solid"
tags: [build]
categories: [Build on Solid]
permalink: Build-on-Solid/writing-solid-applications/2-understanding-solid
exclude: true
---

Now that we've [got the user's WebID](./1-authentication), we have a starting point for fetching
data from the user's Pod. Before we do so, let's review the fundamentals of the concepts behind
Solid, to the extent necessary to write Solid Web Apps. If you're already familiar with Linked Data,
feel free to [skip this step](3-reading-data).

In traditional back-ends, data is usually stored in database tables. When your back-end is a Solid
Pod, however, data is stored in _Documents_ living at a certain URL — similar to how HTML documents
live at a URL.

The user's WebID can be used both to identify someone — because there's only one person that
controls that URL — and as a pointer to a Document containing information relevant to that user.

My WebID is `https://vincentt.inrupt.net/profile/card#me`. That means that there is a Document at
`https://vincentt.inrupt.net/profile/card` that contains data relevant to me.

The most important thing to understand when writing a Solid app is how that data is represented. In
a nutshell, a Document contains a list of relationships between things. For example, the Document
referred to by my WebID contain the following relationships:

| Subject | Predicate | Object |
| --- | --- | --- |
| `<some person>` | has name  | Vincent   |
| `<some person>` | works at  | inrupt    |
| `<some person>` | job title | Developer |

(The common terminology is: every row contains a _Statement_, with in the first column the
Statement's _Subject_, in the second column a _Predicate_, and the _Object_ in the third column.
These three together are also commonly referred to as a _Triple_.)

You might notice that the table above is a description of `<some person>`: it's someone whose name
is Vincent, who works at inrupt and is a developer. However, `<some person>` is not really usable as
a stable and unique identifier: for all we know, someone else might have a Document elsewhere that
uses the exact same identifier. To solve this problem, Solid uses URLs as unique identifiers: after
all, the Document that describes the entries already has a URL, and we can be sure that no other
Document uses the same one.

And like specific elements in an HTML document can be referred to by appending their ID to the
document's URL, we can give elements we want to describe in a Document a unique identifier. As you
might have been able to guess, instead of `<some person>` we can use `me` - hence the WebID
`https://vincentt.inrupt.net/profile/card#me`!

So now we might consider my Document to look as follows:
    
| Subject | Predicate | Object |
| --- | --- | --- |
| `#me` | has name  | Vincent   |
| `#me` | works at  | inrupt    |
| `#me` | job title | Developer |

But there's one more thing to consider: interoperability. An important tenet of Solid is being able
to give multiple apps access to the same data: if I enter my name at service A, I don't want to have
to re-enter it at service B. But if one service uses "name" to refer to a person's full name,
whereas the other uses it to refer to a person's last name only, that would nip interoperbility in
the bud.

What's needed here is unique terms that have an agreed-upon definition. And just like we can have a
Document describing me, we could also make Documents describing a term. And in fact, many people
have done exactly that, for many different terms you might want to use. These Documents are called
_Vocabularies_, and there's one for things you might want to put on a business card at
http://www.w3.org/2006/vcard/ns — the _vCard_ Vocabulary. It contains Statements along the lines of:

| Subject | Predicate | Object |
| --- | --- | --- |
| `#role` | label  | Role |
| `#role` | comment | To specify the function or part played in a particular situation |
| `#organization-name` | label | Organization name |
| `#organization-name` | comment | To specify the organizational name |

(As a shorthand for `http://www.w3.org/2006/vcard/ns#role`, we will use `vcard:role`.)

So now we can use `vcard:role`, and be relatively confident that every other app using it will use
it in the way described at that URL. We can combine terms from different Vocabularies, e.g. the FOAF
("Friend of a friend") vocabulary has a term to refer to a person's name at
`http://xmlns.com/foaf/0.1/name`. My Document could thus look something like this:
    
| Subject | Predicate | Object |
| --- | --- | --- |
| `#me` | `foaf:name`  | Vincent   |
| `#me` | `vcard:organization-name`  | inrupt    |
| `#me` | `vcard:role` | Developer |

Everything that needs to be uniquely defined has a URL, with some _Literal_ values for the rest
("_Vincent_", "_inrupt_", and "_Developer_"). You could imagine "inrupt" to be replaced by a URL as well,
pointing to a Document describing the organisation itself — but for the intents and purposes of this
tutorial, we will leave it at this.

Phew! That should cover about all the Linked Data theory you should know to start working with
Solid. Next up: actually reading data from such a Document.

Next: [Reading data](3-reading-data)
