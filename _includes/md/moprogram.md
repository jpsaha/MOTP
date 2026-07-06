# Mathematical Olympiad program in India

The [Homi Bhabha Centre for Science Education]({{ site.data.lnk.hbcselink }}) (HBCSE) organizes the {% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}[Math Olympiad program]({{ site.data.lnk[key] }}) in India.

{% assign brochure = "mobro_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}
{% if site.data.lnk[brochure] %}

##### The [Math Olympiad program organized by HBCSE]({{ site.data.lnk[brochure] }}), is the <span style="color: red"> only one </span> leading to participation in the following <span style="color: green"> International </span> Mathematical Olympiads.

{% else %}

##### The Math Olympiad program organized by HBCSE, is the <span style="color: red"> only one </span> leading to participation in the following <span style="color: green"> International </span> Mathematical Olympiads.

{% endif %}

- [International Mathematical Olympiad](https://www.imo-official.org/) (IMO)
- [European Girls’ Mathematical Olympiad](https://www.egmo.org/) (EGMO)
- [Asian Pacific Mathematics Olympiad](https://www.apmo-official.org/) (APMO)

#### <span style="color: red"> No other contests are recognized. </span>

## [Eligibility](https://olympiads.hbcse.tifr.res.in/how-to-participate/eligibility/mathematical-olympiad/)

> - The students enrolled in the 8th, 9th, 10th, 11th or 12th standard may participate in IOQM, provided certain additional conditions are met. The precise details are available at the {% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}[webpage]({{ site.data.lnk[key] }}) of the Homi Bhabha Centre for Science Education (HBCSE). Please visit {% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}[this webpage]({{ site.data.lnk[key] }}) for the updates and further details.
>   {: .block-tip }

{% if site.data.lnk[brochure] %}

## Some {% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}[stages]({{ site.data.lnk[key] }}) of the [Math Olympiad program {{ site.data.lnk.moyr }}]({{ site.data.lnk[brochure] }})

{% else %}

## Some {% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}[stages]({{ site.data.lnk[key] }}) of the Math Olympiad program {{ site.data.lnk.moyr }}

{% endif %}

{% capture content %}{% include mdcontent/mostages/stages.md %}{% endcapture %}
{{ content | markdownify }}

<!-- https://mermaid.js.org/syntax/examples  -->

{% tabs stages %}

{% tab stages IOQM %}

### IOQM (Indian Olympiad Qualifier in Mathematics)

{% capture content %}{% include mdcontent/mostages/ioqm.md %}{% endcapture %}
{{ content | markdownify }}

{% endtab %}

{% tab stages RMO %}

### RMO (Regional Mathematical Olympiad)

{% capture content %}{% include mdcontent/mostages/rmo.md %}{% endcapture %}
{{ content | markdownify }}

{% endtab %}

{% tab stages INMOTC %}

##### INMOTC (Indian National Mathematical Olympiad Training Camp)

{% capture content %}{% include mdcontent/mostages/inmotc.md %}{% endcapture %}
{{ content | markdownify }}

{% endtab %}

{% tab stages INMO %}

### INMO (Indian National Mathematical Olympiad)

{% capture content %}{% include mdcontent/mostages/inmo.md %}{% endcapture %}
{{ content | markdownify }}

{% endtab %}

{% tab stages IMOTC %}

### IMOTC (International Mathematical Olympiad Training Camp)

{% capture content %}{% include mdcontent/mostages/imotc.md %}{% endcapture %}
{{ content | markdownify }}

{% endtab %}

{% tab stages PDC %}

### PDC (Pre-Departure Camp)

- Held before leaving for [IMO](https://www.imo-official.org).
- Websites: {% assign key = "molink_" | append: site.data.lnk.moyr | remove: "20" | remove: "--" %}[HBCSE]({{ site.data.lnk[key] }}).

{% endtab %}

{% tab stages Past Question Papers %}

##### Past Question papers

The past papers are available at the webpages of

- [ISI, Kolkata](https://www2.isical.ac.in/~rmo/resources.html),
- [HBCSE](https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/),
- [HBCSE](https://library.hbcse.tifr.res.in/olympiads/subjects/mathematics/previous-question-papers-and-solutions),
- [HBCSE](https://library.hbcse.tifr.res.in/olympiads/uploads).

> The links to the past Question papers along with [AoPS](https://artofproblemsolving.com/community/c3176_india_contests) links are available at [this page]({{ site.url }}{{ site.baseurl }}/pastpapers/).

{% endtab %}

{% endtabs %}

---
