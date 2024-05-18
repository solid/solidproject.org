---
layout: page
title: Get a Pod
permalink: /users/get-a-pod
redirect_from:
  - /use-solid/
  - /users
---

# Get a Pod

Pods are where you store your data. Any kind of data can be stored in a Solid Pod. Once stored in a Pod, you control who can access your data.

<img class="illustration" src="{{site.baseurl}}/assets/img/single-sign-on.svg" alt="image of data stored in safe" />

You can get a Pod from a Pod Provider, or you may choose to self-host your Pod.

## Get a Pod from a Pod Provider

When choosing a Pod Provider, some questions you may want to consider are:

- **Who is involved?** The legal identity of the provider will be an important factor in how your data is handled. For example, some providers may engage with third parties to host the data. Mapping out clearly who is involved in what element of the provision is an important step in picking your Pod Provider.

- **Where are all the involved parties located, and where is the data physically stored?** The geographical location of the legal entities involved and the physical location of the hosting is an important factor in determining which law govern the provider responsibilities. Depending on your nationality and degree of trust in various laws, you may prefer specific geographical locations.

- **What are the terms?** Reading the Provider's Terms is a good way to understand the implications of picking that provider.

<div class="message is-info">
  <p class="message-body">
     With Solid, <strong>you won't be tied to the provider you choose now</strong>. That is, you have the ability to <strong>move your data elsewhere</strong> if you want.
  </p>
</div>

The following table lists some Pod Provider:

| Provider                                           | Responsible for Domain Name and Terms                                      | Responsible for Hosting                       | Hosting Location | Solid Implementation                                        |
|----------------------------------------------------|----------------------------------------------------------------------------|-----------------------------------------------|------------------|-------------------------------------------------------------|
| [Inrupt Pod Spaces](https://start.inrupt.com/) | [Inrupt, Inc.](https://www.inrupt.com/terms-conditions)                        | [Amazon](https://aws.amazon.com)              | Germany              | [ESS](https://inrupt.com/products/enterprise-solid-server/) |
| [inrupt.net](https://inrupt.net/) | [Inrupt, Inc.](https://www.inrupt.com)                                                      | [Amazon](https://aws.amazon.com)              | USA              | [NSS](https://github.com/solid/node-solid-server)           |
| [solidcommunity.net](https://solidcommunity.net/)  | [Solid Project](https://github.com/solid/solidcommunity.net_operations)    | [Digital Ocean](https://www.digitalocean.com) | UK               | [NSS](https://github.com/solid/node-solid-server)           |
| [solidweb.org](https://solidweb.org)               | [Solid Grassroots](https://gitlab.com/groups/solidweb.org/-/group_members) | [Hosteurope](https://www.hosteurope.de)       | France          | [NSS](https://github.com/solid/node-solid-server)           |
| [dev.inrupt.net](https://dev.inrupt.net/)          | [Inrupt, Inc.](https://www.inrupt.com)                                     | [Amazon](https://aws.amazon.com)              | USA              | [NSS](https://github.com/solid/node-solid-server)           |
| [trinpod.us](https://trinpod.us)                   | [Graphmetrix, Inc.](https://graphmetrix.com/terms)                         | [Hetzner](https://www.hetzner.com)            | USA              | [TrinPod](https://graphmetrix.com/trinpod-server)     |
| [trinpod.eu](https://trinpod.eu)                   | [Graphmetrix, Inc.](https://graphmetrix.com/terms)                         | [Hetzner](https://www.hetzner.com/)           | Finland              | [TrinPod](https://graphmetrix.com/trinpod-server)     |
| [use.id](https://get.use.id/)                      | [Digita](https://www.digita.ai/)                                           | [DigitalOcean](https://digitalocean.com/)     | EU              | [CSS](https://github.com/CommunitySolidServer/CommunitySolidServer)     |
| [solidweb.me](https://solidweb.me/)                | [Meisdata](https://github.com/serverproject-dev)                           | [Hosteurope](https://www.hosteurope.de)       | France              | [CSS](https://github.com/CommunitySolidServer/CommunitySolidServer)        |
| [Data Pod](https://datapod.igrant.io/)             | [iGrant.io, Sweden](https://igrant.io/)                                    | [RedPill Linpro](https://www.redpill-linpro.com/en), [AWS](https://aws.amazon.com/), [GCP](https://cloud.google.com/) or [Azure](https://azure.microsoft.com/en-in)        | EU              | [NSS](https://github.com/solid/node-solid-server)     |
| [redpencil.io](https://solid.redpencil.io/)                 | [redpencil.io](https://redpencil.io/)                             | [Hetzner](https://www.hetzner.com/)           | Finland              | [CSS](https://github.com/CommunitySolidServer/CommunitySolidServer)        |
| [teamid.live](https://teamid.live/)                | [Meisdata](https://github.com/serverproject-dev)                           | [Hosteurope](https://www.hosteurope.de)       | France              | [CSS](https://github.com/CommunitySolidServer/CommunitySolidServer)        |
| [Open University UK](https://solid.open.ac.uk/  )  | [Open University UK](https://solid.open.ac.uk/local/pages/termsofuse.html) | [Jisc Services](https://www.jisc.ac.uk/)      | UK              | [NSS](https://github.com/solid/node-solid-server)           |

If you are a provider who wants to add your service to this list, please create a pull request to update [this file](https://github.com/solid/solidproject.org/blob/main/pages/use-solid.md).

## Self-host Your Pod

Self-hosting your own Pod (i.e., running your own [Pod Server](/for-developers/pod-server)) provides the most control of your data. This way, you don't have to entrust any third party with your data.

Self-hosting requires some technical overhead and may not be suitable for everyone yet. In the future, we would like to make self-hosting a more user-friendly option. The great thing about Solid is the flexibility it offers: you can choose to get a Pod from a provider now, and **move to self-hosting later**.

# Next Steps

When you get a Pod, you are also issued a unique WebID. Your WebID acts as your identity in the Solid ecosystem. For example, to share a picture in your Pod with someone, you would indicate the person by that person's WebID.

Once you have your Pod and WebID, you can check out some [applications developed by the community](/apps) to start storing data in your Pod.
You can even [develop your first application](/developers/tutorials/getting-started).
