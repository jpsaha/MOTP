---
layout: page
permalink: /ioqm/
title: IOQM
description: Indian Olympiad Qualifier in Mathematics. Links to Past Question Papers, Previous Years’ Question papers of IOQM, Answer keys. Hints, Walkthroughs, Discussions, Solutions in pdf.
nav: true
nav_order: 10
giscus_comments: true
pretty_table: true
mermaid:
  enabled: true
  zoomable: true
---

{% assign tsts = "ioqm" | split: "," %}
{% include lqd/pastqp.liquid %}

---

{% assign tst = "prmo" %}
{% capture jlinktable %}{% include lqd/pastpapers.liquid %}{% endcapture %}

{{ jlinktable | markdownify }}
