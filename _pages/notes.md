---
layout: page
permalink: /notes/
title: Notes
description: Topic-wise lecture notes in Algebra, Combinatorics, Geometry and Number Theory for mathematical olympiads.
nav: true
nav_order: 16
tabs: true
giscus_comments: true
pretty_table: true
---

<div class="notes-page">

  <div class="notes-intro">
    <p>
      Explore mathematical concepts, techniques and problem-solving methods
      through topic-wise lecture notes for IOQM, RMO, INMO and other
      mathematical olympiads.
    </p>
  </div>

  {% include lqd/notes-library.liquid %}

</div>


{% include lqd/subject-page.liquid %}


<section class="subject-resources">

  <h3>Further Lecture Notes and Resources</h3>

  {% assign other_resources = "INMO Training Camp:inmotc:stage-blue,IMO Training Camp:imotc:stage-teal,MOPSS:mopss:stage-orange,Simon Marais Mathematics Competition:smmc:stage-purple,Resources:resources:stage-blue" | split: "," %}

  <div class="subject-resource-grid subject-other-resources">

    {% for entry in other_resources %}
      {% assign parts = entry | split: ":" %}
      {% assign name = parts[0] %}
      {% assign slug = parts[1] %}
      {% assign colour = parts[2] %}

      <a class="subject-resource-card {{ colour }}"
         href="{{ '/' | append: slug | append: '/' | relative_url }}">

        <strong>{{ name }}</strong>
        <span>Explore resources <i class="fas fa-arrow-right"></i></span>

      </a>

    {% endfor %}

  </div>


</section>
