---
layout: for-developers
title: "Step 1: identifying the user"
permalink: /for-developers/apps/first-app/1-authentication
tags: [apps]
categories: [Writing a Solid application]
exclude: true
---

The starting point for any Solid Web App is to obtain the user's _WebID_. The WebID is a URL at
which one can find information about the user, and where to read or write data. The WebID will be provided by the user's _Identity Provider_ (which is usually their Pod Provider), but any interaction with a user's Pod will require explicit permission to be granted by the Pod owner.

To obtain this permission, we will be using [solid-auth-client](https://www.npmjs.com/package/solid-auth-client). Its usage is relatively straightforward:

1. Check if the user has already logged in.
2. If not, ask the user for their Identity Provider.
3. Then call `auth.login()` with the Identity Provider as the first argument.

You can ask the user for their Identity Provider using a regular `<input type="url">`, or using [a convenience library](https://www.npmjs.com/package/@solid/react/) that suggests the most commonly used Providers — at the time of writing, [solidcommunity.net](https://solidcommunity.net/) and [inrupt.net](https://inrupt.net/).

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
  // `https://inrupt.net` or `https://solidcommunity.net`) using a method of your choice.
  const identityProvider = await getIdentityProvider();

  /* 3. Initiate the login process - this will redirect the user to their Identity Provider: */
  auth.login(identityProvider);
}
```
<span class="codesandbox-button-wrapper">
[![Edit on CodeSandbox]({{site.baseUrl}}/assets/img/play-codesandbox.svg)](https://codesandbox.io/s/romantic-wood-0i6z7?module=%2Fsrc%2Findex.js)
</span>

Next: [Understanding Solid]({{site.baseUrl}}/for-developers/apps/first-app/2-understanding-solid)
