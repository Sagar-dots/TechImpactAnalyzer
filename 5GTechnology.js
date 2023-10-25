const scenarios = [
    {
        question: "Scenario 1: Inclusive 5G Connectivity",
        description: "You are part of a 5G rollout project, aiming to provide fast and reliable connectivity. How do you ensure responsible innovation and diversity and inclusion?",
        options: [
            {
                text: "Option 1: Implement policies and technologies to ensure equal access to 5G for all demographic groups, actively promoting diversity and inclusion in access.",
                points: 5,
                impact: "Equal access policies promote diversity and inclusion in 5G connectivity."
            },
            {
                text: "Option 2: Collaborate with community organizations and government agencies to bridge the digital divide, prioritizing connectivity in underserved areas.",
                points: 4,
                impact: "Collaboration promotes responsible innovation and inclusiveness in 5G connectivity, addressing the digital divide."
            },
            {
                text: "Option 3: Focus solely on commercial deployment without addressing digital inclusion, potentially leaving marginalized communities behind.",
                points: 2,
                impact: "Commercial deployment without inclusiveness efforts may lead to inequalities in 5G access."
            }
        ]
    },
    {
        question: "Scenario 2: 5G Environmental Impact",
        description: "Your 5G project has the potential to impact the environment due to infrastructure deployment. How do you ensure sustainability and environmental responsibility?",
        options: [
            {
                text: "Option 1: Actively incorporate environmental considerations in infrastructure design and deployment, working with environmental experts and engaging with environmental organizations.",
                points: 5,
                impact: "Environmental considerations, expert collaboration, and stakeholder engagement ensure responsible innovation and sustainability in 5G deployment."
            },
            {
                text: "Option 2: Focus on energy efficiency, reduce waste, and use eco-friendly materials in 5G infrastructure, collaborating with environmental organizations and inclusively involving stakeholders.",
                points: 4,
                impact: "Energy efficiency, waste reduction, and eco-friendly approaches promote sustainability and inclusiveness in 5G technology."
            },
            {
                text: "Option 3: Continue with infrastructure deployment without environmental considerations, potentially causing negative environmental impact.",
                points: 2,
                impact: "Deployment without environmental considerations may lead to criticism regarding the environmental impact of 5G technology."
            }
        ]
    },
    {
        question: "Scenario 3: Public Engagement and Ethical Acceptance",
        description: "Your project aims to gain public acceptance for 5G technology. How do you approach openness, transparency, and ethical considerations?",
        options: [
            {
                text: "Option 1: Promote open dialogue with the public, collaborate with civil society groups, and actively address ethical concerns to ensure responsible innovation and societal acceptance of 5G.",
                points: 5,
                impact: "Open dialogue, collaboration, and ethical considerations promote responsible innovation and societal acceptance of 5G technology."
            },
            {
                text: "Option 2: Use virtual platforms for public engagement, share information transparently, and engage with stakeholders to build trust and acceptance.",
                points: 4,
                impact: "Virtual engagement, transparency, and stakeholder involvement enhance openness and public acceptance of 5G technology."
            },
            {
                text: "Option 3: Keep deployment plans confidential, prioritizing innovation over public engagement, risking potential public resistance and acceptance issues.",
                points: 2,
                impact: "Confidentiality may lead to public resistance and affect the societal acceptance of 5G technology, focusing on innovation with potential risks."
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
