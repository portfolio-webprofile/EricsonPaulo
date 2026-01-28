const audio = document.getElementById("bgMusic");
const loading = document.getElementById("loadingScreen");
const volume = document.getElementById("volume");
const toggle = document.getElementById("musicToggle");

// SET SINGLE MUSIC FILE
audio.src = "intracon_city2.mp3";

// LOAD SAVED SETTINGS
const savedVolume = localStorage.getItem("volume");
audio.volume = savedVolume !== null ? savedVolume : 0.5;
volume.value = audio.volume;

const musicSetting = localStorage.getItem("music"); // "on" or "off"
let musicEnabled = musicSetting !== "off";

// START MUSIC ON FIRST USER INTERACTION
function startMusic() {
  loading.style.display = "none";

  if (musicEnabled) {
    audio.play();
  }

  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

// VOLUME CONTROL
volume.addEventListener("input", () => {
  audio.volume = volume.value;
  localStorage.setItem("volume", volume.value);
});

// TOGGLE MUSIC ON / OFF
toggle.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    localStorage.setItem("music", "on");
    toggle.textContent = "🔊";
  } else {
    audio.pause();
    localStorage.setItem("music", "off");
    toggle.textContent = "🔇";
  }
});
