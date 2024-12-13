document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu__btn');
    const menu = document.getElementById('mainNav');
    const closeButton = document.querySelector('.menu__btn__cross');

    menuButton.addEventListener('click', function () {
        menu.style.display = 'block';
        menu.setAttribute('aria-hidden', 'false');
    });

    closeButton.addEventListener('click', function () {
        menu.style.display = 'none';
        menu.setAttribute('aria-hidden', 'true');
    });
});