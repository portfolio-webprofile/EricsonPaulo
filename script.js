const audio = document.getElementById("bgMusic");
const loading = document.getElementById("loadingScreen");
const volume = document.getElementById("volume");
const toggle = document.getElementById("musicToggle");

// SET MUSIC PER PAGE
audio.src = document.body.dataset.music;

// LOAD SAVED SETTINGS
audio.volume = localStorage.getItem("volume") || 0.5;
volume.value = audio.volume;

let musicEnabled = localStorage.getItem("music") !== "off";

// START MUSIC ON FIRST TAP
function startMusic(){
  loading.style.display = "none";

  if(musicEnabled){
    audio.play();
  }

  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

// VOLUME
volume.addEventListener("input", ()=>{
  audio.volume = volume.value;
  localStorage.setItem("volume", volume.value);
});

// TOGGLE MUSIC
toggle.addEventListener("click", ()=>{
  if(audio.paused){
    audio.play();
    localStorage.setItem("music","on");
    toggle.textContent="🔊";
  }else{
    audio.pause();
    localStorage.setItem("music","off");
    toggle.textContent="🔇";
  }
});