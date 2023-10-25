
const scenarios = [
    {
        question: "Scenario 1: Autonomous Vehicle Safety",
        description: "You are developing autonomous vehicles with the aim of improving road safety. How do you ensure responsible innovation in terms of diversity and inclusion?",
        options: [
            {
                text: "Option 1: Prioritize safety features that benefit all demographics, actively promoting diversity and inclusion in road safety.",
                points: 5,
                impact: "Prioritizing safety features for all demographics promotes diversity and inclusion in road safety through autonomous vehicles."
            },
            {
                text: "Option 2: Collaborate with organizations working on road safety in underserved communities, addressing safety concerns for marginalized groups.",
                points: 4,
                impact: "Collaboration with safety organizations promotes responsible innovation and inclusiveness in autonomous vehicle safety.",
            },
            {
                text: "Option 3: Focus solely on commercial deployment without addressing diversity and inclusion in safety, potentially leaving vulnerable communities at risk.",
                points: 2,
                impact: "Commercial deployment without inclusiveness efforts may lead to inequalities in autonomous vehicle safety."
            }
        ]
    },
    {
        question: "Scenario 2: Environmental Impact",
        description: "Your self-driving car project has the potential to impact the environment. How do you ensure sustainability and environmental responsibility?",
        options: [
            {
                text: "Option 1: Incorporate environmental considerations in vehicle design and operation, actively engaging with environmental experts and organizations.",
                points: 5,
                impact: "Environmental considerations and expert collaboration ensure responsible innovation and sustainability in self-driving car technology.",
            },
            {
                text: "Option 2: Focus on energy efficiency, emissions reduction, and use of eco-friendly materials, working with environmental organizations to address environmental concerns.",
                points: 4,
                impact: "Energy efficiency, emissions reduction, and eco-friendly practices promote sustainability and environmental responsibility in self-driving cars.",
            },
            {
                text: "Option 3: Proceed with vehicle deployment without considering environmental impact, potentially facing criticism for ecological consequences.",
                points: 2,
                impact: "Deployment without environmental considerations may lead to criticism regarding the environmental impact of self-driving cars."
            }
        ]
    },
    {
        question: "Scenario 3: Public Engagement and Ethical Acceptance",
        description: "Your project aims to gain public acceptance for self-driving cars. How do you approach openness, transparency, and ethical considerations?",
        options: [
            {
                text: "Option 1: Promote open dialogue with the public, collaborate with civil society groups, and actively address ethical concerns to ensure responsible innovation and societal acceptance of self-driving cars.",
                points: 5,
                impact: "Open dialogue, collaboration, and ethical considerations promote responsible innovation and societal acceptance of self-driving cars.",
            },
            {
                text: "Option 2: Use virtual platforms for public engagement, share information transparently, and engage with stakeholders to build trust and acceptance.",
                points: 4,
                impact: "Virtual engagement, transparency, and stakeholder involvement enhance openness and public acceptance of self-driving cars.",
            },
            {
                text: "Option 3: Keep deployment plans confidential, prioritizing innovation over public engagement, risking potential public resistance and acceptance issues.",
                points: 2,
                impact: "Confidentiality may lead to public resistance and affect the societal acceptance of self-driving cars, focusing on innovation with potential risks."
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
