---
layout: page-about
title: Specification
permalink: specification
redirect_from:
  - standardisation
---

# Specification

The Solid Specification consists of several Technical Reports. These reports are listed below, together with their current status. For more information, please see the [Solid Technical Reports](https://solidproject.org/TR/) page. 

<div id='trs'></div>

<script>

  const url = 'https://solidproject.org/TR';
  const id  = 'work-item-technical-reports';

  const df  = new DocumentFragment();
  const trs = document.getElementById('trs');

  fetch(url).then((response) => response.text()).then((body) => {
    df.appendChild(document.createElement(null)).innerHTML = body;
    trs.appendChild(df.getElementById(id));
  });

</script>
