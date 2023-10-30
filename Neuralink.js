const scenarios = [
    {
        question: "Scenario 1: Joining the Collaborative Brain-Computer Interface (BCI) Research Team",
        description: "Background: You are presented with an opportunity to join Neuralink's cutting-edge Brain-Computer Interface (BCI) research team. Neuralink aims to reshape human interaction with technology through BCIs. How do you, as a key decision-maker, ensure ethical research and uphold gender and ethnic inclusivity in your new role?",
        options: [
            {
                text: "Option 1: Accept the position, actively collaborating with esteemed neuroscientists and promoting gender and ethnic diversity within the team, while committing to strict ethical guidelines.",
                points: 5,
                impact: "You join the team, prioritizing inclusivity, collaboration, and ethics. (Scenario 1, Option 1)"
            },
            {
                text: "Option 2: Emphasize the importance of inclusivity and ethical considerations but grant research institutions the autonomy to decide on their collaboration approach.",
                points: 4,
                impact: "You encourage inclusivity and ethics but respect institutions' choices. (Scenario 1, Option 2)"
            },
            {
                text: "Option 3: Decide to stay cautious, limiting external collaborations and prioritizing internal expertise while organizing regular discussions on societal, gender, and ethical aspects.",
                points: 3,
                impact: "You opt for a more guarded approach, focusing on internal discussions and maintaining control. (Scenario 1, Option 3)"
            }
        ]
    },
    {
        question: "Scenario 2: Addressing Public Ethical Oversight",
        description: "Background: In your new role at Neuralink, you're confronted with growing public scrutiny and ethical concerns related to the project. You need to navigate the balancing act between ensuring public ethical oversight and maintaining project momentum. How do you handle this ethical challenge?",
        options: [
            {
                text: "Option 1: Champion the creation of an independent ethical review board that includes diverse experts and public representatives. Actively involve them in decision-making processes and commit to transparently sharing research outcomes.",
                points: 5,
                impact: "You lead the charge in establishing an independent review board and embrace transparent, inclusive decision-making. (Scenario 2, Option 1)"
            },
            {
                text: "Option 2: Engage in frequent public town hall meetings and surveys to gather public opinions, ensuring transparency and inclusivity in project decisions.",
                points: 4,
                impact: "You advocate for regular public engagement, promoting transparency and inclusive decision-making while respecting public concerns. (Scenario 2, Option 2)"
            },
            {
                text: "Option 3: Prioritize project progress by limiting public engagement and organizing internal discussions on ethical issues and societal dimensions to streamline project advancement.",
                points: 3,
                impact: "You choose to focus on accelerating project progress, which may affect transparency and inclusivity, emphasizing research and development. (Scenario 2, Option 3)"
            }
        ]
    },
    {
        question: "Scenario 3: Paving the Way for Accessible BCI Technology",
        description: "Background: Neuralink's vision is to make Brain-Computer Interface (BCI) technology accessible to a diverse population. You are tasked with ensuring affordability, equitable access, and social inclusivity. How do you, personally, balance premium pricing for research and development with making BCI technology accessible to all?",
        options: [
            {
                text: "Option 1: Advocate for a range of pricing options, including subsidies and grants, to ensure affordability for various demographics, with a strong focus on inclusivity and equity.",
                points: 5,
                impact: "You lead the effort to offer diverse pricing options, subsidies, and grants to make BCI technology accessible and promote social inclusivity and equity. (Scenario 3, Option 1)"
            },
            {
                text: "Option 2: Support a competitive pricing model and actively engage with community organizations, allowing for feedback and promoting outreach programs to broaden access.",
                points: 4,
                impact: "You back a competitive pricing model and community engagement to expand access and inclusivity, fostering outreach and public collaboration. (Scenario 3, Option 2)"
            },
            {
                text: "Option 3: Prioritize innovation and research and development with premium pricing, with limited outreach programs, focusing on advancement and progress.",
                points: 3,
                impact: "You opt to prioritize innovation and research and development, which may limit accessibility and inclusivity. (Scenario 3, Option 3)"
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
