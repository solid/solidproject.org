---
layout: default
title: Solid
permalink: /
---

<div class="home">
  <div class="title-banner">
    <!-- <h1 class="title">Solid</h1> -->
    <div class="subtitle">
      Switch between storage and apps <br/> while taking the data along 
    </div>
      <a href="#what-is-solid" class="learn-more-link">
        <!-- What Is Solid?<br/> -->
        <img
          src="{{site.baseurl}}/assets/img/fontawesome-free-5.11.2-web/svgs/solid/angle-double-down.svg"
          alt=""
          class="chevron"
        />
      </a>
      </div>
  <div class="page-content">
  <!-- <h2 class="intro-heading">Why you'll love Solid as a user</h2> -->
    {% include why2love_user.html %}
    <span id="what-is-solid"></span>
    <div class="img-info-banner row around">
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 image">
        <img src="{{site.baseurl}}/assets/img/like-peas-in-a-pod.svg" alt="" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <div class="info-card">
          <h3 class="title">Like peas in a Pod</h3>
          <p class="info">
            Your <a href="{{site.baseUrl}}/faqs#pod" title="Frequently Asked Questions - what is a Pod?">Pod</a> is where you store your data. Pods and apps are separate but compatible so you are free to change apps while keeping your data. For example, if you want to switch messaging app you can take your contacts and chat history along easily, as long as both apps support Solid.
          </p>
        </div>
      </div>
    </div>
    <div class="img-info-banner row around reverse">
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 image">
        <img src="{{site.baseurl}}/assets/img/single-sign-on.svg" alt="" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <div class="info-card">
          <h3 class="title">The last login you'll ever need</h3>
          <p class="info">
          Your <a href="{{site.baseUrl}}/faqs#webid" title="Frequently Asked Questions - what is a WebID?">WebID</a> changes the power dynamic. You call the shots: instead of creating an account for each app, have each app find your account. On top of that, your WebID makes it possible for people to connect to you, no matter what Solid apps they are using.
          </p>
        </div>
      </div>
    </div>
    <div class="img-info-banner row around">
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 image">
        <img src="{{site.baseurl}}/assets/img/solid-is-a-standard.svg" alt="" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
        <div class="info-card">
          <h3 class="title">
            Not a company, not a product, just a standard
          </h3>
          <p class="info">
          Solid is an <a href="https://solid.github.io/specification/">open standard</a>, meaning that anyone can implement it.
          It describes how <a href="{{site.baseUrl}}/faqs#pod" title="Frequently Asked Questions - what is a Pod?">Pods</a>, <a href="{{site.baseUrl}}/faqs#webid" title="Frequently Asked Questions - what is a WebID?">WebIDs</a> and apps interact to <a href="{{site.baseUrl}}/faqs#interoperability" title="Frequently Asked Questions - What does 'Interoperability' mean?">interoperate</a>.
          The Web makes it possible to transfer data conveniently and Solid adds a user-centric access control.
          </p>
        </div>
      </div>
    </div>
    <form
      action="https://tinyletter.com/ThisWeekInSolid"
      class="newsletter-form"
      method="post"
      target="popupwindow"
      onsubmit="window.open('https://tinyletter.com/ThisWeekInSolid', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <h2>
        <a href="{{site.baseUrl}}/this-week-in-solid" title="View past editions of This Week in Solid">
          This Week in Solid
        </a>
      </h2>
      <p>
        <label for="tlemail">
          Leave your email address to get a bite-sized overview of everything Solid, delivered straight to your inbox once a week.
        </label>
      </p>
      <p>
        <input type="email" name="email" placeholder="yourmail@example.com" id="tlemail"/>
      </p>
      <input type="hidden" value="1" name="embed"/>
      <input type="submit" value="Subscribe" />
    </form>

  </div>
</div>
