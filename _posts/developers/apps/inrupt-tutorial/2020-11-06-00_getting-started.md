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
and write to your name to your user profile.

This tutorial uses [npm](https://www.npmjs.com/get-npm) and [Parcel](https://parceljs.org/)
to run the application locally on `localhost:1234`.

![Locally Run Getting Started Application]({{site.baseurl}}/assets/img/tutorials/locally-run-application.png)

> You can also try out the application in CodeSandbox.
>
> [![Edit on CodeSandbox]({{site.baseUrl}}/assets/img/play-codesandbox.svg)](https://codesandbox.io/s/musing-bouman-n1ghd)
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
    h2,h3 {
        margin: 1rem 1.2rem 1rem 1.4rem;
    }
    
    header {
        border-bottom: #5795b9 solid;
        padding-left: .5rem;
    }
    
    .panel {
        border: 1px solid #005b81;
        border-radius: 4px;
        box-shadow: rgb(184, 196, 194) 0px 4px 10px -4px;
        box-sizing: border-box;
    
        padding: 1rem 1.5rem;
        margin: 1rem 1.2rem 1rem 1.2rem;
    }
    
    #login {
        background: white;
    }
    
    #read {
        background: #e6f4f9;
    }
    
    #labelStatus[role="alert"] {
        padding-left: 1rem;
        color: purple;
    }
    
    .display {
        margin-left: 1rem;
        color: gray;
    }
    
    dl {
      display: grid;
      grid-template-columns:  max-content auto;
    }
    ```
   
1. Create an `index.html` file with the following content:

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8" />
            <title>Getting Started: Inrupt JavaScript Client Libraries</title>
            <script defer src="./index.js"></script>
            <link rel="stylesheet" href="my-demo.css" />
        </head>
    
        <body>
            <header>
                <h2>Getting Started</h2>
                <h3>with Inrupt JavaScript Client Libraries</h3>
            </header>
            <section id="login" class="panel">
                <div class="row">
                    <label id="labelLogin" for="btnLogin">1. Click the button to log into
                        <span id="solid_identity_provider">...provided by the JavaScript code...</span>:
                    </label>
                    <button name="btnLogin" id="btnLogin">Login</button>
                    <p id="labelStatus"></p>
                </div>
            </section>
    
            <div id="read" class="panel">
                <div class="row">
                    <label id="writelabel" for="name">2. Write your name: </label>
                    <input
                            type="text"
                            id="input_name"
                            name="name"
                            size="50"
                            placeholder="Your name here"
                    />
                    <button name="btnWrite" id="btnWrite">Write to Profile</button>
                </div>
    
                <dl class="display">
                    <dt>Writing status:&nbsp</dt>
                    <strong><span id="labelWriteStatus">...not written yet...</span></strong>
                </dl>
            </div>
    
            <div id="read" class="panel">
                <div class="row">
                    <label id="readlabel" for="webID"
                    >3. Read back name (anyone's!) from their WebID:
                    </label>
                    <input
                            type="url"
                            id="webID"
                            name="webID"
                            size="50"
                            placeholder="...not logged in yet - but enter any WebID to read from its profile..."
                    />
                    <button name="btnRead" id="btnRead">Read Profile</button>
                </div>
                <dl class="display">
                    <dt>Formatted Name (FN) read from Pod:&nbsp</dt>
                    <strong><span id="labelFN">...not read yet...</span></strong>
                </dl>
            </div>
        </body>
    </html>
    ```

