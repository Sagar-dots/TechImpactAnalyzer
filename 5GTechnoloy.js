

const questionsContainer = document.getElementById("questions-container");
const impactContainer = document.getElementById("impact-container");
const showScoreButton = document.getElementById("show-score-button");
const goBackButton = document.getElementById("go-back-button");
const totalPointsContainer = document.getElementById("total-points");

let userPoints = 0;
let questionIndex = 0;

function renderQuestion() {
    if (questionIndex < scenarios.length) {
        const currentScenario = scenarios[questionIndex];
        const questionElement = document.createElement("div");
        questionElement.classList.add("scenario");
        questionElement.innerHTML = `
            <h2>${currentScenario.question}</h2>
            <p>${currentScenario.description}</p>
        `;
        currentScenario.options.forEach((option, index) => {
            const optionButton = document.createElement("button");
            optionButton.textContent = option.text;
            optionButton.addEventListener("click", () => handleOptionClick(option, index));
            questionElement.appendChild(optionButton);
        });
        questionsContainer.appendChild(questionElement);
    } else {
        showScoreButton.style.display = "block";
    }
}

function handleOptionClick(option, index) {
    userPoints += option.points;
    showImpact(option.impact);
    questionIndex++;

    if (questionIndex < scenarios.length) {
        renderQuestion();
    }
}

function showImpact(impactText) {
    const impactElement = document.createElement("div");
    impactElement.classList.add("impact");
    impactElement.textContent = impactText;
    impactContainer.appendChild(impactElement);
}

function showScore() {
    totalPointsContainer.textContent = `Total Points: ${userPoints}`;
    totalPointsContainer.style.display = "block";
    showScoreButton.style.display = "none";
    goBackButton.style.display = "block";
}

function goBack() {
    window.location.href = "index.html"; // Replace with the URL of your main page
}

showScoreButton.addEventListener("click", showScore);
goBackButton.addEventListener("click", goBack);

renderQuestion();
