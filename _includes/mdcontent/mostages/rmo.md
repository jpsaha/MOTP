{% assign date = "rmo_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" | append: "_date" -%}
{% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}
{%- if site.data.lnk[date] -%}

- Scheduled on [{{ site.data.lnk[date] }}]({{ site.data.lnk[key] }}).
  {%- endif %}
- The paper consists of 6 questions.
- It requires writing detailed proofs.
  {%- assign key = "rmolink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" -%}
  {%- if site.data.lnk[key] %}
- The result of RMO {{ site.data.lnk.moyr | split: "--" | first }} may be found at [this link]({{ site.data.lnk[key] }}).
  {% endif %}
