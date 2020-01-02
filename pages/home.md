---
layout: base
title: Home
permalink: /
---

<section id="home-hero" class="hero is-dark is-large">
  <div class="hero-body">
    <div class="container">
      <h1 class="title has-text-centered is-size-3 is-size-2-tablet is-size-1-desktop">
        Switch between storage and apps
        <br/>
        while taking the data along 
      </h1>
    </div>
  </div>
</section>

<div id="landing-content">
  {%
    include why-carousel.html
      icon1="dolly"
      heading1="Move freely between services"
      content1="Switch to the best tools and take your data with you."
      icon2="recycle"
      heading2="Reuse data across apps"
      content2="Stop re-entering the same data again and again by recycling data from app to app."
      icon3="users"
      heading3="Connect with anyone"
      content3="Connect to your friends no matter what app they are using."
      icon4="crosshairs"
      heading4="Select what you share precisely"
      content4="Give access to the bare minimum of data needed for the service to work."
  %}

  {%
    include choose-your-own-adventure.html
      heading="Find out why you'll love Solid"
      link1="/for-developers"
      adventure1="As a developer"
      link2="/for-enterprises"
      adventure2="As an enterprise"
  %}

  <div id="tour">
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-hidden-touch is-offset-1 is-4">
            <figure class="image">
              <img src="{{site.baseurl}}/assets/img/like-peas-in-a-pod.svg" alt="[]" />
            </figure>
          </div>
          <div class="column is-offset-1 is-5">
            <h2 class="title">Like peas in a Pod</h2>
            <p class="content is-large">
              Your <a href="{{site.baseUrl}}/faqs#pod" title="Frequently Asked Questions - what is a Pod?">Pod</a> is where you store your data. Pods and apps are separate but compatible so you are free to change apps while keeping your data. For example, if you want to switch messaging app you can take your contacts and chat history along easily, as long as both apps support Solid.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-5">
            <h2 class="title">The last login you'll ever need</h2>
            <p class="content is-large">
              Your <a href="{{site.baseUrl}}/faqs#webid" title="Frequently Asked Questions - what is a WebID?">WebID</a> changes the power dynamic. You call the shots: instead of creating an account for each app, have each app find your account. On top of that, your WebID makes it possible for people to connect to you, no matter what Solid apps they are using.
            </p>
          </div>
          <div class="column is-hidden-touch is-offset-1 is-4">
            <figure class="image">
              <img src="{{site.baseurl}}/assets/img/single-sign-on.svg" alt="[]" />
            </figure>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-hidden-touch is-offset-1 is-4">
            <figure class="image is-square">
              <img src="{{site.baseurl}}/assets/img/solid-is-a-standard.svg" alt="[]" />
            </figure>
          </div>
          <div class="column is-offset-1 is-5">
            <h2 class="title">
              Open specifications built on open standards
            </h2>
            <p class="content is-large">
              Websites, you can browse them on any device
              and with a browser you choose.
              Solid gives you that same choice, but for <em>data</em>:
              you can pick the apps you trust
              to handle your personal data.
              To realize such unprecedented interoperability,
              Solid uses the same recipe as the Web:
              following <a href="https://solid.github.io/specification/">open standards and specifications</a>.
              Anyone is welcome to <a href="{{site.baseUrl}}/standardisation">join the standardisation process</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="columns">
    <div class="column is-half-desktop is-offset-one-quarter-desktop">
      {% include newsletter.html %}
    </div>
  </div>

</div>
