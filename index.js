// JavaScript code for handling the start game logic
const carouselItems = document.querySelectorAll('.carousel-item');
const startButton = document.getElementById('start-game');

let selectedTechnology = null;

// Function to update the selected technology
function selectTechnology(tech) {
    selectedTechnology = tech;
    startButton.style.display = 'block';
    startButton.textContent = `Start Game for ${tech}`;
}

// Event listener for carousel item selection
carouselItems.forEach((item) => {
    item.addEventListener('click', () => {
        carouselItems.forEach((el) => el.classList.remove('active'));
        item.classList.add('active');
        selectTechnology(item.getAttribute('data-tech'));
    });
});

// Event listener for the start game button
startButton.addEventListener('click', () => {
    // Redirect to the game page with the selected technology
    if (selectedTechnology) {
        window.location.href = `game.html?tech=${selectedTechnology}`;
    }
});
