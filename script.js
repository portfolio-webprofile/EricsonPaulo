const audio = document.getElementById("bgMusic");
const volume = document.getElementById("volume");
const toggle = document.getElementById("musicToggle");

// AUDIO FILE
audio.src = "intracon_city2.mp3";
audio.loop = true;

// DEFAULT VOLUME
audio.volume = localStorage.getItem("volume") || 0.7;
volume.value = audio.volume;

// RESTORE STATE
if (localStorage.getItem("music") === "off") {
  toggle.textContent = "🔇";
} else {
  toggle.textContent = "🔊";
}

// 🔥 ONLY SAFE PLAY METHOD (BUTTON)
toggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play()
      .then(() => {
        localStorage.setItem("music", "on");
        toggle.textContent = "🔊";
      })
      .catch(err => {
        alert("Tap the Music button to allow sound");
        console.log(err);
      });
  } else {
    audio.pause();
    localStorage.setItem("music", "off");
    toggle.textContent = "🔇";
  }
});

// VOLUME
volume.addEventListener("input", () => {
  audio.volume = volume.value;
  localStorage.setItem("volume", volume.value);
});
