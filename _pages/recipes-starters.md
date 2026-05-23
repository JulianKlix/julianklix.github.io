---
title: "Recipes - Starters"
layout: gridlay
sitemap: true
permalink: /recipes/starters/
---


## Recipes

A collection of my favourite recipes, primarily available in German only.

<div class="chip-container" markdown="0">
<span class="chip chip-pressed">Starters</span>
<a href="{{ site.url }}{{ site.baseurl }}/recipes/sides" class="chip">Sides</a>
<a href="{{ site.url }}{{ site.baseurl }}/papers/ParasocialMarketing PDF.pdf" class="chip">Pasta & Rice</a>
<a href="{{ site.url }}{{ site.baseurl }}/papers/ParasocialMarketing PDF.pdf" class="chip">Meat</a>
<a href="{{ site.url }}{{ site.baseurl }}/papers/ParasocialMarketing PDF.pdf" class="chip">Deserts</a>
<a href="{{ site.url }}{{ site.baseurl }}/papers/ParasocialMarketing PDF.pdf" class="chip">Pastries</a>
</div>


<div class="gallery-square-grid" markdown="0">

{% for food in site.data.recipes.vorspeisen %}
<div class="gallery-square-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/recipes/{{ food.image }}" data-gallery-title="{{ food.name-de }}">
<img src="{{ site.url }}{{ site.baseurl }}/recipes/{{ food.image }}" class="gallery-square-thumb" alt="{{ food.name-de }}">
<div class="gallery-square-title">
  <div class="gallery-square-title-row">
    <span style="font-size: 1.1rem; font-weight. 600; color: var(--text-primary)">
      {{ food.name }}</span>
    <a href="{{ site.url }}{{ site.baseurl }}/recipes/{{ food.recipe }}" target="_blank" class="chip"><i class="fa-solid fa-download"></i></a>
  </div>
</div>
</div>
{% endfor %}

</div>

