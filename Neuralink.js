// JavaScript logic for Neuralink scenario
// JavaScript logic for Neuralink scenario
const scenarios = [
    {
        question: "Scenario 1: User Data Privacy",
        description: " Imagine that you are a influential part of Neuralink Project's Developement. Neuralink is preparing to release a new brain-computer interface. How do you think you can ensure user data privacy while adhering to responsible innovation KPIs?",
        options: [
            {
                text: "Option 1: Implement strong encryption and strict data access controls, focusing on gender equality in project participation.",
                points: 5,
                impact: "Scenario 1, Option 1: I would impose strong encryption and strict data access controls ensure user data privacy while promoting gender equality in research and management."
            },
            {
                text: "Option 2: Collect minimal data but without encryption, actively integrating gender dimensions in research and innovation outcomes.",
                points: 3,
                impact: "Scenario 1 Option 2: I would collect minimal data  without encryption combined with the active integration of gender dimensions, promoting ethical innovation."
            },
            {
                text: "Option 3:  I think no data collection and no privacy measures is good enough for now.",
                points: 2,
                impact: "Scenario 1 Option 3:Lack of data collection and privacy measures negatively impacts user experience but includes efforts to eliminate gender-related barriers."
            }
        ]
    },
    {
        question: "Scenario 2: Collaborative Research",
        description: "You have the choice to partner with leading neuroscience institutions for collaborative research. How do you proceed with the gender and ethnic insclusions in these instutions?",
        options: [
            {
                text: "Option 1: Partner with prestigious institutions for advanced research collaboration while engaging with diverse stakeholders.",
                points: 5,
                impact: "Scenario 2 Option 1:Collaboration with prestigious institutions accelerates research and development while actively including diverse stakeholder viewpoints."
            },
            {
                text: "Option 2: I would Opt for themselves(Let the instiution decide themselves) to maintain full control, regularly organizing group deliberation on societal and ethical aspects.",
                points: 3,
                impact: "Scenario 2 Option 2:In-house research provides control but may limit external expertise, with active internal engagement on societal and ethical dimensions."
            },
            {
                text: "Option 3: It is better to leave it undecided as it requires more information than applying risk identification and risk management strategies.",
                points: 2,
                impact: "Scenario 2 Option 3:Undecided choices may lead to delays but involve risk management strategies for responsible innovation."
            }
        ]
    },
    {
        question: "Scenario 3: Accessibility and Pricing",
        description: "You plan to make Neuralink accessible to a broad audience. How do you address affordability while considering environmental and social sustainability?",
        options: [
            {
                text: "Option 1: Offer affordable pricing and subsidies to reach a wider population, considering environmental and social sustainability.",
                points: 5,
                impact: "Scenario 3 Option 1:Affordable pricing and subsidies enhance accessibility while promoting environmental and social sustainability."
            },
            {
                text: "Option 2: Set a premium price for exclusivity. Actively communicate research results within stakeholder networks.",
                points: 3,
                impact: "Scenario 3 Option 2:A premium price may limit accessibility but ensures exclusivity, with active communication of results for societal benefits."
            },
            {
                text: "Option 3: Not focused on affordability, prioritize innovation and resource use efficiency.",
                points: 2,
                impact: "Scenario 3 Option 3:Lack of affordability focus may limit market reach but spurs innovation and resource use efficiency."
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
