{% assign date = "ioqm_" | append: site.data.lnk.moyr | remove: "20" | remove: "--"  | append: "_date" -%}
{% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}
{%- if site.data.lnk[date] -%}

- Scheduled on [{{ site.data.lnk[date] }}]({{ site.data.lnk[key] }}).
  {%- endif %}
- The paper consists of 30 questions worth 100 marks in total.
- There are 10 questions worth 2 marks, 10 questions worth 3 marks, 10 questions worth 5 marks.
- Poster [<i class="fa-solid fa-file-pdf fa-2x"></i>](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2026/06/IOQM-2026.jpeg)
- Websites (to be referred for latest updates and information)
  - [IOQM](https://ioqm.mtai.org.in/)
  - [HBCSE]({{ site.data.lnk[key] }})
- A few problems from [IOQM]({{ site.url }}{{ site.baseurl }}/ioqm/) 2023 have been discussed [here]({{ site.url }}{{ site.baseurl }}/ioqm/2023/).
