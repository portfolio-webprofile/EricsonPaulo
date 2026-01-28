const loading = document.getElementById("loadingScreen");

// 🔥 FORCE REMOVE LOADING SCREEN
window.addEventListener("load", () => {
  setTimeout(() => {
    if (loading) {
      loading.style.display = "none";
    }
  }, 800); // GTA-style delay
});
