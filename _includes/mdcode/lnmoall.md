
{% assign subjects = "Algebra,Combinatorics,Geometry,Number Theory" | split: "," %}
{% assign subject_icons = "fa-superscript,fa-shapes,fa-draw-polygon,fa-infinity" | split: "," %}

{% for subject in subjects %}
  {% assign i = forloop.index0 %}
  {% assign subject_icon = subject_icons[i] %}

  {% include lqd/math-library.liquid
     subject=subject
     subject_icon=subject_icon %}
{% endfor %}

> #### **Lecture notes for Math Olympiad ([IOQM]({{ site.url }}{{ site.baseurl }}/ioqm/), [RMO]({{ site.url }}{{ site.baseurl }}/rmo/), [INMO]({{ site.url }}{{ site.baseurl }}/inmo/))**
>
> <table
>   id="table"
>   data-toggle="table">
>   <thead>
>     <tr>
>       <th data-field="topic" data-halign="center" data-align="center">Topics</th>
>       <th data-field="link" data-halign="center" data-align="center">Links</th>
>     </tr>
>   </thead>
>   <tbody>
>   {% for item in site.data.csv.lnmoall %}
>   {% if item.link != page.jsujet or item.link == "MOPSS" %}
>     <tr>
>       <td>
>         <a href="{{ site.url }}{{ site.baseurl }}/{{ item.link }}/">
>           {{ item.topic }}
>         </a>
>       </td>
>       <td>
>         <a href="{{ site.url }}{{ site.baseurl }}/{{ item.link }}/">
>           <i class="fa-solid fa-file-pdf fa-2x"></i>
>           <i class="fa-solid fa-download fa-2x"></i>
>         </a>
>       </td>
>     </tr>
>   {% endif %}
>   {% endfor %}
>   </tbody>
> </table>
