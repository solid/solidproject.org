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
      Using Web standards to
      let people control their data, and choose the
      applications and services to use with it.
      </p>
      <div class="buttons is-centered">
        <!--
        <a href="{{site.baseurl}}/about/">
          <button class="button is-black is-large">About Solid</button>
        </a>
        -->
        <a href="{{site.baseurl}}/users/get-a-pod" class="button is-black is-large">
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
            <h2 class="title">All of your data, under your control</h2>
            <p class="content is-large">
            Solid lets people store their data securely in decentralized data stores 
            called <b>Pods</b>. Pods are like secure personal web servers for data.
            All data in a pod is accessible via the 
            <a href="https://solid.github.io/specification/" target="_blank">Solid Protocol</a>.
            When data is stored in someone's 
            pod, they control who and what can access it.</p>
                                
            <p class="content is-large">
            Solid is led by the inventor of the Web, 
            <b><a href="{{site.baseurl}}/team">Sir Tim Berners-Lee</a></b>, 
            to help realise his vision 
            for its future.</p>
            </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-5">
            <h2 class="title">Store anything</h2>
            <p class="content is-large">
              Any kind of data can be stored in a Solid pod, including regular files that you might store in a Google Drive or Dropbox folder, but it is the ability to store <b>Linked Data</b> that makes Solid special.
            </p>
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
              Using interoperable data standards
            </h2>
            <p class="content is-large">
            Linked Data gives Solid 
            a common way to describe things and 
            how they relate to each other, in a way that other people and 
            machines can understand. This means that the data stored by Solid
            is portable and completely interoperable.
            </p>
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
              Anyone or anything that accesses data in a Solid pod uses a 
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
