---
layout: base
title: Home
permalink: /
---

<section id="home-hero" class="hero is-dark is-medium">
  <div class="hero-body">
    <div class="container">
      <figure class="image">
        <img
          src="{{site.baseurl}}/assets/img/solid-emblem.svg"
          alt="Solid Logo"
        />
      </figure>
      <p class="subtitle has-text-centered is-size-4 is-size-3-tablet is-size-2-desktop">

        Solid: Your data, your choice.<br>
        Advancing Web standards to empower people.<br>
        
      </p>
      <div class="buttons is-centered">
        <a href="{{site.baseurl}}/users/get-a-pod"  class="button is-info  is-large"> 
          Get a Pod
        </a>
        <a href="{{site.baseurl}}/developers/tutorials/getting-started" class="button is-primary is-large">
          Developer Tutorial
        </a>
      </div>
    </div>
  </div>
</section>

<div id="landing-content">

  <div id="tour">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-4">
            <figure class="image">
              <img src="{{site.baseurl}}/assets/img/solid-pod-tour.svg" alt="[]" />
            </figure>
          </div>

          <div class="column is-offset-1 is-5">
            <h2 class="title">Solid</h2>
            <p class="content is-large">

              <a href="{{site.baseurl}}/about">Solid</a> is a project that envisions an ecosystem where 
              people securely store their data in Pods, and applications can 
              access data from any Pod if they have 
              been granted access.
            </p>
            <p class="content is-large">
              Underlying the ecosystem are the Solid specifications. The
              specifications determine the behavior of Solid Pods and
              applications such that people can use their data
              seamlessly across different applications and services.
            </p>

          </div>

        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-5">
            <h2 class="title">Your pod: All your data, under your control</h2>
            <p class="content is-large">
              <a href="{{site.baseurl}}/about">Solid</a> lets you store your 
              data securely in decentralized data stores 
              called <b>Pods</b>. Pods are secure personal Web servers for data.
              You control who can use your data, choosing the people and apps 
              that can access it.

              Any kind of data can be stored in a Solid Pod, including
              regular documents that you might store in a Google Drive
              or Dropbox folder.
            </p>
            <div class="buttons">
              <a href="{{site.baseurl}}/users/get-a-pod" class="button is-large is-primary">
                Get your own Pod
              </a>              
            </div>
          </div>
          <div class="column is-offset-1 is-4">
            <figure class="image">
              <img src="{{site.baseurl}}/assets/img/store-anything-tour.svg" alt="[]" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-4">
            <figure class="image">
              <img src="{{site.baseurl}}/assets/img/interoperability-tour.svg" alt="[]" />
            </figure>
          </div>
          <div class="column is-offset-1 is-5">
            <h2 class="title">
              Interoperable data standards
            </h2>
            <p class="content is-large">
              What makes Solid special is the ability to store 
              data in a way that promotes interoperability.
              That is, different
              applications can work with the same data. Solid supports
              a <strong>common/shared</strong> way of describing things
              and their relationships to one another such that
              different applications can understand.
            </p>
            <div class="buttons">
              <a href="https://solid.github.io/specification/" class="button is-link is-large">
                Read the Specifications
              </a>             
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-5">
            <h2 class="title">Share it safely</h2>
            <p class="content is-large">
              Anyone or anything that accesses data in a Solid Pod uses a 
              unique ID, authenticated by a decentralized extension of OpenID 
              Connect. Solid's access control system uses these IDs to 
              determine whether a person or application has access to a 
              resource in a pod.
            </p>
          </div>
          <div class="column is-offset-1 is-4">
            <figure class="image">
              <img src="{{site.baseurl}}/assets/img/share-it-safely-tour.svg" alt="[]" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <section id="ecosystem" class="hero is-dark is-medium">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title is-3">Solid creates interoperable ecosystems of
        applications and data</p>
        <p class="subtitle is-4">
        Data stored in Solid pods can power ecosystems of
        interoperable applications where individuals are free to use their data 
        seamlessly across different applications and services.</p>
      </div>
    </div>
  </section>
  
  <div class="columns">
    <div class="column is-half-desktop is-offset-one-quarter-desktop">
      {% include subscribe.html %}
    </div>
  </div>

</div>
