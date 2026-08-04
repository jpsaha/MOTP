---
layout: page
permalink: /ioqm/
title: IOQM
description: Indian Olympiad Qualifier in Mathematics. Links to Past Question Papers, Previous Years’ Question papers of IOQM, Answer keys. Hints, Walkthroughs, Discussions, Solutions in pdf.
nav: true
nav_order: 10
lnmo: true
giscus_comments: true
pretty_table: true
mermaid:
  enabled: true
  zoomable: true
---

{% assign tsts = "ioqm" | split: "," %}
{% include lqd/pastqp.liquid %}

---

{% assign tsts = "prmo" | split: "," %}
{% include lqd/pastqp.liquid %}

---

{% capture content %}{% include mdcontent/mostages/stages.md %}{% endcapture %}
{{ content | markdownify }}

### IOQM (Indian Olympiad Qualifier in Mathematics)

{% capture content %}{% include mdcontent/mostages/ioqm.md %}{% endcapture %}
{{ content | markdownify }}

---
