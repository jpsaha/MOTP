---
layout: page
permalink: /inmo/
title: INMO
description: Indian National Mathematical Olympiad. Links to Past Question Papers, Previous Years’ Question papers of INMO, Solutions. Hints, Walkthroughs, Discussions, Solutions in pdf.
nav: true
nav_order: 13
giscus_comments: true
pretty_table: true
mermaid:
  enabled: true
  zoomable: true
---

{% assign tsts = "inmo" | split: "," %}
{% include lqd/pastqp.liquid %}