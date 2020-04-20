---
layout: this-week-in-solid
title: This Week in Solid — all issues
permalink: /this-week-in-solid/archive
---

# This Week in Solid — all issues

{% assign postsByYearMonth = site.posts | group_by_exp:"post", "post.date | date: '%Y'"  %}

{% for yearMonth in postsByYearMonth %}
## {{ yearMonth.name }}
{% for post in yearMonth.items %}
{% unless post.exclude %}
* [{{ post.title }}]({{ post.url }})
{% endunless %}
{% endfor %}
{% endfor %}
