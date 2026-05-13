---
title: "Research"
layout: gridlay
sitemap: false
permalink: /publications/
---

## Research


{% if site.data.research %}
<div class="research-list">

  {% for pub in site.data.research %}
  <div class="research-entry">

    <div class="research-title-line">
      <span class="research-title">
        {{ pub.title }}
      </span>

      {% if pub.status and pub.status != "" %}
      <span class="research-status">
        ({{ pub.status }})
      </span>
      {% endif %}
    </div>

    <div class="research-coauthors">
      joint with {{ pub.coauthors }}
    </div>

    {% if pub.abstract and pub.abstract != "" %}
    <div class="research-abstract">
      {{ pub.abstract }}
    </div>
    {% endif %}

  </div>
  {% endfor %}

</div>
{% endif %}















<!-- 
<input type="text" class="pub-search" id="pubSearch" placeholder="Filter by title, author, or year...">

<div class="section-card" id="pubList">
<h3>Preprints</h3>

{% bibliography --query @unpublished %}

<h3>Refereed Journal Articles</h3>

{% bibliography --query @article %}

<h3>Refereed Conference Proceedings</h3>

{% bibliography --query @inproceedings %}
</div>

-->

