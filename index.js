const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach((item) => {
    item.addEventListener('click', () => {
        // Redirect to the respective HTML pages
        const tech = item.getAttribute('data-tech');
        window.location.href = `${tech}.html`;
    });

    const startButton = item.querySelector('.start-button');
    item.addEventListener('mouseover', () => {
        startButton.style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
        startButton.style.display = 'none';
    });
});
