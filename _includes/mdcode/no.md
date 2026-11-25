
<div class="topic-notes">

  <div class="topic-notes-subtitle">
    Mathematics Olympiad ·
    <a href="{{ '/ioqm/' | relative_url }}">IOQM</a> ·
    <a href="{{ '/rmo/' | relative_url }}">RMO</a> ·
    <a href="{{ '/inmo/' | relative_url }}">INMO</a>
  </div>

  {% case page.title %}
    {% when 'Algebra' %}
      {% assign topic_class = 'stage-blue' %}
      {% assign subject_slug = 'alg' %}
    {% when 'Combinatorics' %}
      {% assign topic_class = 'stage-teal' %}
      {% assign subject_slug = 'comb' %}
    {% when 'Geometry' %}
      {% assign topic_class = 'stage-orange' %}
      {% assign subject_slug = 'geo' %}
    {% when 'Number Theory' %}
      {% assign topic_class = 'stage-purple' %}
      {% assign subject_slug = 'nt' %}
  {% endcase %}

  <div class="topic-notes-grid">

    {% for item in site.data.csv.no %}
      {% if item.subj == page.title %}

        {% assign topic_url = '/' | append: subject_slug | append: '/' | append: item.pdf | downcase | append: '/' %}

        {% assign pdf_url = '/assets/pdf/' | append: page.jsujet | append: '/' | append: item.pdf | append: '.pdf' %}

        <article class="topic-note-card {{ topic_class }}">

          <div class="topic-note-card-header">

            <h3>
              <a class="topic-note-link" href="{{ topic_url | relative_url }}">
                {{ item.topic }}
              </a>
            </h3>

            <a href="{{ pdf_url | relative_url }}"
               class="topic-note-pdf"
               target="_blank"
               rel="noopener"
               aria-label="Open PDF for {{ item.topic }}">
              <i class="fa-solid fa-file-pdf"></i>
              <span>PDF</span>
            </a>

          </div>

          {% if item.description != blank %}
            <p class="topic-note-description">
              {{ item.description }}
            </p>
          {% endif %}

        </article>

      {% endif %}
    {% endfor %}

  </div>
</div>
