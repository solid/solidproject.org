---
layout: for-developers
title: Getting Started
permalink: /developers/tutorials/getting-started
tags: [apps]
categories: [Tutorials]
exclude: true
redirect_from:
  - /for-developers/apps/first-app/
  - /for-developers/apps/
---

# Getting Started

- [Prerequisites](#prerequisites)
- [Build the Application](#build-the-application)
- [Run the Application](#run-the-application)

This tutorial creates an introductory application that uses Inrupt's
[JavaScript Client Libraries](https://github.com/inrupt/solid-client-js) to read
and write your name to your user profile.

This tutorial uses [npm](https://www.npmjs.com/get-npm) and [Parcel](https://parceljs.org/)
to run the application locally on `localhost:1234`.

![Locally Run Getting Started Application]({{site.baseurl}}/assets/img/tutorials/locally-run-application.png)

> You can also try out the application in CodeSandbox.
>
> [![Edit on CodeSandbox]({{site.baseUrl}}/assets/img/play-codesandbox.svg)](https://codesandbox.io/s/github/solid/solidproject.org/tree/main/_posts/developers/apps/inrupt-tutorial/codesandbox/?hidenavigation=1&module=%2Findex.js&view=editor)
>
> Inside CodeSandbox, rather than running the application in the embedded browser, open the application in a new window to be able to log in.

## Prerequisites

### Register Your Pod and Create Your Profile

If you don't already have a Pod, you can register one now:

 1. Open a browser to https://solidcommunity.net/.

 2. Click `Register`.

 3. Fill in the registration form and click `Register`.

    You'll be redirected to your public Solid Pod URL: `https://<yourusername>.solidcommunity.net/`.

### Install `npm`

If you don't already have `npm` installed, follow the appropriate instructions
at the [Get npm!](https://www.npmjs.com/get-npm) site. `npm` is installed as part of the
Node.js installation.

## Build the Application

### 1. Initialize the Application

1. Create a directory for the application:

    ```shell
    mkdir my-demo-app
    ```

1. Go into the newly created directory:

    ```shell
    cd my-demo-app
    ```

1. Create a brand new application (Omit the `--yes` to override the default values):

    ```shell
    npm init --yes
    ```

### 2. Install the Inrupt Client Libraries

Use `npm` to install Inrupt client libraries:

```shell
npm install @inrupt/solid-client @inrupt/solid-client-authn-browser @inrupt/vocab-common-rdf
```

### 3. Install Parcel

1. Use `npm` to install `Parcel`:

    ```shell
    npm install parcel-bundler
    ```

1. Edit the `package.json` file to list the browsers supported by
   this application. Specifically, add the `browserslist` field and value:

    > **TIP:** Be sure to add the comma after the preceding field before adding
     the `browserslist` field.

    ```shell
    "dependencies": {
       ...
    },
    "browserslist": [
      "last 3 and_chr versions",
      "last 3 chrome versions",
      "last 3 opera versions",
      "last 3 ios_saf versions",
      "last 3 safari versions",
      "last 3 edge versions"
    ]
    ```

    Without the `browserslist` specification, Parcel would need to
    inject a compatibility layer to avoid a `regeneratorRuntime` reference error
    since our sample application uses `async` functions.

    As an alternative to modifying the `package.json` file, you could import
    `regenerator-runtime/runtime` in your JavaScript code, which will inject a
    suitable compatibility layer.

### 4. Create the Application

In the `my-demo-app` directory, create the files for the application.

1. Create a `my-demo.css` file with the following content:

    ```css

    {% include_relative codesandbox/my-demo.css %}

    ```

1. Create an `index.html` file with the following content:

    ```html

    {% include_relative codesandbox/index.html %}

    ```

1. Create an `index.js` file with the following content:

    > **NOTE:** If your Pod is not on `https://solidcommunity.net`, modify the
      value of the `SOLID_IDENTITY_PROVIDER` variable accordingly.

    ```javascript

    {% include_relative codesandbox/index.js %}

    ```

## Run the Application

1. In the ``my-demo-app`` directory, run:

    ```shell
    npx parcel index.html
    ```

    The output should resemble the following:

    ```shell
      Server running at http://localhost:1234
      ...
      Built in 2ms.
    ```

1. Open `localhost:1234` in a browser.

1. Click the `Login` button.

    * The first time you log into your Pod with this application (it'll
      be named `http://localhost:1234`), you'll
      be prompted to authorize it to access your Pod . To allow the application to
      read and write to your Pod, click `Authorize`.

    * If you have logged out of your Pod, you are prompted to log in.
      Enter your username and password to log in.

    * Once logged in, you should be redirected back to the client application.

      Back in the application, you should see a message stating `Your session is logged in with the WebID [<your WebID>].` and the WebID textfield should display your WebID.



1. Now that you're logged in, you can read and write the information in
your Solid profile.

   1. First, click the `Read Profile` button.

      You should see the name you entered when you registered your Pod.

   1. To update your name, enter a new name in the `2. Write your name`
        textfield, and click the `Write to Profile` button. You should see the message:

        ```
        Wrote [<your new name>] as name successfully!
        ```

   1. Verify that your profile was updated by clicking on
        the `Read Profile` button again. You should see the updated name displayed!

   You can also read the public profiles of anyone else in the world with a
   Solid Pod.  Enter the WebID of the person whose profile you wish to read;
    e.g., `https://docs-example.inrupt.net/profile/card#me`.

1. Exit the Application. To exit the application, stop the `npx parcel` process; e.g.,
     `Ctrl-C`.


## Additional Information

#### API Documentation

For more information on the functions:

- [solid-client API](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/index.html)
  - [getSolidDataset()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/resource_soliddataset.html#getsoliddataset)
  - [getThing()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/thing_thing.html#getthing)
  - [saveSolidDatasetAt()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/resource_soliddataset.html#savesoliddatasetat)
  - [setStringNoLocale()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/thing_set.html#setstringnolocale)
  - [setThing()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/thing_thing.html#setthing)


- [solid-client-authn-browser API](https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/index.html)

  - [Session.login()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/classes/session.html#login)

  - [Session.handleIncomingRedirect()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/classes/session.html#handleincomingredirect)
