---
layout: post
title: "Step 1: identifying the user"
tags: [build]
categories: [Build on Solid]
permalink: Build-on-Solid/writing-solid-applications/1-authentication
exclude: true
---

The starting point for any Solid Web App is to obtain the user's _WebID_. The WebID is a URL at
which one can find information about the user, and where to write data to. The WebID will be provided by the user's _Identity Provider_ (which is usually their Pod Provider) after the user
gives your Web App permission to interact with their Pod.

To obtain this permission, we will be using [solid-auth-client](https://www.npmjs.com/package/solid-auth-client). Its usage is relatively straightforward:

1. Check if the user has already logged in.
2. If not, ask the user for their Identity Provider.
3. Then call `auth.login()` with the Identity Provider as the first argument.

You can ask the user for their Identity Provider using a regular `<input type="url">`, or using [a convenience library](https://www.npmjs.com/package/@solid/react/) that suggests the most commonly used Providers — at the time of writing, [solid.community](https://solid.community/) and [inrupt.net](https://inrupt.net/).

In code, that process would look roughly as follows:

```typescript
import auth from 'solid-auth-client';

async function getWebId() {
  /* 1. Check if we've already got the user's WebID and access to their Pod: */
  let session = await auth.currentSession();
  if (session) {
    return session.webId;
  }

  /* 2. User has not logged in; ask for their Identity Provider: */
  // Implement `getIdentityProvider` to get a string with the user's Identity Provider (e.g.
  // `https://inrupt.net` or `https://solid.community`) using a method of your choice.
  const identityProvider = await getIdentityProvider();

  /* 3. Initialise the login process - this will redirect the user to their Identity Provider: */
  auth.login(identityProvider);
}
```

Next: [Understanding Solid](2-understanding-solid)
