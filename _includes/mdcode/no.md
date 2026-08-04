##### Lecture notes on {{ page.title }} (for Math Olympiad --- [IOQM]({{ site.url }}{{ site.baseurl }}/ioqm/), [RMO]({{ site.url }}{{ site.baseurl }}/rmo/), [INMO]({{ site.url }}{{ site.baseurl }}/inmo/))

<table
  id="table"
  data-toggle="table">

  <thead>
    <tr>
      <th data-field="topic" data-halign="center" data-align="center">
        {{ page.title }} Topics
      </th>
      <th data-field="links" data-halign="center" data-align="center">
        Links
      </th>
    </tr>
  </thead>

  <tbody>
  {% for item in site.data.csv.no %}
    {% if item.subj == page.title %}
    <tr>

      <td>
        <a href="{{ site.url }}{{ site.baseurl }}/{% if page.title == 'Algebra' %}alg{% elsif page.title == 'Combinatorics' %}comb{% elsif page.title == 'Geometry' %}geo{% else %}nt{% endif %}/{{ item.pdf | downcase }}/">
          {{ item.topic }}
        </a>
      </td>

      <td>
        <a href="{{ site.url }}{{ site.baseurl }}/assets/pdf/{{ page.jsujet }}/{{ item.pdf }}.pdf">
          <i class="fa-solid fa-file-pdf fa-2x"></i>
        </a>
      </td>

    </tr>
    {% endif %}

{% endfor %}

  </tbody>

</table>
