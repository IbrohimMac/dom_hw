const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const modal = document.querySelector(".modal");

btnOpen.addEventListener("click", function (e) {
  modal.classList.add("open");
});

btnClose.addEventListener("click", function (e) {
  modal.classList.remove("open");
});

const loginForm = document.getElementById("login-form");

const toggleForm = document.getElementById("toggleForm");

toggleForm.addEventListener("click", function (e) {
  loginForm.classList.toggle("open");
});

/////////// Carousel //////

const slides = document.getElementsByClassName("carousel-item");
const nextButton = document.getElementById("carousel-button-next");
const prevButton = document.getElementById("carousel-button-prev");
const dots = document.getElementsByClassName("dot");
let position = 0;
const numberOfSlides = slides.length;

function hideAllSlides() {
  for (const slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}

const handleMoveToNextSlide = function (e) {
  hideAllSlides();
  if (position === numberOfSlides - 1) {
    position = 0; // go back to first slide
  } else {
    position++;
  }
  slides[position].classList.add("carousel-item-visible");
  dots[position].classList.add("selected-dot");
  dots[position].checked = true;
};

const handleMoveToPrevSlide = function (e) {
  hideAllSlides();
  if (position === 0) {
    position = numberOfSlides - 1; // move to the last slide
  } else {
    position--;
  }
  slides[position].classList.add("carousel-item-visible");
  dots[position].classList.add("selected-dot");
  dots[position].checked = true;
};

nextButton.addEventListener("click", handleMoveToNextSlide);
prevButton.addEventListener("click", handleMoveToPrevSlide);

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function () {
    hideAllSlides();
    slides[i].classList.add("carousel-item-visible");
  });
}
