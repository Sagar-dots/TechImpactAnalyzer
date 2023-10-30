const scenarios = [
    {
        question: "Scenario 1: Ethical Gene Editing",
        description: "Your team is pioneering CRISPR-Cas9 gene editing to cure genetic diseases. How do you ensure responsible innovation while addressing gender equality?",
        options: [
            {
                text: "Option 1: Implement strict ethical guidelines and regulations, ensuring diverse gender representation in the research team.",
                points: 5,
                impact: "Scenario 1, Option 1: Enforcing rigorous ethical guidelines and fostering diversity ensures responsible gene editing and gender equality."
            },
            {
                text: "Option 2: Collaborate with ethicists, healthcare experts, and patient advocacy groups to establish ethical standards for gene editing, with a focus on integrating gender dimensions.",
                points: 4,
                impact: "Scenario 1, Option 2: Collaboration with experts and inclusive research promotes responsible gene editing and gender equality in healthcare innovation."
            },
            {
                text: "Option 3: Prioritize public awareness campaigns about gene editing ethics, engaging diverse stakeholders, including the public, in the decision-making process.",
                points: 3,
                impact: "Scenario 1, Option 3: Public awareness campaigns promote responsible gene editing and diverse stakeholder involvement while raising awareness of gender equality."
            }
        ]
    },
    {
        question: "Scenario 2: Environmental Sustainability",
        description: "Your gene editing project may have an environmental impact due to genetic modifications. How do you ensure sustainability and inclusiveness?",
        options: [
            {
                text: "Option 1: Actively integrate environmental values in the research and design process, considering ecological impact and involving diverse stakeholders.",
                points: 5,
                impact: "Scenario 2, Option 1: Environmental values and diverse stakeholder involvement ensure responsible gene editing and environmental sustainability."
            },
            {
                text: "Option 2: Focus on resource use efficiency and waste reduction during gene editing, collaborating with environmental experts and including diverse stakeholder viewpoints.",
                points: 4,
                impact: "Scenario 2, Option 2: Resource efficiency, collaboration with environmental experts, and diverse stakeholder involvement promote sustainability and inclusiveness."
            },
            {
                text: "Option 3: Continue without addressing environmental concerns, promoting innovation, but potentially lacking in sustainability and inclusiveness.",
                points: 2,
                impact: "Scenario 2, Option 3: Innovation may thrive, but the project might face criticism for a lack of sustainability and inclusiveness."
            }
        ]
    },
    {
        question: "Scenario 3: Open Access and Public Acceptance",
        description: "Your project aims to make gene editing accessible and widely accepted. How do you approach openness, transparency, and societal acceptance?",
        options: [
            {
                text: "Option 1: Promote open access to gene editing information, actively engage with the public, and collaborate with civil society groups and policy makers to ensure responsible innovation and societal acceptance.",
                points: 5,
                impact: "Scenario 3, Option 1: Open access, public engagement, and collaboration with various stakeholders ensure responsible gene editing and societal acceptance."
            },
            {
                text: "Option 2: Use virtual platforms for data exchange, share research results with stakeholders, and actively communicate within the stakeholders' network to promote societal acceptance.",
                points: 4,
                impact: "Scenario 3, Option 2: Virtual platforms, sharing results, and stakeholder communication enhance transparency and societal acceptance of gene editing."
            },
            {
                text: "Option 3: Keep results confidential and prioritize innovation, risking public resistance and a lack of societal acceptance.",
                points: 2,
                impact: "Scenario 3, Option 3: Confidentiality may lead to public resistance and affect societal acceptance, focusing on innovation with potential risks."
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
