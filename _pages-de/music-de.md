---
title: "Musik"
layout: gridlay
sitemap: true
permalink: /de/music/
---


## Musik

<div class="section-card">

<span style="font-size: 1.25rem; font-weight: 600; color: var(--text-primary)">PianoForte</span>
<span style="font-size: 1.25rem; font-weight: 400"> &nbsp;&bull;&nbsp; Julian Klix</span><br>
&nbsp;&nbsp;&nbsp;Klassische und zeitgenössische Klaviermusik<br>
{% for song in site.data.music_pianoForte %}
&nbsp;&nbsp;&nbsp;{{ song.title-de }} &nbsp;&bull;&nbsp; {{ song.composer }}<br>
&nbsp;&nbsp;&nbsp;
<a href="{{ site.url }}{{ site.baseurl }}/audio/pianoForte/{{ song.filename }}" target="_blank" class="chip"><i class="fa-solid fa-download"></i>&nbsp;&nbsp;Download</a>
<button class="audio-player-btn" data-audio-id="audio-{{ forloop.index }}">
  <i class="fa-solid fa-play"></i>Play
</button>  <audio id="audio-{{ forloop.index }}" src="{{ site.url }}{{ site.baseurl }}/audio/pianoForte/{{ song.filename }}"></audio>
{% endfor %}


</div>


