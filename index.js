// EVENT LISTENER PER NAVBAR

window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");

  if (window.scrollY > 30) {
    // Cambia 50 con l'altezza desiderata per attivare lo scroll
    navbar.classList.add("bg-nero");
  } else {
    navbar.classList.remove("bg-nero");
  }
});

// FUNZIONE PER STAMPARE ANNO CORRENTE

const currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

// PER ATTIVARE E DISATTIVARE SUONO VIDEO
const video = document.querySelector("video");
const muteIcon = document.querySelector(".bi-volume-up-fill");
const muteButton = muteIcon.parentNode;

muteButton.addEventListener("click", () => {
  video.muted = false;
});

muteButton.addEventListener("click", () => {
  video.muted = false;
  muteIcon.classList.remove(".volume-up-fill");
  muteIcon.classList.add(".volume-mute-fill");
});
