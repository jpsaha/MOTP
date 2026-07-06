{% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}
{% assign yr = site.data.lnk.moyr | split: "--" | last %}
{% assign matches = site.imotc | where: "slug", yr %}

{%- assign tc = "imotc_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" | append: "_date" -%}
{%- if site.data.lnk[tc] %}

- Scheduled during {{ site.data.lnk[tc] }}.
  {%- endif -%}
  {%- if matches.size > 0 %}
- Some notes from IMOTC {{ site.data.lnk.moyr | split: "--" | last }} have been posted at [this link]({{ site.url }}{{ site.baseurl }}/imotc/{{ site.data.lnk.moyr | split: "--" | last }}/).
  {%- endif %}
- Through the TSTs ([Team Selection Tests](https://artofproblemsolving.com/community/c3310_india_imo_training_camp)), it leads to the selection of six students to represent India at [IMO](https://www.imo-official.org/organizers.aspx).
- Websites: [HBCSE]({{ site.data.lnk[key] }}).
