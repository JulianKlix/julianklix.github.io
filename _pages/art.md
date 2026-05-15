---
title: "Art"
layout: gridlay
sitemap: false
permalink: /art/
---

## Art

<div class="gallery-grid" markdown="0">

<div class="gallery-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/art/Rom.png" data-gallery-title="Rome">
<img src="{{ site.url }}{{ site.baseurl }}/art/Rom.png" class="gallery-thumb" alt="Rome">
<div class="gallery-title">Rome</div>
</div>

<div class="gallery-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/art/Barcelona.png" data-gallery-title="Image 2">
<img src="{{ site.url }}{{ site.baseurl }}/art/Barcelona.png" class="gallery-thumb" alt="Barcelona">
<div class="gallery-title">Barcelona</div>
</div>

<div class="gallery-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/art/Paris.png" data-gallery-title="Paris">
<img src="{{ site.url }}{{ site.baseurl }}/art/Paris.png" class="gallery-thumb" alt="Paris">
<div class="gallery-title">Paris</div>
</div>

<div class="gallery-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/art/Mannheim.png" data-gallery-title="Image 6">
<img src="{{ site.url }}{{ site.baseurl }}/art/Mannheim.png" class="gallery-thumb" alt="Mannheim">
<div class="gallery-title">Mannheim</div>
</div>

<div class="gallery-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/art/Frankfurt.png" data-gallery-title="Image 5">
<img src="{{ site.url }}{{ site.baseurl }}/art/Frankfurt.png" class="gallery-thumb" alt="Frankfurt">
<div class="gallery-title">Frankfurt</div>
</div>

<div class="gallery-item" data-gallery-image="{{ site.url }}{{ site.baseurl }}/art/New York.png" data-gallery-title="Image 4">
<img src="{{ site.url }}{{ site.baseurl }}/art/New York.png" class="gallery-thumb" alt="New York">
<div class="gallery-title">New York</div>
</div>


</div>

<!-- Lightbox Modal -->
<div class="gallery-lightbox" id="galleryLightbox" markdown="0">
<button class="lightbox-close" aria-label="Close gallery">
<i class="fa-solid fa-xmark"></i>
</button>
<div class="lightbox-content">
<img id="lightboxImage" src="" alt="">
<div class="lightbox-title" id="lightboxTitle"></div>
</div>
</div>

















<!-- To Be Added to site.js

<script>
document.addEventListener('DOMContentLoaded', () => {

  const lightbox = document.getElementById('galleryLightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const closeButton = document.getElementById('lightboxClose');

  const galleryItems = document.querySelectorAll('.gallery-item');

  galleryItems.forEach(item => {

    item.addEventListener('click', () => {

      const image = item.dataset.galleryImage;
      const title = item.dataset.galleryTitle;

      lightboxImage.src = image;
      lightboxTitle.textContent = title;

      lightbox.classList.add('open');
    });

  });

  closeButton.addEventListener('click', () => {
    lightbox.classList.remove('open');
  });

  lightbox.addEventListener('click', (e) => {

    // close if clicking outside image
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
    }

  });

});
</script>

-->



<!-- Lightbox alternative from ChatGPT


<div class="gallery-lightbox" id="galleryLightbox">

  <button class="lightbox-close" id="lightboxClose">
    ×
  </button>

  <div class="lightbox-content">
    <img id="lightboxImage" src="" alt="">
    <div class="lightbox-title" id="lightboxTitle"></div>
  </div>

</div>

-->