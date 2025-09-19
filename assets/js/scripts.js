---
layout: null
permalink: /assets/scripts.js
---
{% capture js %}{% include_relative menu.js %}{% endcapture %}{{ js | strip_newlines | replace: '    ', ' ' | replace: '  ', ' ' }}
