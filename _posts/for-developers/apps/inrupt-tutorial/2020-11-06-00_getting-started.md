---
layout: for-developers
title: Create your first app using Inrupt libraries
permalink: /for-developers/apps/create-first-app-inrupt
tags: [apps]
categories: [Writing a Solid application]
exclude: true
---

# Getting Started Tutorial

This tutorial creates an introductory application that uses Inrupt's
JavaScript client libraries to read your user profile data.

Alternatively, to create a sample application using Inrupt's Solid React SDK,
refer to Inrupt's [Solid React SDK documentation](https://docs.inrupt.com/developer-tools/javascript/react-sdk/).

The tutorial uses [npm](https://www.npmjs.com/get-npm) and [Parcel](https://parceljs.org/)
to run the application locally on `localhost:1234`.

![Locally Run Getting Started Application]({{site.baseurl}}/assets/img/tutorials/locally-run-application.png)

## Prerequisites

#### Register Your Pod and Create Your Profile

**NOTE:** This tutorial assumes the creation of a testing Pod on
   `https://solidcommunity.net/`. If your Pod is not on 
   `https://solidcommunity.net/` (e.g. perhaps you created your Pod on 
   `https://pod.inrupt.com`), you'll just need to change the `oidcIssuer`
    value in the application's `index.js` file accordingly.
   
If you don't already have a Pod:

 - Open a browser to `https://solidcommunity.net/`.

 - Click `Register`.

 - Fill in the registration form and click `Register`.

   You'll be redirected to your public Solid Pod URL:
   `https://<yourusername>.solidcommunity.net/`.

 - Click `Log in` on the upper right corner (a dialog box should popup labelled
 `Log in to solidcommunity.net`)

 - From the list of identity providers, click on the blue button labelled
 `solidcommunity.net` (**_NOTE:_** do *not* click the blue button labelled 'Solid Community'!).

 - Enter your `Username` and `Password`, and click `Log in`.
 
 - Click on the hyperlink in the text saying: `You are logged in as https://<yourusername>.solidcommunity.net/profile/card#me.`

 - Click on the small person icon in the upper-right corner of the
 screen, and select `Edit your profile` from the drop-down menu that appears.

   **NOTE:** You may need to reload the page if you don't see that person icon.

 - Edit your profile.
 
   **NOTE:** Remember that all your profile information is `public`.

   For this tutorial:

   1. Enter any name you like in the `Name` field.

   2. Enter a role in the `Role` field.

   Your data will be saved automatically (i.e. there is no 'Save' button).

 - Log out. Move your mouse to the person icon in the upper-right
   corner to display additional menu items, and click `Log out`.

### Install `npm`

If you don't already have `npm` installed, follow the appropriate instructions
here: [install npm](https://www.npmjs.com/get-npm). `npm` is installed as part of the
Node.js installation.

## Build the Application

1. Initialize the application
    
    * Create a directory for the project:
    
    ```shell
      mkdir my-demo-app
    ```
    
    * Go into the newly created directory:
    
    ```shell
      cd my-demo-app
    ```
    
    * Create an empty application:
    
        ```shell
          npm init
        ```
   
        * During initialization, you can either hit return to accept the
          default values (including empty values) or supply your own values.
    
        * When prompted ``Is this OK? (yes)``, enter to accept ``yes``.

2. Install Inrupt client libraries:

    ```shell
    npm install @inrupt/solid-client @inrupt/solid-client-authn-browser @inrupt/vocab-common-rdf
    ```

3. Install Parcel:

    * Use `npm` to install `Parcel`:
    
        ```shell
        npm install parcel-bundler
        ```

4. Edit the `package.json` file to list the browsers supported by
   this application. Specifically, add the `browserslist` field and
   value:

   **NOTE:** Be sure to add the comma after the preceding field before adding
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

   **NOTE:** Without the `browserslist` specification, Parcel would need to
   inject a compatibility layer to avoid a `regeneratorRuntime`
   reference error since the sample application uses `async`
   functions. As an alternative to modifying the `package.json` file,
   you could import `regenerator-runtime/runtime` in your JavaScript
   code to inject a compatibility layer.

5. Create the Application:

    In the `my-demo-app` directory, create the files for the application.
    The tutorial provides an explanation of the JavaScript code at the :ref:`end of the
    tutorial <getting-started-code-details>`.

    * Create the `my-demo.css` file with the following content:

        ```css
        h2,h3 {
            margin: 1rem 1.2rem 1rem 1.4rem;
        }
        
        body * {
           margin-left: .5rem;
           margin-right: 1rem;
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
        
        dt {
          grid-column-start: 1;
        }
        
        dd {
          grid-column-start: 2;
        }
        ```
   
    * Create an `index.html` file with the following content:

        ```html
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Getting Started: Inrupt JavaScript Client Libraries</title>
            <script defer src="./index.js" ></script>
            <link rel="stylesheet" href="my-demo.css" />
          </head>
          <body>
            
            <header>
                <h2>Getting Started</h2>
                <h3>using the Inrupt JavaScript Client Libraries</h3>
            </header>
            <section id="login" class="panel">
                <div class="row">
                  <label id="labelLogin" for="btnLogin">1. Click the button to log in to [<span id="identity_provider">...provided by the JavaScript code...</span>]: </label>
                  <button name="btnLogin" id="btnLogin">Login</button> 
                  <p id="labelStatus"></p>
                </div>
            </section>
        
            <div id="read" class="panel" >
              <div class="row">
                <label id="readlabel" for="webID">2. Enter a WebID: </label>
                <input type="url" id="webID" name="webID"  size="50" pattern="https://.*" value="https://docs-example.inrupt.net/profile/card#me">
                <button name="btnRead" id="btnRead" >Read Profile</button>
              </div>
              <dl class="display"> 
                  <dt>Formatted Name (FN): </dt>
                  <dd id="labelFN"></dd>
                  <dt>Role: </dt>
                  <dd id="labelRole"></dd>
              </dl>
            </div>
          </body>
        </html>
        ```

    * Create an `index.js` file with the following content:

        ```javascript
        import {
          getSolidDataset,
          getThing,
          getStringNoLocale
        } from "@inrupt/solid-client";
        
        import { Session } from "@inrupt/solid-client-authn-browser";
        
        import { VCARD } from "@inrupt/vocab-common-rdf";
        
        
        const session = new Session();
      
        const IDENTITY_PROVIDER = "https://solidcommunity.net";
      
        document.getElementById("identity_provider").innerHTML = `[<a target="_blank" href="${IDENTITY_PROVIDER}">${IDENTITY_PROVIDER}</a>]`;
        
        const buttonLogin = document.querySelector("#btnLogin");
        const buttonRead = document.querySelector("#btnRead");
        
        // 1a. Start Login Process. Call session.login() function.
        async function login() {
          if ( !session.info.isLoggedIn && !new URL(window.location.href).searchParams.get("code")) {
            await session.login({
              oidcIssuer: IDENTITY_PROVIDER,
              redirectUrl: "http://localhost:1234",
            });
          }
        }
        
        // 1b. Login Redirect. Call session.handleIncomingRedirect() function.
        // When redirected after login, finish the process by retrieving session information.
        async function handleRedirectAfterLogin() {
          // If redirected, has code
          if (new URL(window.location.href).searchParams.get("code")) {
            await session.handleIncomingRedirect(window.location.href);
        
            // Update the page with the status.
            document.getElementById("labelStatus").textContent = "Your session is logged in.";
            document.getElementById("labelStatus").setAttribute("role", "alert");
          }
        }
        
        // The example has the login redirect back to the index.html.
        // This calls the function to process login information.
        // If the function is called when not part of the login redirect, the function is a no-op.
        handleRedirectAfterLogin();
        
        // 2. Read profile
        async function readProfile() {
          const webID = document.getElementById("webID").value;
        
          // Profile is public data; i.e., you do not need to be logged in to read the data.
          // For illustrative purposes, shows both an authenticated and non-authenticated reads.
        
          let myDataset;
          if (session.isLoggedIn){
            myDataset = await getSolidDataset(webID, { fetch: session.fetch });
          } else {
            myDataset = await getSolidDataset(webID);
          }
        
          const profile = getThing(myDataset, webID);
        
          // Get the formatted name (fn) using the property identifier "http://www.w3.org/2006/vcard/ns#fn".
          // VCARD.fn object is a convenience object that includes the identifier string "http://www.w3.org/2006/vcard/ns#fn".
          // As an alternative, you can pass in the "http://www.w3.org/2006/vcard/ns#fn" string instead of VCARD.fn.
         
          const fn = getStringNoLocale(profile, VCARD.fn);
        
          // VCARD.role obect is a convenience object that includes the identifier string "http://www.w3.org/2006/vcard/ns#role"
          // As an alternative, you can pass in the "http://www.w3.org/2006/vcard/ns#role" string instead of VCARD.role.
        
          const role = getStringNoLocale(profile, VCARD.role);
        
          // Update the page with the retrieved values.
          document.getElementById("labelFN").textContent = fn;
          document.getElementById("labelRole").textContent = role;
        }
        
        buttonLogin.onclick = function() {  
          login();
        };
        
        buttonRead.onclick = function() {  
          readProfile();
        };
        ```
      
   **NOTE:** If your Pod is not on `https://solidcommunity.net`, modify the
      `oidcIssuer` value accordingly.

6. Run the Application:

    * In the ``my-demo-app`` directory, run:

        ```shell
        npx parcel index.html
        ```

       The output resembles the following:

        ```shell
          Server running at http://localhost:1234
          ...
          Built in 2ms.
        ```

        If there are warnings with regards to the various source maps, you
        can ignore them.

7. Open `localhost:1234` in a browser.

8. Login.

    * Click `Login` to login.

    * If you have logged out of your Pod, you are prompted to log in.
      Enter your username and password and log in.

    * You will be prompted to authorize `http://localhost:1234` to
      access your Pod. To allow the application to read and write to your
      Pod, click `Authorize`.

    * You are redirected back to our client application page.

        **NOTE:** If you encounter redirect issues trying to log in, you may need to
          clear your browser's cache.
          
    * You should see a message telling you: "Your session is logged in."

9. Read your `public` profile data.

   **NOTE:** Because the profile data is public, you do not need to log in to
      read the data. The application does so to show how to make
      authenticated read requests.

   * Enter your WebID (e.g., `https://<username>.solidcommunity.net/profile/card#me`).

   * Click `Read Profile`.

   * The page should display your formatted name and role.

   You can also read the public profiles of anyone else with a Solid Pod by
   simply entering their WebID; e.g., `https://docs-example.inrupt.net/profile/card#me`.

10. Exit the Application

    * To exit the application, simply stop the `npx parcel` process; e.g.,
     `Ctrl-C`.


## Additional Information

#### API Documentation

- [solid-client API](https://docs.inrupt.com/developer-tools/api/javascript/solid-client/README.html)

- [solid-client-authn-browser API](https://docs.inrupt.com/developer-tools/api/javascript/solid-client-authn-browser/README.html)


#### React SDK Availability

To create a sample application using Inrupt's Solid React SDK, refer to the
[Solid React SDK documentation](https://docs.inrupt.com/developer-tools/javascript/react-sdk/)
