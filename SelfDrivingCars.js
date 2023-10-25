
const scenarios = [
    {
        question: "Scenario 1: Autonomous Vehicle Ethics",
        description: "You are developing self-driving cars. Ethical considerations regarding accidents are critical. How do you ensure responsible innovation and ethical decision-making?",
        options: [
            {
                text: "Option 1: Implement AI algorithms that prioritize the safety of passengers and pedestrians in all situations, even if it means sacrificing the passengers' lives in extreme cases.",
                points: 5,
                impact: "Safety-first algorithms prioritize the well-being of all, aligning with ethical values."
            },
            {
                text: "Option 2: Develop AI algorithms that protect passengers at all costs, even if it means causing harm to pedestrians, prioritizing passenger safety over all else.",
                points: 3,
                impact: "Passenger-centric algorithms may raise ethical concerns about the safety of others."
            },
            {
                text: "Option 3: Leave ethical decisions to the passengers by offering an option to choose the vehicle's behavior in case of an accident, potentially causing moral dilemmas and risks.",
                points: 2,
                impact: "Passenger choice may raise moral dilemmas and ethical complexities."
            }
        ]
    },
    {
        question: "Scenario 2: Data Privacy and Security",
        description: "Self-driving cars collect extensive data. How do you protect data privacy and ensure ethical data handling?",
        options: [
            {
                text: "Option 1: Implement strong encryption and data anonymization techniques to protect user data privacy, adhering to strict ethical standards.",
                points: 5,
                impact: "Strong data protection measures align with ethical standards and safeguard user privacy."
            },
            {
                text: "Option 2: Collect and store user data with minimal protection, potentially compromising user privacy and raising ethical concerns.",
                points: 2,
                impact: "Minimal data protection may raise ethical concerns about data privacy."
            },
            {
                text: "Option 3: Share user data with third parties without consent, disregarding ethical principles and privacy norms.",
                points: 1,
                impact: "Sharing data without consent violates ethical standards and privacy norms."
            }
        ]
    },
    {
        question: "Scenario 3: Job Displacement and Public Safety",
        description: "Self-driving cars may lead to job displacement for human drivers. How do you address ethical concerns about job loss and public safety?",
        options: [
            {
                text: "Option 1: Invest in retraining programs and provide support for displaced workers to mitigate job loss, prioritizing ethical responsibility and societal well-being.",
                points: 5,
                impact: "Retraining programs and support demonstrate ethical responsibility and address job displacement concerns."
            },
            {
                text: "Option 2: Continue self-driving car deployment without addressing job displacement, potentially causing public outrage and ethical concerns.",
                points: 2,
                impact: "Failure to address job displacement may lead to public outrage and ethical issues."
            },
            {
                text: "Option 3: Prioritize automation and cost savings over job concerns, disregarding the ethical implications of job displacement.",
                points: 1,
                impact: "Prioritizing automation without addressing job displacement may raise ethical concerns."
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
