---
title: "Rezepte - Vorspeisen"
layout: gridlay
sitemap: true
permalink: /de/recipes/starters/
---


## Rezepte

Eine Auswahl meiner Lieblingsrezepte.

<div class="chip-container" markdown="0">
<span class="chip chip-pressed">Vorspeisen</span>
<a href="{{ site.url }}{{ site.baseurl }}/de/recipes/sides" class="chip">Beilagen</a>
<a href="{{ site.url }}{{ site.baseurl }}/de/recipes/pasta" class="chip">Pasta & Reis</a>
<a href="{{ site.url }}{{ site.baseurl }}/de/recipes/meat" class="chip">Fleisch</a>
<a href="{{ site.url }}{{ site.baseurl }}/de/recipes/deserts" class="chip">Nachtische</a>
<a href="{{ site.url }}{{ site.baseurl }}/de/recipes/pastries" class="chip">Gebäck</a>
</div>



<div class="gallery-square-grid" markdown="0">

{% for food in site.data.recipes.vorspeisen %}
<div class="gallery-square-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/recipes/{{ food.image }}" data-gallery-title="{{ food.name-de }}">
<img src="{{ site.url }}{{ site.baseurl }}/recipes/{{ food.image }}" class="gallery-square-thumb" alt="{{ food.name-de }}">
<div class="gallery-square-title">
  <div class="gallery-square-title-row">
    <span style="font-size: 1.1rem; font-weight. 600; color: var(--text-primary)">
      {{ food.name-de }}</span>
    <a href="{{ site.url }}{{ site.baseurl }}/recipes/{{ food.recipe }}" target="_blank" class="chip"><i class="fa-solid fa-download"></i></a>
  </div>
</div>
</div>
{% endfor %}

</div>

