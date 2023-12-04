//Menu hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})




// CARRUSEL

const videos = document.querySelectorAll('video');

function repeatVideo(video) {
  video.currentTime = 0;
  video.play();
}

videos.forEach(video => {
  video.addEventListener('ended', function() {
    repeatVideo(this);
  });
});

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;
let autoSlideInterval;

function showSlide(index) {
  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 13000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}


showSlide(currentSlide);
startAutoSlide();


document.querySelector('.carousel').addEventListener('mouseenter', stopAutoSlide);


document.querySelector('.carousel').addEventListener('mouseleave', startAutoSlide);


//FOOTER DESPLAZAMIENTO

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
