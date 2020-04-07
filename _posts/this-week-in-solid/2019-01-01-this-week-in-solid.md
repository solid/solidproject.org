---
layout: this-week-in-solid
title: This Week in Solid
permalink: /this-week-in-solid
exclude: true
---

Hand-picked Solid updates delivered to you.

Stay up to date with events, learning resources, and recent developments put together by the [Solid team]({{site.baseUrl}}/team). 

You can always check here for the most current issue as well as find a record of past issues. The Solid Manager will manually send a message to the [Gitter solid/chat](https://gitter.im/solid/chat) every week as well as to the mailing list of the [W3C Solid Community Group](https://www.w3.org/community/solid/) which you will receive automatically when you [join](https://www.w3.org/community/solid/) the W3C Solid Community Group. 

# Next Up

We're currently working on next week's edition. You can contribute by [making a Pull Request](https://github.com/solid/solidproject.org/edit/master/_posts/this-week-in-solid/next.md)!

# Previous Issues

{% for post in site.posts limit: 5 %}
{% unless post.exclude %}
* [{{ post.title }}]({{ post.url }})
{% endunless %}
{% endfor %}
* [All issues…]({{site.baseurl}}/this-week-in-solid/archive)
