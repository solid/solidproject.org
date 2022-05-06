---
layout: newsletter
title: This Month in Solid
permalink: /newsletter
redirect_from: /this-week-in-solid
exclude: true
---

Stay up to date with events, learning resources, and recent developments.  


# Most Recent Issues

{% for post in site.posts limit: 5 %}
{% unless post.exclude %}
* [{{ post.title }}]({{ post.url }})
{% endunless %}
{% endfor %}
* [All issues…]({{site.baseurl}}/newsletter/archive)
