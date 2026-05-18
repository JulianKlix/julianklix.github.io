---
title: "Über Mich"
layout: gridlay
sitemap: true
permalink: /de/about/
---

## Über Mich

<div class="section-card">
<div class="pi-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ site.photo }}" class="pi-photo" alt="{{ site.name }}" loading="lazy">
<div>
<h3 class="pi-name">{{ site.full-name }}</h3>
<p style="font-style: italic; color: var(--text-secondary);">{{ site.title-de }}, {{ site.institution-de }}, {{ site.department-de }}</p>
<div class="pi-links">
{% if site.links.personal_website and site.links.personal_website != "" %}<a href="{{ site.links.personal_website }}" target="_blank" class="icon-link" title="Personal Website"><i class="fa-solid fa-globe"></i></a>{% endif %}
{% if site.email %}<a href="mailto:{{ site.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if site.links.cv and site.links.cv != "" %}<a href="{{ site.url }}{{ site.baseurl }}/{{ site.links.cv }}" target="_blank" class="icon-link" title="CV"><i class="ai ai-cv"></i></a>{% endif %}
{% if site.links.google_scholar and site.links.google_scholar != "" %}<a href="{{ site.links.google_scholar }}" target="_blank" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if site.links.github and site.links.github != "" %}<a href="{{ site.links.github }}" target="_blank" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
{% if site.links.researchgate and site.links.researchgate != "" %}<a href="{{ site.links.researchgate }}" target="_blank" class="icon-link" title="ResearchGate"><i class="ai ai-researchgate"></i></a>{% endif %}
{% if site.links.orcid and site.links.orcid != "" %}<a href="{{ site.links.orcid }}" target="_blank" class="icon-link" title="ORCID"><i class="ai ai-orcid"></i></a>{% endif %}
{% if site.links.twitter and site.links.twitter != "" %}<a href="{{ site.links.twitter }}" target="_blank" class="icon-link" title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>{% endif %}
{% if site.links.linkedin and site.links.linkedin != "" %}<a href="{{ site.links.linkedin }}" target="_blank" class="icon-link" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>{% endif %}
</div>


{% if site.data.bio %}
<table class="bio-table">
  {% for entry in site.data.bio-de %}
  <tr>
    <td class="bio-date">{{ entry.date }}</td>
    <td class="bio-degree">{{ entry.degree }}</td>
    <td class="bio-location">{{ entry.location }}</td>
  </tr>
  {% endfor %}
</table>
{% endif %}


</div>
</div>
</div>



{% if site.data.people %}
<div class="section-card">
<h3>Supervisor und Mentoren</h3>
<ul>
{% for person in site.data.people %}
<li>{{ person.name }}, {{ person.location-de }} ({{ person.role }})</li>
{% endfor %}
</ul>
</div>
{% endif %}




{% if site.data.funders %}
<div class="section-card">
<h3>Zugehörigkeit</h3>
<div class="sponsor-logos" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: var(--space-6);">
{% for funder in site.data.funders %}
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ funder.image }}" alt="Funder logo" style="max-height: 80px; max-width: 200px; border-radius: 0;" loading="lazy">
{% endfor %}
</div>
</div>
{% endif %}