const slides = document.querySelectorAll(".slide");
var counter = 0;
console.log(slides);
slides.forEach((slide, index) => {
  slide.style.top = `${index * 100}%`;
  slide.addEventListener("click", function () {
    slide.style.transform = `scale(0.8)`;
  });
});

const goPrev = () => {
  counter--;
  slideImage();
};

const goNext = () => {
  counter++;
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
};
