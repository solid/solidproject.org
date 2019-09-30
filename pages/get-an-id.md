---
layout: default
title: Get an ID
permalink: about/get-an-id
---

# Solid Identity Providers
[![](https://img.shields.io/badge/project-Solid-7C4DFF.svg?style=flat-square)](https://github.com/solid/solid)

|               Link                |    Responsible for Domain Name and Terms of Use     |             Responsible for Hosting               | Location of Hosting | Solid Server Version |
|-----------------------------------|:---------------------------------------------------:|:-------------------------------------------------:|:-------------------:|:--------------------:|
| https://inrupt.net/               | [Inrupt, Inc.](https://inrupt.com/terms-of-service) |         [Amazon](https://aws.amazon.com)          |         USA         |          NSS 4.x          |
| https://solid.community/| ?? | ?? |         ??          |          NSS 4.x       |

# Experimental Solid Identity Servers
| Link | Responsible for Hosting | Location of Hosting | Solid Server Version |
|---------------|-------------|------------|--------------|
|https://solidtest.space|?? |          ??          |          ??       |
|https://solid.authing.cn|?? |         ??          |          ??       |
| https://solidweb.org   |        [Matthias Evering](https://github.com/ewingson)     |   Germany |   NSS 5.x   | 
		
## Adding Your Solid Identity Provider Service

The identity providers list allows public Solid-compliant services to gain some exposure, by making themselves discoverable. The configuration options allows the owner of each service to personalize how their respective card will look like, when applications consume this list. An example of such an app can be found at https://solid.github.io/solid-idps/.

Here are the configuration options:

* `url`: holds the URL of the service's signup app, to which the user will be redirected
* `icon`: the URL of the image that will be used as logo for your service
* `icon_bg`: the background color of a an element that contains the icon (e.g. a div, etc.), which typically follows the main theme color of your signup app (e.g. #000, or string - i.e. `blue`, or RGB values)
* `title`: the title of your service (e.g. RWW.IO, databox.me, etc.)
* `title_color`: the color of the tile text (e.g. #fff)
* `policyURL`: the URL of a page which lists the policies of your service (e.g. privacy, data reuse, etc.)
* `description`: a short description of the service; usually the main features it offers (e.g. WebID, storage, inbox, etc.); for best results, try to limit the length of the text to **175** characters
* `btn_bg`: the background color for the button a user will click to be sent to your server
* `btn_color`: the color of the text on the button

Once you have your configuration ready, you will need to add your configuration (JSON object) to the `idps` array in the `services.json` file, and submit a pull request for that file.

### Example configuration

Here is an example of configuration options set for `databox.me`.

```
{
 	"url": "https://databox.me/",
	"icon": "https://databox.me/logo.png",
	"icon_bg": "#333748",
	"title": "databox.me",
	"title_color": "#fff",
	"policyURL": "https://databox.me/privacy.html",
	"description": "Databox.me is the first Solid-compliant, public and free service on which you can get a WebID and data storage (limited).",
	"btn_bg": "#43C47A",
	"btn_color": "#fff"
}
```
