---
layout: default
title: Solid
permalink: /
---

<div class="home">
  <div class="title-banner">
    <h1 class="title">Solid</h1>
    <div class="subtitle">
      An ecosystem that makes the Web work for you
    </div>
    <a href="{{site.baseurl}}/get-started" class="learn-btn">Get started</a>
      <a href="#what-is-solid" class="learn-more-link">
        What Is Solid?<br/>
        <img
          src="{{site.baseurl}}/assets/img/fontawesome-free-5.11.2-web/svgs/solid/angle-double-down.svg"
          alt=""
          class="chevron"
        />
      </a>
      </div>
  <div class="page-content">
  <h2 class="intro-heading">Why you'll love Solid as a user</h2>
  <div class="intro-subheading">Find out why you'll love Solid <a href="/for-developers">as a developer</a> or <a href="/for-enterprises">as an enterprise</a></div>
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
            Your Pod is where you store your data. Pods and apps are always separate and compatible meaning you are free to pick and choose and change your mind while still keeping your data. For example, if you want to switch messaging app you can take your contacts and chat history along easily. <a href="{{site.baseUrl}}/use-solid" title="Where to get a Solid account">Get started</a> with using Solid or find out more by reading the <a href="{{site.baseUrl}}/faqs" title="Frequently Asked Questions">FAQs</a>.
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
          <h3 class="title">Single Sign-On</h3>
          <p class="info">
          Login with WebID to use Solid. Similar to email, WebID allows you to connect to anyone else no matter who their identity provider is. When you login with WebID, you and only you and where you are signing into knows about it. <a href="{{site.baseUrl}}/use-solid" title="Where to get a Solid account">Get started</a> by signing up for a WebID.
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
            <a href="https://solid.github.io/specification/">Solid is a standard</a>
          </h3>
          <p class="info">
            The web was designed to make it possible for information – data – to transfer conveniently no matter where you are or what device you are using. Today data is used as a bargaining chip to lock you in. <a href="https://solid.github.io/specification/" title="The Solid Specification">Solid is a standard</a> that describes how to build storage, apps, and identification in such a way that you can conveniently connect and switch without losing data. If you are interested in the standardisation process, <a href="{{site.baseUrl}}/standardisation" title="How to contribute to the Solid standards">contributions are welcome</a>.
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