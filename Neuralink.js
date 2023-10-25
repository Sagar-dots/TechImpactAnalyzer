// JavaScript logic for Neuralink scenario
const scenarios = [
    {
        question: "Scenario 1: User Data Privacy",
        description: "Neuralink is preparing to release a new brain-computer interface. How do you ensure user data privacy?",
        options: [
            {
                text: "Option 1: Implement strong encryption and strict data access controls",
                points: 5,
                impact: "Strong encryption and strict data access controls ensure user data privacy and trust."
            },
            {
                text: "Option 2: Collect minimal data but without encryption",
                points: 2,
                impact: "Minimal data collection without encryption raises concerns about user data security."
            },
            {
                text: "Option 3: No data collection and no privacy measures",
                points: 1,
                impact: "Lack of data collection and privacy measures negatively impacts user experience."
            }
        ]
    },
    {
        question: "Scenario 2: Collaborative Research",
        description: "You have the choice to partner with leading neuroscience institutions for collaborative research. How do you proceed?",
        options: [
            {
                text: "Option 1: Partner with prestigious institutions for advanced research collaboration.",
                points: 5,
                impact: "Collaboration with prestigious institutions accelerates research and development."
            },
            {
                text: "Option 2: Opt for in-house research to maintain full control.",
                points: 3,
                impact: "In-house research provides control but may limit external expertise."
            },
            {
                text: "Option 3: Undecided and require more information.",
                points: 2,
                impact: "Undecided choices may lead to delays and missed opportunities."
            }
        ]
    },
    {
        question: "Scenario 3: Accessibility and Pricing",
        description: "You plan to make Neuralink accessible to a broad audience. How do you address affordability?",
        options: [
            {
                text: "Option 1: Offer affordable pricing and subsidies to reach a wider population.",
                points: 5,
                impact: "Affordable pricing and subsidies enhance accessibility to a diverse audience."
            },
            {
                text: "Option 2: Set a premium price for exclusivity.",
                points: 2,
                impact: "A premium price may limit accessibility but ensure exclusivity."
            },
            {
                text: "Option 3: Not focused on affordability, prioritize innovation.",
                points: 1,
                impact: "Lack of affordability focus may limit market reach but spur innovation."
            }
        ]
    }
];

// Rest of the code remains the same.


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
