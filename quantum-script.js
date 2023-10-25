const scenarios = [
    {
        question: "Scenario 1: Secure Communications",
        description: "You are working on implementing quantum computing to enhance secure communications. Quantum encryption has the potential to revolutionize data security. What approach will you take?",
        options: [
            {
                text: "Option 1: Focus on quantum encryption development.",
                points: 5,
                impact: "Focusing on quantum encryption development strengthens data security."
            },
            {
                text: "Option 2: Collaborate with experts to refine the encryption technology.",
                points: 3,
                impact: "Collaboration with experts accelerates encryption technology refinement."
            },
            {
                text: "Option 3: Prioritize testing quantum communication networks.",
                points: 2,
                impact: "Prioritizing testing helps in identifying network vulnerabilities."
            }
        ]
    },
    {
        question: "Scenario 2: Quantum Computing Ethics",
        description: "You are responsible for addressing ethical considerations related to quantum computing. Ethical concerns include potential misuse and consequences of quantum computing. What will you do?",
        options: [
            {
                text: "Option 1: Establish ethical guidelines and policies.",
                points: 5,
                impact: "Establishing guidelines and policies ensures responsible quantum computing."
            },
            {
                text: "Option 2: Collaborate with ethicists and industry leaders to set ethical standards.",
                points: 4,
                impact: "Collaboration with experts strengthens ethical standards."
            },
            {
                text: "Option 3: Conduct public awareness campaigns about quantum ethics.",
                points: 3,
                impact: "Public awareness campaigns promote responsible quantum technology usage."
            }
        ]
    },
    {
        question: "Scenario 3: Quantum Computing Collaboration",
        description: "You have the opportunity to partner with quantum computing experts from around the world. Collaboration can accelerate advancements but may also involve complex negotiations. What's your decision?",
        options: [
            {
                text: "Option 1: Collaborate with experts to drive quantum research and development.",
                points: 5,
                impact: "Collaboration accelerates research and development."
            },
            {
                text: "Option 2: Form strategic alliances for specific projects.",
                points: 4,
                impact: "Strategic alliances allow for project-specific expertise."
            },
            {
                text: "Option 3: Continue with in-house development and research.",
                points: 3,
                impact: "In-house development maintains full control but may limit resources."
            }
        ]
    }
];

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
