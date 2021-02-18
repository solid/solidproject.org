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
            
            <p class="content is-large">

              <b>Solid</b> is a 
              <a href="{{site.baseurl}}/TR/protocol">specification</a> 
              that lets people store their data securely in decentralized data stores 
              called <b>Pods</b>. Pods are like secure personal web servers for 
              data. When data is stored in someone's pod, they control which 
              people and applications can access it.
            </p>
            
            <div class="buttons">              
              <a href="{{site.baseurl}}/about" class="button is-link is-large">
                Learn more
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
            <h2 class="title">Your Pod: All your data, under your control</h2>
            <p class="content is-large">
              
              Any kind of data can be stored in a Solid Pod, from structured
              data to regular files that you might store in a Google Drive
              or Dropbox folder. People can
              grant or revoke access to any slice of their
              data as needed.
              
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
              Fully interoperable standards
            </h2>
            <p class="content is-large">
              All data in a Solid Pod is stored and accessed using standard, 
              open, and <b>interoperable data formats and protocols</b>. 
              Solid uses a common, shared way of describing things
              and their relationships to one another that
              different applications can understand. This gives
              Solid the unique ability to allow different applications to
              work with the same data.              
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
              resource in a Pod.
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
