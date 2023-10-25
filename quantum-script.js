const questions = [
    {
        question: "Your company is developing a quantum computer. How do you ensure data security?",
        options: [
            {
                text: "Implement quantum encryption for data security",
                points: 5,
                impact: "Implementing quantum encryption ensures the highest level of data security.",
                positive: true
            },
            {
                text: "Use traditional encryption methods",
                points: 2,
                impact: "Using traditional encryption methods offers good security but not quantum-proof.",
                positive: true
            },
            {
                text: "No encryption measures",
                points: 1,
                impact: "Lack of encryption measures may lead to data breaches and security issues.",
                positive: false
            }
        ]
    },
    {
        question: "Your quantum computer can break existing encryption methods. How do you handle this capability?",
        options: [
            {
                text: "Work with governments to establish responsible use guidelines",
                points: 5,
                impact: "Working with governments to establish guidelines ensures responsible and safe use.",
                positive: true
            },
            {
                text: "Sell the technology without restrictions",
                points: 2,
                impact: "Selling the technology without restrictions raises concerns about misuse and security.",
                positive: false
            },
            {
                text: "No specific plan",
                points: 1,
                impact: "Lack of a plan may lead to uncontrolled use and potential risks.",
                positive: false
            }
        ]
    },
    {
        question: "Your quantum computer requires extremely low temperatures. How do you address environmental concerns?",
        options: [
            {
                text: "Implement efficient cooling systems and minimize energy consumption",
                points: 5,
                impact: "Efficient cooling systems and energy minimization reduce environmental impact.",
                positive: true
            },
            {
                text: "Use standard cooling methods and energy sources",
                points: 2,
                impact: "Standard cooling and energy sources lead to higher energy consumption and costs.",
                positive: false
            },
            {
                text: "No environmental measures",
                points: 1,
                impact: "Lack of environmental measures negatively impacts the environment.",
                positive: false
            }
        ]
    }
];

const questionsContainer = document.getElementById("questions-container");
const endGameButton = document.getElementById("end-game-button");
const totalPointsContainer = document.getElementById("total-points");
let userPoints = 0;
let questionIndex = 0;

function renderQuestion() {
    if (questionIndex < questions.length) {
        const currentQuestion = questions[questionIndex];
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `<p>${currentQuestion.question}</p>`;
        currentQuestion.options.forEach((option, index) => {
            const optionButton = document.createElement("button");
            optionButton.textContent = option.text;
            optionButton.addEventListener("click", () => handleOptionClick(option, index));
            questionElement.appendChild(optionButton);
        });
        questionsContainer.appendChild(questionElement);
    } else {
        endGame();
    }
}

function handleOptionClick(option, index) {
    userPoints += option.points;
    questionIndex++;
    renderImpact(option.impact, option.positive);
    renderQuestion();
}

function renderImpact(impact, isPositive) {
    const impactElement = document.createElement("p");
    impactElement.textContent = impact;
    impactElement.classList.add(isPositive ? "positive-impact" : "negative-impact");
    questionsContainer.appendChild(impactElement);
}

function endGame() {
    questionsContainer.style.display = "none";
    endGameButton.style.display = "none";
    totalPointsContainer.style.display = "block";
    totalPointsContainer.textContent = `Total Points: ${userPoints}`;
}

renderQuestion();
endGameButton.addEventListener("click", endGame);
