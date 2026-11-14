---
layout: post
title: Notes on IOQM
date: 2024-05-02 08:57:00-0400
description: Indian Olympiad Qualifier in Mathematics. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.
tags: IOQM MathOlympiad Notes Handouts LectureNotes
categories: IOQM
jsujet: dummy
giscus_comments: true
pretty_table: true
related_posts: false
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
