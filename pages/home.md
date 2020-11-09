---
layout: base
title: Home
permalink: /
---

<section id="home-hero" class="hero is-dark is-large">
  <div class="hero-body">
    <div class="container">
      <h1 class="title has-text-centered is-size-3 is-size-2-tablet is-size-1-desktop">
        Solid
      </h1>
      <p class="subtitle has-text-centered is-size-4 is-size-3-tablet is-size-2-desktop">
      Using Web standards to
      let people control their data, and choose the
      applications and services to use with it.
      </p>
      <div class="buttons is-centered">
        <!--
        <a href="{{site.baseurl}}/about/">
          <button class="button is-primary">About Solid</button>
        </a>
        -->
        <a href="{{site.baseurl}}/users/">
          <button class="button is-primary">Get a Pod</button>        
        </a>
        <a href="{{site.baseurl}}/developers/tutorials/getting-started">
          <button class="button is-primary">Developer Tutorial</button>
        </a>
      </div>
    </div>
  </div>
</section>

<div id="landing-content">

  <section id="overview" class="section">

    <div class="container">

        <p class="subtitle has-text-centered is-3">
          Solid lets people store their data in decentralized data stores 
          called <b>Pods</b>.
        </p> 

        <div class="columns">
          <div class="column is-half-desktop is-offset-one-quarter-desktop">
          
            <p class="content has-text-centered is-large">
              Pods are like secure personal web servers for data.
              All data in a pod is
              accesible via the 
              <a href="https://solid.github.io/specification/">Solid Protocol</a>.
              When data is stored in someone's 
              pod, they control who and what can access it.
            </p>
            
            <p class="content has-text-centered is-large">
            Solid is led by the inventor of the Web, 
            <b><a href="{{site.baseurl}}/team/">Sir Tim Berners-Lee</a></b>, 
            to help realise his vision 
            for its future.</p>
            
          </div>
        </div>
        
    </div>
  </section>
  
  <section id="landing-cards">

    <div class="container">
    
      <div class="columns">
  
        <div class="column">

          <div class="card">
            <div class="card-body has-text-centered section">
              <figure class="image is-64x64">
                <img
                  src="{{site.baseurl}}/assets/img/fontawesome-free-5.11.2-web/svgs/solid/download.svg"
                  alt="[]"
                />
              </figure>
              <p class="title is-size-4 is-uppercase">
                <strong>Store anything</strong>
              </p>
              <hr/>
              <p class="content is-size-5">
                Any kind of data can be stored in a Solid pod, including regular files that you might store in a Google Drive or Dropbox folder, but it is the ability to store Linked Data that makes Solid special.
              </p>
            </div>
          </div>
          
        </div>
        <div class="column">    
        
          <div class="card">
            <div class="card-body has-text-centered section">
              <figure class="image is-64x64">
                <img
                  src="{{site.baseurl}}/assets/img/fontawesome-free-5.11.2-web/svgs/solid/share-alt-square.svg"
                  alt="[]"
                />
              </figure>
              <p class="title is-size-4 is-uppercase">
                <strong>Use Interoperable Data Standards</strong>
              </p>
              <hr/>
              <p class="content is-size-5">
                Linked Data gives Solid 
                a common way to describe things and 
                how they relate to each other, in a way that other people and 
                machines can understand. This means the data stored by Solid
                is portable and completely interoperable.
              </p>
            </div>
          </div>
        
        </div>
        <div class="column">    
        
          <div class="card">
            <div class="card-body has-text-centered section">
              <figure class="image is-64x64">
                <img
                  src="{{site.baseurl}}/assets/img/fontawesome-free-5.11.2-web/svgs/solid/share-square.svg"
                  alt="[]"
                />
              </figure>
              <p class="title is-size-4 is-uppercase">
                <strong>Share it Safely</strong>
              </p>
              <hr/>
              <p class="content is-size-5">
                Anyone or anything that accesses data in a Solid pod uses a 
                unique ID, authenticated by a decentralized OpenID Connect 
                protocol. Solid's access control system uses these IDs to 
                determine whether a person or application has access to a 
                resource in a pod.
              </p>
            </div>
          </div>
        
        </div>
      
      </div>
    
    </div>  
      
  </section>
  
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
