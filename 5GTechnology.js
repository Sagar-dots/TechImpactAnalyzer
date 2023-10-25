const scenarios = [
    {
        question: "Scenario 1: Privacy and Data Security",
        description: "You are developing 5G technology that will significantly enhance data speed and connectivity. How do you ensure responsible innovation while addressing privacy and data security?",
        options: [
            {
                text: "Option 1: Implement strict privacy measures and encryption to protect user data, with transparent policies and collaboration with data security experts.",
                points: 5,
                impact: "Scenario 1 Option 1:Stringent privacy measures and encryption protect user data, ensuring responsible innovation and data security."
            },
            {
                text: "Option 2: Prioritize data speed and connectivity over privacy, collecting data without encryption, risking potential privacy breaches and public trust issues.",
                points: 3,
                impact: "Scenario 1 Option 2:Prioritizing data speed over privacy may lead to data security concerns and a lack of responsible innovation."
            },
            {
                text: "Option 3: Collect user data without any privacy measures, focusing solely on innovation but risking data breaches and ethical dilemmas.",
                points: 2,
                impact: "Scenario 1 Option 3:Lack of privacy measures poses ethical dilemmas and may hinder responsible innovation."
            }
        ]
    },
    {
        question: "Scenario 2: Public Health and Environmental Impact",
        description: "5G technology may have implications for public health and the environment. How do you ensure safety, sustainability, and inclusiveness?",
        options: [
            {
                text: "Option 1: Actively research and consider the potential health and environmental impact, collaborating with experts and involving diverse stakeholders.",
                points: 5,
                impact: "Scenario 2 Option 1:Research, expert collaboration, and diverse stakeholder involvement ensure safety, sustainability, and inclusiveness in 5G innovation."
            },
            {
                text: "Option 2: Prioritize rapid deployment of 5G technology without assessing its health and environmental effects, potentially causing public health and environmental concerns.",
                points: 3,
                impact: "Scenario 2 Option 2:Rapid deployment without assessment may lead to health and environmental concerns, affecting responsible innovation."
            },
            {
                text: "Option 3: Continue with the project without addressing health and environmental concerns, focusing on innovation but risking negative consequences.",
                points: 2,
                impact: "Scenario 2 Option 3:Innovation may thrive, but the project might be criticized for a lack of safety and sustainability."
            }
        ]
    },
    {
        question: "Scenario 3: Digital Inclusivity and Accessibility",
        description: "Your 5G project aims to provide high-speed internet access to underserved areas. How do you approach inclusivity and accessibility, while ensuring openness and transparency?",
        options: [
            {
                text: "Option 1: Collaborate with local communities, governments, and NGOs to ensure affordable and accessible 5G access, actively engaging with underserved populations.",
                points: 5,
                impact: "Scenario 3 Option 1:Collaboration, affordability, and engagement with underserved communities ensure inclusivity and accessibility in 5G innovation."
            },
            {
                text: "Option 2: Focus on profitability, providing 5G access to areas with higher economic potential, potentially excluding underserved populations.",
                points: 3,
                impact: "Scenario 3 Option 2:Profit-focused deployment may lead to exclusion and lack of inclusivity, affecting responsible innovation."
            },
            {
                text: "Option 3: Ignore inclusivity concerns, focusing solely on innovation and profitability, potentially facing criticism and ethical dilemmas.",
                points: 2,
                impact: "Scenario 3 Option 3:Lack of inclusivity measures poses ethical dilemmas and may hinder responsible innovation."
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
