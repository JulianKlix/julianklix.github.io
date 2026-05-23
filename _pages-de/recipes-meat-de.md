---
title: "Rezepte - Fleisch & Fisch"
layout: gridlay
sitemap: true
permalink: /recipes/de/meat/
---


## Rezepte

Eine Auswahl meiner Lieblingsrezepte.

<div class="chip-container" markdown="0">
<a href="{{ site.url }}{{ site.baseurl }}/recipes/de/starters" class="chip">Vorspeisen</a>
<a href="{{ site.url }}{{ site.baseurl }}/recipes/de/sides" class="chip">Beilagen</a>
<a href="{{ site.url }}{{ site.baseurl }}/recipes/de/pasta" class="chip">Pasta & Reis</a>
<span class="chip chip-pressed">Fleisch</span>
<a href="{{ site.url }}{{ site.baseurl }}/recipes/de/deserts" class="chip">Nachtische</a>
<a href="{{ site.url }}{{ site.baseurl }}/recipes/de/pastries" class="chip">Gebäck</a>
</div>



<div class="gallery-square-grid" markdown="0">

{% for food in site.data.recipes.fleischfisch %}
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

