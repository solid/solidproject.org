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
              <img src="{{site.baseurl}}/assets/img/single-sign-on.svg" alt="[]" />
            </figure>
          </div>
          <div class="column is-offset-1 is-5">
            <h2 class="title">The last login you'll ever need</h2>
            <p class="content is-large">
              Solid provides for the first time a <b>single global logon system</b>, so that when you log into any web site, instead of having  to log in with the usual 'f' and 'g' blue buttons, and then be tracked by Facebook and Google, you can log in with any Solid provider you trust, and that won't track you.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-offset-1 is-5">
            <h2 class="title">Like peas in a Pod</h2>
            <p class="content is-large">
              Solid provides separate places ("<a href="{{site.baseUrl}}/faqs#pod" title="Frequently Asked Questions - what is a Pod?">pods</a>") for you to store your data, a bit like Dropbox and GDrive and iCloud, but you have the <b>power to share</b> any file or folder or contact or event or whatever <b>with anyone who has a solid id</b>.  You store your data in any place you trust (including your own computer).
            </p>
          </div>
          <div class="column is-hidden-touch is-offset-1 is-4">
            <figure class="image">
              <img src="{{site.baseurl}}/assets/img/like-peas-in-a-pod.svg" alt="[]" />
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
              Apps that give you the freedom to move
            </h2>
            <p class="content is-large">
              When Solid apps start, they just store all the data they need to work in your pod.  They don't store the data themselves at some computer run by the person who owns the app.  So by default <strong>you control all the data</strong> in your Solid world.  This is a massive improvement to your privacy.
            </p>
            <p class="content is-large">
              Solid app builders don't just store the data in your pod any old way.  They use Solid standard formats.  This means that you and the people you work with can actually use many different apps – at the same time even – to do stuff.
              Websites, you can browse them on any device
              and with a browser you choose.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="columns">
    <div class="column is-half-desktop is-offset-one-quarter-desktop">
      {% include subscribe.html %}
    </div>
  </div>

</div>
