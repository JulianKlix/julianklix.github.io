---
title: "Teaching"
layout: gridlay
sitemap: true
permalink: /teaching/
---

## Teaching

<div class="section-card">

### <span style="color: var(--accent)">Lecturer</span>

<p>
<span style="font-size: 1.15rem; font-weight. 500; color: var(--text-primary)">&nbsp;&nbsp;&nbsp;Graduate Mathematics</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--text-muted)">University of Mannheim &nbsp;&bull;&nbsp; Julian Klix</span>
</p>


<br>
### <span style="color: var(--accent)">Teaching Assistant</span>

{% for entry in site.data.teachingTA %}
<p>
<span style="font-size: 1.15rem; font-weight. 500; color: var(--text-primary)">&nbsp;&nbsp;&nbsp;{{ entry.course }}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--text-muted)">{{ entry.location }} &nbsp;&bull;&nbsp; {{ entry.teacher }}</span>
</p>

{% endfor %}

<!--
<table class="bio-table">
  {% for entry in site.data.teachingTA %}
  <tr>
    <td class="bio-date">{{ entry.course }}</td>
    <td class="bio-degree">{{ entry.location }}</td>
    <td class="bio-location">{{ entry.teacher }}</td>
  </tr>
  {% endfor %}
</table>

-->

</div>
