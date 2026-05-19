document.addEventListener('DOMContentLoaded', function () {

var audioButtons = document.querySelectorAll('.audio-player-btn');
var currentAudio = null;
var currentButton = null;

audioButtons.forEach(function (btn) {
btn.addEventListener('click', function (e) {
e.preventDefault();

  var audioId = btn.getAttribute('data-audio-id');
  var audioElement = document.getElementById(audioId);

  if (!audioElement) {
    console.error('Audio element not found with id:', audioId);
    return;
  }

  if (currentAudio && currentAudio !== audioElement) {
    currentAudio.pause();
    currentAudio.currentTime = 0;

    if (currentButton) {
      resetAudioButton(currentButton);
    }
  }

  if (audioElement.paused) {

    audioElement.play().catch(function(error) {
      console.error('Error playing audio:', error);
    });

    updateAudioButton(btn, true);

    currentAudio = audioElement;
    currentButton = btn;

    audioElement.onended = function () {
      resetAudioButton(btn);
      currentAudio = null;
      currentButton = null;
    };

  } else {

    audioElement.pause();
    resetAudioButton(btn);

    currentAudio = null;
    currentButton = null;
  }
});

});

function updateAudioButton(btn, isPlaying) {
if (isPlaying) {
btn.innerHTML = '<i class="fa-solid fa-stop"></i>Stop';
btn.classList.add('playing');
}
}

function resetAudioButton(btn) {
btn.innerHTML = '<i class="fa-solid fa-play"></i>Play';
btn.classList.remove('playing');
}

});
