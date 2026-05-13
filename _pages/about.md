---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About

<div class="section-card">
<div class="pi-card">
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ site.photo }}" class="pi-photo" alt="{{ site.name }}" loading="lazy">
<div>
<h3 class="pi-name">{{ site.name }}</h3>
<p style="font-style: italic; color: var(--text-secondary);">{{ site.title }}, {{ site.institution }}, {{ site.department }}</p>
<div class="pi-links">
{% if site.links.personal_website and site.links.personal_website != "" %}<a href="{{ site.links.personal_website }}" class="icon-link" title="Personal Website"><i class="fa-solid fa-globe"></i></a>{% endif %}
{% if site.email %}<a href="mailto:{{ site.email }}" class="icon-link" title="Email"><i class="fa-solid fa-envelope"></i></a>{% endif %}
{% if site.links.cv and site.links.cv != "" %}<a href="{{ site.url }}{{ site.baseurl }}/{{ site.links.cv }}" class="icon-link" title="CV"><i class="ai ai-cv"></i></a>{% endif %}
{% if site.links.google_scholar and site.links.google_scholar != "" %}<a href="{{ site.links.google_scholar }}" class="icon-link" title="Google Scholar"><i class="ai ai-google-scholar"></i></a>{% endif %}
{% if site.links.github and site.links.github != "" %}<a href="{{ site.links.github }}" class="icon-link" title="GitHub"><i class="fa-brands fa-github"></i></a>{% endif %}
{% if site.links.researchgate and site.links.researchgate != "" %}<a href="{{ site.links.researchgate }}" class="icon-link" title="ResearchGate"><i class="ai ai-researchgate"></i></a>{% endif %}
{% if site.links.orcid and site.links.orcid != "" %}<a href="{{ site.links.orcid }}" class="icon-link" title="ORCID"><i class="ai ai-orcid"></i></a>{% endif %}
{% if site.links.twitter and site.links.twitter != "" %}<a href="{{ site.links.twitter }}" class="icon-link" title="Twitter"><i class="fa-brands fa-x-twitter"></i></a>{% endif %}
{% if site.links.linkedin and site.links.linkedin != "" %}<a href="{{ site.links.linkedin }}" class="icon-link" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>{% endif %}
</div>


{% if site.data.bio %}
<table class="bio-table">
  {% for entry in site.data.bio %}
  <tr>
    <td class="bio-date">{{ entry.date }}</td>
    <td class="bio-degree">{{ entry.degree }}</td>
    <td class="bio-location">{{ entry.location }}</td>
  </tr>
  {% endfor %}
</table>
{% endif %}



<!-- 
{% if site.data.bio %}
<table class="bio-table" style="margin-top: var(--space-4); width: 100%; border-collapse: collapse;">
  {% for entry in site.data.bio %}
  <tr>
    <td style="padding: 4px 12px 4px 0; white-space: nowrap; vertical-align: top; color: {{ site.accent_color }};">
      {{ entry.date }}
    </td>
    <td style="padding: 4px 12px; vertical-align: top;">
      {{ entry.degree }}
    </td>
    <td style="padding: 4px 40px 4px 12px; text-align: right; color: var(--text-muted); vertical-align: top;">
      {{ entry.location }}
    </td>
  </tr>
  {% endfor %}
</table>
{% endif %}
-->



<!-- 
{% if site.data.pi[0].education %}
<ul style="margin-top: var(--space-4);">
{% for education in site.data.pi[0].education %}
<li>{{ education | replace: "-","&#8211;" }}</li>
{% endfor %}
</ul>
{% endif %}
-->

</div>
</div>
</div>

<!--
{% if site.data.grants %}
<div class="section-card">
<h3>Grants</h3>
<ul>
{% for grant in site.data.grants %}
<li>{{ grant.name }}</li>
{% endfor %}
</ul>
</div>
{% endif %}


{% if site.data.awards %}
<div class="section-card">
<h3>Awards</h3>
<ul>
{% for award in site.data.awards %}
<li>{{ award.name | replace: "-","&#8211;" }}</li>
{% endfor %}
</ul>
</div>
{% endif %}
-->

{% if site.data.people %}
<div class="section-card">
<h3>Supervisors and Mentors</h3>
<ul>
{% for person in site.data.people %}
<li>{{ person.name }}, {{ person.location }} ({{ person.role }})</li>
{% endfor %}
</ul>
</div>
{% endif %}

<!--
{% if site.data.funders %}
<div class="section-card">
<h4>Affiliations</h4>
<div class="sponsor-logos" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: var(--space-6);">
{% for funder in site.data.funders %}
<a href="{{ funder.url }}" target="_blank"><img src="{{ site.url }}{{ site.baseurl }}/images/{{ funder.image }}" alt="Funder logo" style="max-height: 80px; max-width: 200px; border-radius: 0;" loading="lazy"></a>
{% endfor %}
</div>
</div>
{% endif %}
-->



{% if site.data.funders %}
<div class="section-card">
<h3>Affiliations</h3>
<div class="sponsor-logos" style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: var(--space-6);">
{% for funder in site.data.funders %}
<img src="{{ site.url }}{{ site.baseurl }}/images/{{ funder.image }}" alt="Funder logo" style="max-height: 80px; max-width: 200px; border-radius: 0;" loading="lazy">
{% endfor %}
</div>
</div>
{% endif %}