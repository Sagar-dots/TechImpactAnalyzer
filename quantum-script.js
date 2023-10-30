const scenarios = [
    {
        question: "Scenario 1: Quantum Data Security",
        description: "You are at the forefront of quantum computing for enhancing data security. Quantum encryption has the potential to revolutionize secure communications. How will you ensure responsible innovation and gender equality?",
        options: [
            {
                text: "Option 1: Focus on quantum encryption development with a diverse research team and ethical guidelines.",
                points: 5,
                impact: "Scenario 1, Option 1: Focusing on quantum encryption development with diversity in the research team and ethical guidelines ensures data security and gender equality."
            },
            {
                text: "Option 2: Collaborate with experts to refine encryption technology, integrating gender dimensions into research and innovation outcomes.",
                points: 4,
                impact: "Scenario 1, Option 2: Collaboration with experts and gender-inclusive research promotes responsible quantum encryption and gender equality."
            },
            {
                text: "Option 3: Prioritize testing quantum communication networks while promoting public awareness campaigns and involving diverse stakeholders.",
                points: 3,
                impact: "Scenario 1, Option 3: Prioritizing testing helps identify vulnerabilities and engages diverse stakeholders, raising awareness of gender equality."
            }
        ]
    },
    {
        question: "Scenario 2: Quantum Computing Ethics",
        description: "You are responsible for addressing ethical considerations related to quantum computing. Ethical concerns encompass potential misuse and consequences of quantum computing. What actions will you take?",
        options: [
            {
                text: "Option 1: Establish stringent ethical guidelines and policies with a focus on gender equality in project participation.",
                points: 5,
                impact: "Scenario 2, Option 1: Establishing stringent ethical guidelines with gender equality ensures responsible quantum computing and ethical standards."
            },
            {
                text: "Option 2: Collaborate with ethicists, industry leaders, and gender advocacy groups to set comprehensive ethical standards for quantum computing.",
                points: 4,
                impact: "Scenario 2, Option 2: Collaboration with experts and gender advocacy groups strengthens ethical standards, promoting responsible quantum technology and gender equality."
            },
            {
                text: "Option 3: Conduct extensive public awareness campaigns about quantum ethics, actively engaging diverse stakeholders, including the public.",
                points: 3,
                impact: "Scenario 2, Option 3: Public awareness campaigns raise awareness of ethical use and engage diverse stakeholders, promoting responsible quantum technology and gender equality."
            }
        ]
    },
    {
        question: "Scenario 3: Quantum Computing Collaboration",
        description: "You have the opportunity to collaborate with quantum computing experts from around the world. Collaboration can accelerate advancements but may involve complex negotiations. How will you approach collaboration while ensuring inclusiveness?",
        options: [
            {
                text: "Option 1: Collaborate with global experts to drive quantum research and development, with a commitment to diversity in project participation.",
                points: 5,
                impact: "Scenario 3, Option 1: Global collaboration accelerates research with a commitment to diversity, ensuring inclusiveness and innovation."
            },
            {
                text: "Option 2: Form strategic alliances for specific projects, actively engaging diverse stakeholders, including underrepresented groups.",
                points: 4,
                impact: "Scenario 3, Option 2: Strategic alliances for specific projects with diverse stakeholder engagement ensure inclusiveness and project-specific expertise."
            },
            {
                text: "Option 3: Continue with in-house development and research, maintaining control but without external insights.",
                points: 3,
                impact: "Scenario 3, Option 3: In-house development maintains control but may limit external expertise and inclusiveness."
            }
        ]
    }
    // Add more scenarios as needed
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
