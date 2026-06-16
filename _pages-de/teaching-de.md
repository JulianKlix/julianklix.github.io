---
title: "Lehre"
layout: gridlay
sitemap: true
permalink: /de/teaching/
---

## Lehre

<div class="section-card">

### <span style="color: var(--accent)">Vorlesung</span>



<p>
<span style="font-size: 1.15rem; font-weight. 500; color: var(--text-primary)">&nbsp;&nbsp;&nbsp;Mathematik für Master</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--text-muted)">Universität Mannheim &nbsp;&bull;&nbsp; Julian Klix</span>
</p>

<br>
### <span style="color: var(--accent)">Übungsleitung</span>



{% for entry in site.data.teachingTA-de %}
<p>
<span style="font-size: 1.15rem; font-weight. 500; color: var(--text-primary)">&nbsp;&nbsp;&nbsp;{{ entry.course }}</span><br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: var(--text-muted)">{{ entry.location }} &nbsp;&bull;&nbsp; {{ entry.teacher }}</span>
</p>
{% endfor %}

</div>
