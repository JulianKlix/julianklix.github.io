---
title: "Teaching"
layout: gridlay
sitemap: false
permalink: /teaching/
---


## Research

<div class="section-card">

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
