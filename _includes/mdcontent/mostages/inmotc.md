{% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}

- The [INMO Training Camps]({{ site.data.lnk[key] }}) are held prior to INMO {{ site.data.lnk.moyr | split: "--" | last }}.
  {%- assign tc = "inmotc_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" | append: "_sch" -%}
  {%- if site.data.lnk[tc] %}
- The schedule of some of these camps are available at [this link]({{ site.data.lnk[tc] }}).
  {%- endif -%}
  {%- assign tcmp = "inmotc_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" | append: "_mp_date" -%}
  {%- if site.data.lnk[tcmp] %}
- The INMO Training Camp {{ site.data.lnk.moyr | split: "--" | last }} for the Madhya Pradesh region is scheduled from {{ site.data.lnk[tcmp] }} at [IISER Bhopal](https://www.iiserb.ac.in/). Details may be found at [this page]({{ site.url }}{{ site.baseurl }}/inmotc/{{ site.data.lnk.moyr | split: "--" | last }}mp/).
  {% endif %}
