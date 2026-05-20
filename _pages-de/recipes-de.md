---
title: "Rezepte"
layout: gridlay
sitemap: true
permalink: /de/recipes/
---


## Rezepte

Eine Auswahl meiner Lieblingsrezepte.

### Vorspeisen & Beilagen

<div class="gallery-square-grid" markdown="0">

{% for food in site.data.recipes.vorspeisen %}
<div class="gallery-square-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/{{ food.image }}" data-gallery-title="{{ food.name-de }}">
<img src="{{ site.url }}{{ site.baseurl }}//{{ food.image }}" class="gallery-square-thumb" alt="{{ food.name-de }}">

<div class="gallery-square-title">
  <div class="gallery-square-title-row">
    <span style="font-size: 1.1rem; font-weight. 600; color: var(--text-primary)">
      {{ food.name-de }}</span>
    <a href="{{ site.url }}{{ site.baseurl }}/{{ food.recipe }}" target="_blank" class="chip"><i class="fa-solid fa-download"></i></a>
  </div>
</div>
</div>
{% endfor %}


</div>



### Pasta & Reis

<div class="gallery-square-grid" markdown="0">

<div class="gallery-square-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/art/OliverByrneChapter1.png" data-gallery-title="Chapter 1">
<img src="{{ site.url }}{{ site.baseurl }}/art/OliverByrneChapter1.png" class="gallery-square-thumb" alt="Chapter 1">

<div class="gallery-square-title">
  <div class="gallery-square-title-row">
    <span style="font-size: 1.1rem; font-weight. 600; color: var(--text-primary)">&nbsp;
      Geometry</span>
    <a href="{{ site.url }}{{ site.baseurl }}/art/OliverByrneChapter1.png" target="_blank" class="chip"><i class="fa-solid fa-download"></i>&nbsp;&nbsp;Download</a>
  </div>
</div>
</div>

<div class="gallery-square-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/art/OliverByrneChapter6.png" data-gallery-title="Chapter 6">
<img src="{{ site.url }}{{ site.baseurl }}/art/OliverByrneChapter6.png" class="gallery-square-thumb" alt="Chapter 6">
<div class="gallery-square-title">
  <div class="gallery-square-title-row">
    <span style="font-size: 1.1rem; font-weight. 600; color: var(--text-primary)">&nbsp;
      Similarity</span>
    <a href="{{ site.url }}{{ site.baseurl }}/art/OliverByrneChapter6.png" target="_blank" class="chip"><i class="fa-solid fa-download"></i>&nbsp;&nbsp;Download</a>
  </div>
</div>
</div>

</div>


