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
  if (video.muted) {
    video.muted = false;
    muteIcon.classList.remove("bi-volume-up-fill");
    muteIcon.classList.add("bi-volume-mute-fill");
  } else {
    video.muted = true;
    muteIcon.classList.remove("bi-volume-mute-fill");
    muteIcon.classList.add("bi-volume-up-fill");
  }
});

// ANIMAZIONE THUMBNAIL (che fa un po' schifo perchè troppo veloce e senza transizione)
// const thumbnails = document.querySelectorAll(".thumbnail");

// console.log(thumbnails);

// thumbnails.forEach((thumbnail) => {
//   thumbnail.addEventListener("mouseenter", () => {
//     thumbnail.style.transform = "scale(1.17)";
//   });

//   thumbnail.addEventListener("mouseleave", () => {
//     thumbnail.style.transform = "scale(1)";
//   });
// });

// CAROSELLO ORIZZONTALE
// const carousel = document.querySelectorAll(".carousel");

// console.log(carousel);
// let scrollPerClick;
// let scrollAmount = 0;

// function scrollLeft() {
//   carousel.scrollTo({
//     top: 0,
//     left: (scrollAmount -= scrollPerClick),
//     behavior: "smooth",
//   });

//   if (scrollAmount < 0) {
//     scrollAmount = 0;
//   }
// }

// function scrollRight() {
//   if (scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
//     carousel.scrollTo({
//       top: 0,
//       left: (scrollAmount += scrollPerClick),
//       behavior: "smooth",
//     });
//   }
// }
