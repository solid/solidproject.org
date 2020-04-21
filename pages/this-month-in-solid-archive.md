---
layout: this-week-in-solid
title: This Month in Solid — all issues
permalink: /this-month-in-solid/archive
redirect_from: /this-week-in-solid/archive
---

# This Month in Solid — all issues

{% assign postsByYearMonth = site.posts | group_by_exp:"post", "post.date | date: '%Y'"  %}

{% for yearMonth in postsByYearMonth %}
## {{ yearMonth.name }}
{% for post in yearMonth.items %}
{% unless post.exclude %}
* [{{ post.title }}]({{ post.url }})
{% endunless %}
{% endfor %}
{% endfor %}
