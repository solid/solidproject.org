---
layout: base
title: Home
permalink: /
---

<section id="home-hero" class="hero is-dark is-large">
  <div class="hero-body">
    <div class="container">
      <h1 class="title has-text-centered is-size-3 is-size-2-tablet is-size-1-desktop">
        The Web — <a href="{{site.baseUrl}}/take3" title="Why Take 3?">Take 3</a>
      </h1>
      <p class="subtitle has-text-centered is-size-4 is-size-3-tablet is-size-2-desktop">
        Solid is a technology, like the Web, but a new level of standard which adds to the existing protocols to make it more powerful, particularly to empower individuals at home and at work.
      </p>
    </div>
  </div>
</section>

<div id="landing-content">
  {%
    include choose-your-own-adventure.html
      heading="Solid is great for…"
      link1="/use-solid"
      adventure1="Everyone"
      link2="/for-developers"
      adventure2="Developers"
      link3="/for-enterprises"
      adventure3="Enterprises"
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
              Solid provides for the first time a <b>single global logon system</b>, so that when you log into any web site, instead of having  to log in with the usual 'f' and 'g', etc, blue buttons, and then be tracked by Facebook, Google, or some other large social network, instead you can log in with any Solid provider you trust, and that won't track you.
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
              Solid provides separate places ("<a href="{{site.baseUrl}}/faqs#pod" title="Frequently Asked Questions - what is a Pod?">pods</a>") for you to store your data, a bit like Dropbox and Google Drive and iCloud, but you have the <strong>power to share</strong> any file or folder or contact or event or whatever <strong>with anyone who has a Solid ID</strong>.  You store your data in any place you trust (including your own computer).
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
              Your data is one, your apps are many
            </h2>
            <p class="content is-large">
              When you use a Solid apps, it reads and writes data it work with in your Pod. This means that you can use
              three Solid apps that need to know your friend list (e.g. birthdays, recommanding books and instant messaging), 
              and not duplicate your friend list three times! This means that you and the people you work with can actually use many different apps – at the same time even – to do stuff. 
            </p>
            <p class="content is-large">
              Solid app builders use the Solid standard to interact with the date in your Pod. The data isn't stored at some computer run by the person who owns the app: by default <strong>you control all the data</strong> in your Solid world. This is an improvement to both your privacy and your experience with apps.
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
