---
layout: page
permalink: /mopss/
title: MOPSS
description: Mathematics Olympiad Problem Solving Sessions
nav: true
nav_order: 16
tabs: true
giscus_comments: true
# jpdf: flyer25A
jpdfsauf: flyer25A
jsujet: MOPSS
pretty_table: true
---

{% assign tst = "mopss" %}
{% include lqd/pastqpdisp.liquid %}

---

## [Mathematics Olympiad Problem Solving Sessions]({{ site.url }}{{ site.baseurl }}/mopss/) (MOPSS)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/MOPSS.jpg" title="MOPSS" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

- The [Department of Mathematics, IISER Bhopal](https://maths.iiserb.ac.in/), would be organizing a series of [Mathematics Olympiad Problem Solving Sessions]() ([MOPSS]()).
- The aim is to develop an interest in mathematics among the students by encouraging them to work on problems falling broadly within the scope of the Mathematical Olympiad.

> - The plan for [MOPSS]() is spread across the **following dates** and beyond (to be updated as new dates are finalized). The sessions will be held **during 9:00am to 12:00pm at IISER Bhopal in person offline classroom meetings**.
>
> <table
>   id="table"
>   data-toggle="table">
>   <thead>
>     <tr>
>       <th data-field="schedule" data-halign="center" data-align="center" class="text-center align-middle">
>         Schedule <br>
>         (<i class="fa-solid fa-clock"></i> <strong>9:00am to 12:00pm</strong>)
>       </th>
>       <th data-field="notes" data-halign="center" data-align="center" class="text-center align-middle">
>         Notes
>       </th>
>       <th data-field="links" data-halign="center" data-align="center"></th>
>     </tr>
>   </thead>
>
>   <tbody>
> {% for item in site.data.mopss -%}
    {%- assign ym = item.date | date: "%F" | replace: "-", "" | slice: 0, 6 | plus: 0 -%} 
    {%- if ym >= 202601 %}
    {%- assign d = item.date | date: "%-d" | plus: 0 -%}
    {%- assign suffix = "th" -%}
    {%- if d == 1 or d == 21 or d == 31 -%}
        {%- assign suffix = "st" -%}
    {%- elsif d == 2 or d == 22 -%}
        {%- assign suffix = "nd" -%}
    {%- elsif d == 3 or d == 23 -%}
        {%- assign suffix = "rd" -%}
    {%- endif %}
>     <tr>
>
>       <td>
>         <i class="fas fa-calendar-alt" style="color:gray"></i>
>         <strong>{{ d }}{{ suffix }} {{ item.date | date: "%B" }}, {{ item.date | date: "%Y" }}</strong>
>       </td>
>
>       <td>
>         {% if item.pdf %}
>         <a href="{{ 'assets/pdf/MOPSS/' | append: item.pdf | append: '.pdf' | relative_url }}"
>            target="_blank" rel="noopener noreferrer">
>           <i class="fa-solid fa-file-pdf fa-2x"></i>
>         </a>
>         {% endif %}
>       </td>
>
>       <td>
>         {% if item.pdf %}
>         <a href="{{ site.url }}{{ site.baseurl }}/mopss/{{ item.pdf | slice: 5, 100 | downcase }}/">
>           <i class="fa-solid fa-globe fa-2x"></i>
>         </a>
>         {% endif %}
>       </td>
>
>     </tr>
>   {% endif %}
>   {% endfor %}
>   </tbody>
> </table>
>
> - A student will get the **maximum benefit** out of [MOPSS]() if he/she attends **all the above sessions**.

{% capture lnmo %}{% include mdcode/lnmoall.md %}{% endcapture %}
{{ lnmo | markdownify }}

If you (the reader!) are aware of these Olympiads, and would like to prepare for them, then you may wish to know about [a few training programs]({{ site.url }}{{ site.baseurl }}/trainingprog/).

---

> ## FAQs (Frequently Asked Questions)
>
> - **Will MOPSS be held offline or online?**
>   - As mentioned above, MOPSS will be held offline.
>
>
> - **What is the procedure to participate in these sessions?**
>   - The participants of [MOPSS 2024](../mopss24a/) have been invited to MOPSS 2025. Any interested student may write an email to <a href="{{ site.url }}/home/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-address-card"></i></a> {{ site.first_name }} {{ site.middle_name }} {{ site.last_name }} (<a href="mailto:{{ site.email }}?subject=[MOPSS]"><i class="fas fa-envelope" style="color:gray"></i> {{ site.email }}</a>) expressing his/her interest.
>
>
> - **Will there be an online session for MOPSS apart from the in person classroom meetings?**
>   - No.
>
>
> - **Can one participate in some of the sessions of MOPSS if one cannot participate in all the sessions?**
>   - As stated above, a student, participating in MOPSS, will get the **maximum benefit** out of MOPSS if he/she attends **all the sessions**. However, if one cannot participate in all the sessions, and would like participate in the remaining, then one may join those sessions.
>
>
> - **Will refreshments be provided to the participants?**
>   - Yes.
>
>
> - **Are there any suggestions for the students living far from Bhopal?**
>   - The problem sets, that will be discussed in MOPSS, will also be posted online. Anyone may have a look at them, including the students living in Bhopal, or far from Bhopal.
>
>
> - **What are the fees for MOPSS?**
>   - MOPSS is free of cost. The **only** aim of MOPSS is to develop an interest in mathematics among the students by encouraging them to work on problems falling broadly within the scope of Mathematics Olympiad.

- For more information, you may write to <a href="{{ site.url }}/home/" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-address-card"></i></a> {{ site.first_name }} {{ site.middle_name }} {{ site.last_name }} (<a href="mailto:{{ site.email }}?subject=[MOPSS]"><i class="fas fa-envelope" style="color:gray"></i> {{ site.email }}</a>).

## Why math olympiads are a valuable experience for high schoolers

{% details Click here to know more %}

- The post by Evan Chen on [Lessons from math olympiads](https://blog.evanchen.cc/2018/01/05/lessons-from-math-olympiads/) is worth reading.
- In a previous post, titled [Against the “Research vs. Olympiads” Mantra](https://blog.evanchen.cc/2016/08/13/against-the-research-vs-olympiads-mantra/), Evan Chen discussed why math olympiads should not be judged by their relevance to research mathematics. He mentions that in that post, he failed to actually explain why he thinks math olympiads are a valuable experience for high schoolers. In the post [Lessons from math olympiads](https://blog.evanchen.cc/2018/01/05/lessons-from-math-olympiads/), he puts the amends.
- and the last, but not the least, could be to take a look at the following [vision](https://imof.co/) of the [IMO Foundation](https://imof.co/), which is a charity supporting the International Mathematical Olympiad ([IMO](https://www.imo-official.org/)).
  > It is the aim of the IMO to bring young people together from all over the world to enjoy the challenges of mathematics in a spirit of friendly competition. This provides a stimulus for Mathematics in each of the participating countries as young people strive for selection. Whist clearly it is a competitive event, for most participants, it is the people that they meet and the shared joy of discovery that is what they regard as most worthwhile. It is common that lifelong friendships are forged at IMO events.
{% enddetails %}

---

## Admission to the Chennai Mathematical Institute (CMI)

To quote from the webpage of CMI regarding [admissions](https://www.cmi.ac.in/admissions/) (please refer to this page and any other relevant page for the precise and updated details),

> Students with exceptionally good performance in the National Olympiads in Mathematics and Physics conducted by [HBSCE]({{ site.data.lnk.hbcselink }}) and the Indian Computing Olympiad conducted by [IARCS](https://www.iarcs.org.in/inoi/) are exempted from writing the BSc entrance examination.
> Typically, the following categories of students qualify for direct admission:
> - Students who have qualified for the International Mathematical Olympiad Training Camp (IMOTC) or European Girls Mathematical Olympiad Training Camp (EGMOTC) in Class 11 or Class 12.
> - Students who have qualified for the Orientation Cum Selection Camp (OCSC) in Physics in Class 11 or Class 12.
> - Students who have qualified for the International Olympiad in Informatics Training Camp (IOITC), or have received a gold or silver medal at the Indian National Olympiad in Informatics (INOI) in Class 11 or Class 12.
{: .block-tip }

## Admission to the Indian Statistical Institute (ISI)

To quote from the [Prospectus 2024--25](https://www.isical.ac.in/~admission/Documents/IsiAdmission2024/ISI-Prospectus-2024.pdf) of ISI (please refer to this page and any other relevant page for the precise and updated details),

**The following applies to admissions in a particular academic year.**

> There is a separate provision for applicants of B.Stat.--B.Math. programmes who have been selected as INMO AWARDEES to participate in the International Mathematics Olympiad Training Camp (IMOTC) in the years 2023 and 2024 based on their performance in the Indian National Mathematics Olympiad (INMO), conducted by the National Board of Higher Mathematics, Department of Atomic Energy, Government of India. The number of seats for INMO AWARDEES is supernumerary, subject to a maximum of 5 seats. There will be no Written Test, and the selection to these supernumerary seats will be based on interview.
{: .block-tip }

## [Geoff Smith](https://en.wikipedia.org/wiki/Geoff_Smith_(mathematician))

is a British mathematician. He has been the [leader of the UK IMO team](https://www.imo-official.org/country_team_r.aspx?code=UNK) during 2002--2010, 2013--2018, 2022. He [has been awarded](https://www.imo-register.org.uk/golden-microphone.html) the IMO Golden Microphone thrice (during 2006, 2009, 2014).

{% details Click here to know more %}

{% capture geoff_smith %}{% include md/geoffsmith.md %}{% endcapture %}
{{ geoff_smith | markdownify }}

{% enddetails %}
