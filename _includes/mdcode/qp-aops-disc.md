{% comment %}
qp-aops-disc.md
Usage:
{% include mdcode/qp-aops-disc.md %}
Used in: 2024-05-01-NotesRMO.md
Used earlier in: RMO.md
{% endcomment %}

|   Year  | {{ mycom | upcase }} <br>  Question paper,  <br> {% if mycom == 'ioqm' %}Answer keys{% else %}{% if mycom == 'prmo' %}Answer keys{% else %}{% if mycom == 'rmo' %}Solutions{% else %}{% if mycom == 'inmo' %}Solutions{% else %} Whatever {% endif %}{% endif %}{% endif %}{% endif %}  |  AoPS  |  Discussion  |
| :------------: | :------------ | :------------: | :------------: |
{% for item in site.data.past %}{% if item.[tst].yr %}| {{ mycom | upcase }} {{ item.[tst].yr }} |  {% for member in item.[tst].qn %} {% if member.qq %}{{ member.src }} <a href="{{ member.qq }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf fa-2x"></i></a> {% endif %} {% if member.sol %}<a href="{{ member.sol }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf fa-2x"></i></a>{% endif %}{% unless forloop.last %} <br><br>{% endunless %}{% endfor %}  |  {% for member in item.[tst].aops %}{% if member.qq %} {{ member.src }} <a href="{{ member.qq }}" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-globe fa-2x"></i></a> {% endif %} {% unless forloop.last %} <br> <br>{% endunless %}{% endfor %}  | {% if item.[tst].discussion %}<a href="{{ site.url }}{{ site.baseurl }}/assets/pdf/{{ tst | upcase }}/{{ item.[tst].discussion }}.pdf" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-file-pdf fa-2x"></i></a>{% endif %}     {% if item.[tst].rk %}{{ item.[tst].rk }}{% endif %}    |
{% endif %}{% endfor %}
{% unless forloop.last %} --- {% endunless %}