1. Create an `index.js` file with the following content:   

    > **NOTE:** If your Pod is not on `https://solidcommunity.net`, modify the
      value of the `SOLID_IDENTITY_PROVIDER` variable accordingly.
  
    ```javascript
    import {
      getSolidDataset,
      getThing,
      setThing,
      getStringNoLocale,
      setStringNoLocale,
      saveSolidDatasetAt
    } from "@inrupt/solid-client";
    
    import { Session } from "@inrupt/solid-client-authn-browser";
    
    import { VCARD } from "@inrupt/vocab-common-rdf";
    
    // If your Pod is *not* on `solidcommunity.net`, change this to your Solid identity provider.
    const SOLID_IDENTITY_PROVIDER = "https://solidcommunity.net";
    document.getElementById("solid_identity_provider").innerHTML = `[<a target="_blank" href="${SOLID_IDENTITY_PROVIDER}">${SOLID_IDENTITY_PROVIDER}</a>]`;
  
    const NOT_ENTERED_WEBID = "...not logged in yet - but enter any WebID to read from its profile...";
    
    const session = new Session();
    
    const buttonLogin = document.getElementById("btnLogin");
    const buttonWrite = document.getElementById("btnWrite");
    const buttonRead = document.getElementById("btnRead");
  
    // Click button if the user hits the 'Enter' key when entering name.
    document.getElementById("input_name").addEventListener("keyup", event => {
      if(event.key === "Enter") {
        buttonWrite.click();
        event.preventDefault();
      }
    });
    
    // Click button if the user hits the 'Enter' key when entering WebID.
    document.getElementById("webID").addEventListener("keyup", event => {
      if(event.key === "Enter") {
        buttonRead.click();
        event.preventDefault();
      }
    });
    
    
    // 1a. Start Login Process. Call session.login() function.
    async function login() {
      if (
        !session.info.isLoggedIn &&
        !new URL(window.location.href).searchParams.get("code")
      ) {
        await session.login({
          oidcIssuer: SOLID_IDENTITY_PROVIDER,
          clientName: "Inrupt tutorial client app",
          redirectUrl: window.location.href
        });
      }
    }
    
    // 1b. Login Redirect. Call session.handleIncomingRedirect() function.
    // When redirected after login, finish the process by retrieving session information.
    async function handleRedirectAfterLogin() {
      await session.handleIncomingRedirect(window.location.href);
      if (session.info.isLoggedIn) {
        // Update the page with the status.
        document.getElementById(
          "labelStatus"
        ).innerHTML = `Your session is logged in with the WebID [<a target="_blank" href="${session.info.webId}">${session.info.webId}</a>].`;
        document.getElementById("labelStatus").setAttribute("role", "alert");
        document.getElementById("webID").value = session.info.webId;
      }
    }
    
    // The example has the login redirect back to the index.html.
    // This calls the function to process login information.
    // If the function is called when not part of the login redirect, the function is a no-op.
    handleRedirectAfterLogin();
    
    // 2. Write to profile
    async function writeProfile() {
      const name = document.getElementById("input_name").value;
    
      if (!session.info.isLoggedIn) {
        // You must be authenticated to write.
        document.getElementById("labelWriteStatus").innerHTML = `...you can't write [${name}] until you first login!`;
        document.getElementById("labelWriteStatus").style.color = `red`;
        return;
      }
      const webID = session.info.webId;
    
      // To write to a profile, you must be authenticated. That is the role of the fetch
      // parameter in the following call.
      let myProfileDataset = await getSolidDataset(webID, {
        fetch: session.fetch
      });
    
      let profile = getThing(myProfileDataset, webID);
    
      // Using the name provided in text field, update the name in your profile.
      // VCARD.fn object is a convenience object that includes the identifier string "http://www.w3.org/2006/vcard/ns#fn".
      // As an alternative, you can pass in the "http://www.w3.org/2006/vcard/ns#fn" string instead of VCARD.fn.
      profile = setStringNoLocale(profile, VCARD.fn, name);
    
      // Write back the profile to the dataset.
      myProfileDataset = setThing(myProfileDataset, profile);
    
      // Write back the dataset to your Pod.
      await saveSolidDatasetAt(webID, myProfileDataset, {
        fetch: session.fetch
      });
    
      // Update the page with the retrieved values.
      document.getElementById("labelWriteStatus").innerHTML = `Wrote [${name}] as name successfully!`;
      document.getElementById("labelWriteStatus").style.color = `black`;
      document.getElementById("labelFN").style.color = `red`;
      document.getElementById("labelFN").innerHTML = `...click the 'Read Profile' button to to see what the name might be now...?!`;
    }
    
    // 3. Read profile
    async function readProfile() {
      const webID = document.getElementById("webID").value;
    
      if (webID === NOT_ENTERED_WEBID) {
        document.getElementById("labelFN").innerHTML = `Login first, or enter a WebID (any WebID!) to read from its profile`;
        document.getElementById("labelFN").style.color = `red`;
        return false;
      }
    
      try {
        new URL(webID);
      } catch (_) {
        document.getElementById("labelFN").innerHTML = `Provided WebID [${webID}] is not a valid URL - please try again`;
        document.getElementById("labelFN").style.color = `red`;
        return false;
      }
    
      // Profile is public data; i.e., you do not need to be logged in to read the data.
      // For illustrative purposes, shows both an authenticated and non-authenticated reads.
    
      let myDataset;
      try {
        if (session.isLoggedIn) {
          myDataset = await getSolidDataset(webID, {fetch: session.fetch});
        } else {
          myDataset = await getSolidDataset(webID);
        }
      } catch (error) {
        document.getElementById("labelFN").innerHTML = `Entered value [${webID}] does not appear to be a WebID. Error: [${error}]`;
        document.getElementById("labelFN").style.color = `red`;
        return false;
      }
    
      const profile = getThing(myDataset, webID);
    
      // Get the formatted name (fn) using the property identifier "http://www.w3.org/2006/vcard/ns#fn".
      // VCARD.fn object is a convenience object that includes the identifier string "http://www.w3.org/2006/vcard/ns#fn".
      // As an alternative, you can pass in the "http://www.w3.org/2006/vcard/ns#fn" string instead of VCARD.fn.
    
      const formattedName = getStringNoLocale(profile, VCARD.fn);
    
      // Update the page with the retrieved values.
      document.getElementById("labelFN").style.color = `black`;
      document.getElementById("labelFN").innerHTML = `[${formattedName}]`;
    }
    
    buttonLogin.onclick = function () {
      login();
    };
    
    buttonWrite.onclick = function () {
      writeProfile();
    };
    
    buttonRead.onclick = function () {
      readProfile();
    };
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

- [solid-client API](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/README.html)
  - [getSolidDataset()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/_resource_soliddataset_.html#getsoliddataset)
  - [getThing()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/_thing_thing_.html#getthing)
  - [saveSolidDatasetAt()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/_resource_soliddataset_.html#savesoliddatasetat)
  - [setStringNoLocale()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/_thing_set_.html#setstringnolocale)
  - [setThing()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/modules/_thing_thing_.html#setthing)


- [solid-client-authn-browser API](https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/README.html)

  - [Session.login()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/classes/_session_.session.html#login)

  - [Session.handleIncomingRedirect()](https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/classes/_session_.session.html#handleincomingredirect)
