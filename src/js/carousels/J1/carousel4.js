document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.button__prev__4');
    const nextButton = document.querySelector('.button__next__4');
    const carousel = document.querySelector('.carousel__4');
    const images = document.querySelectorAll('.carousel__img__4');
    let currentIndex = 0;

    // Afficher l'image actuelle
    function showImage(index) {
        // Masquer toutes les images
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    // Afficher l'image suivante
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    // Afficher l'image précédente
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    // Initialiser le carrousel
    showImage(currentIndex);

    // Écouter les événements de clic sur les boutons
    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);
});
