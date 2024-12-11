const carouselContainer = document.querySelectorAll('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelectorAll('.button__prev');
const nextButton = document.querySelectorAll('.button__next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});
