---
title: "Teaching"
layout: gridlay
sitemap: false
permalink: /teaching/
---

## Teaching

<div class="section-card">

<h3>Lecturer</h3>
<ul>
<li>Graduate Mathematics</li>
</ul>


<h3>Teaching Assistant</h3>


{% for entry in site.data.teachingTA %}
<p>
<span style="font-size: 1.15rem; font-weight. 500; color: var(--text-primary)">{{ entry.course }}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--text-muted)">{{ entry.location }} &nbsp;&bull;&nbsp; {{ entry.teacher }}</span>
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


<ul>
<li>Postgraduate Microeconomics</li>
<li>Graduate Game Theory</li>
<li>Undergraduate Game Theory</li>
<li>Undergraduate Microeconomics</li>
<li>Undergraduate Analysis & Linear Algebra</li>
<li>Undergraduate Statistics</li>
</ul>
-->

</div>
