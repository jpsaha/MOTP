---
layout: page
permalink: /rmo/
title: RMO
description: Regional Mathematical Olympiad. Links to Past Question Papers, Previous Years’ Question papers of RMO, Solutions. Hints, Walkthroughs, Discussions, Solutions in pdf.
nav: true
nav_order: 11
lnmo: true
giscus_comments: true
pretty_table: true
mermaid:
  enabled: true
  zoomable: true
---

{% assign tsts = "rmo" | split: "," %}
{% include lqd/pastqp.liquid %}

---

{% capture content %}{% include mdcontent/mostages/{{ site.data.lnk.moyrabbr }}stages.md %}{% endcapture %}
{{ content | markdownify }}

### RMO (Regional Mathematical Olympiad)

{% capture content %}{% include mdcontent/mostages/{{ site.data.lnk.moyrabbr }}rmo.md %}{% endcapture %}
{{ content | markdownify }}

---
