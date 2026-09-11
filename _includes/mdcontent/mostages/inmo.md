{% assign date = "inmo_" | append: site.data.lnk.moyr | remove: "20" | remove: "--"  | append: "_date" -%}
{% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}
{%- if site.data.lnk[date] -%}

- Scheduled on [{{ site.data.lnk[date] }}]({{ site.data.lnk[key] }}).
  {%- endif -%}
{%- assign keyh = site.data.lnk.moyr | remove: "-" -%}
{%- assign found = false -%}
{%- for item in site.data.past -%}
  {%- assign item_key = item.yr | remove: "-" -%}
  {%- if item_key == keyh and item.inmo.qn[0].qq -%}
    {%- assign found = true %}
- [The paper]({{ item.inmo.qn[0].qq }}) consists of 6 questions.
  {%- endif -%}
{%- endfor -%}
{%- unless found %}
- The paper consists of 6 questions.
{%- endunless %}
- It requires writing detailed proofs.
  {%- assign key = "inmolink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" -%}
  {%- if site.data.lnk[key] %}
- The result of INMO {{ site.data.lnk.moyr | split: "--" | last }} may be found at [this link]({{ site.data.lnk[key] }}).
  {% endif %}
