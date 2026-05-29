// Quiz Data
const quizzes = [
    {
        title: "General Knowledge",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correct: 2
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correct: 1
            },
            {
                question: "What is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
                correct: 2
            },
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
                correct: 1
            },
            {
                question: "What is the smallest country in the world?",
                options: ["Monaco", "Vatican City", "Liechtenstein", "San Marino"],
                correct: 1
            }
        ]
    },
    {
        title: "Science",
        questions: [
            {
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: 2
            },
            {
                question: "What is the speed of light?",
                options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
                correct: 0
            },
            {
                question: "How many bones are in the human body?",
                options: ["186", "206", "226", "246"],
                correct: 1
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correct: 2
            },
            {
                question: "What is the most abundant element in the universe?",
                options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon"],
                correct: 1
            }
        ]
    },
    {
        title: "History",
        questions: [
            {
                question: "In what year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: 2
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
                correct: 1
            },
            {
                question: "In what year did the Titanic sink?",
                options: ["1910", "1911", "1912", "1913"],
                correct: 2
            },
            {
                question: "Which empire built the Great Wall of China?",
                options: ["Japanese Empire", "Roman Empire", "Chinese Empire", "Mongol Empire"],
                correct: 2
            },
            {
                question: "In what year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: 2
            }
        ]
    },
    {
        title: "Geography",
        questions: [
            {
                question: "What is the capital of Australia?",
                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correct: 2
            },
            {
                question: "Which is the longest river in the world?",
                options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                correct: 1
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correct: 2
            },
            {
                question: "What is the capital of Japan?",
                options: ["Osaka", "Tokyo", "Kyoto", "Hiroshima"],
                correct: 1
            },
            {
                question: "Which country is home to the Eiffel Tower?",
                options: ["Germany", "Italy", "France", "Spain"],
                correct: 2
            }
        ]
    }
];

// State Variables
let currentQuizIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizStarted = false;

// DOM Elements
const quizSelectionScreen = document.getElementById('quizSelection');
const quizScreen = document.getElementById('quizScreen');
const resultsScreen = document.getElementById('resultsScreen');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('optionsContainer');
const nextBtn = document.getElementById('nextBtn');
const questionNumber = document.getElementById('questionNumber');
const scoreDisplay = document.getElementById('score');
const progressFill = document.getElementById('progressFill');

// Functions
function startQuiz(quizIndex) {
    currentQuizIndex = quizIndex;
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    quizStarted = true;
    showQuizScreen();
    displayQuestion();
}

function displayQuestion() {
    const quiz = quizzes[currentQuizIndex];
    const question = quiz.questions[currentQuestionIndex];

    // Update question text
    questionElement.textContent = question.question;

    // Update question number and score
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${quiz.questions.length}`;
    scoreDisplay.textContent = `Score: ${score}`;

    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / quiz.questions.length) * 100;
    progressFill.style.width = progress + '%';

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Display options
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('label');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${index}" onchange="selectOption(${index})">
            <span>${option}</span>
        `;
        optionsContainer.appendChild(optionDiv);
    });

    // Reset next button
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestionIndex === quiz.questions.length - 1 ? 'Submit Quiz' : 'Next Question';
}

function selectOption(index) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[index].classList.add('selected');
    nextBtn.disabled = false;
}

function nextQuestion() {
    const quiz = quizzes[currentQuizIndex];
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (!selectedOption) {
        alert('Please select an option');
        return;
    }

    const userAnswer = parseInt(selectedOption.value);
    const correctAnswer = quiz.questions[currentQuestionIndex].correct;

    userAnswers.push({
        question: quiz.questions[currentQuestionIndex].question,
        userAnswer: quiz.questions[currentQuestionIndex].options[userAnswer],
        correctAnswer: quiz.questions[currentQuestionIndex].options[correctAnswer],
        isCorrect: userAnswer === correctAnswer
    });

    if (userAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.questions.length) {
        displayQuestion();
    } else {
        showResultsScreen();
    }
}

function showQuizScreen() {
    quizSelectionScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultsScreen.classList.add('hidden');
}

function showResultsScreen() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    displayResults();
}

function displayResults() {
    const quiz = quizzes[currentQuizIndex];
    const totalQuestions = quiz.questions.length;
    const percentage = (score / totalQuestions) * 100;

    // Display final score
    document.getElementById('finalScore').textContent = score;

    // Display score message
    let message = '';
    if (percentage === 100) {
        message = '🎉 Perfect Score! Outstanding!';
    } else if (percentage >= 80) {
        message = '🌟 Excellent work!';
    } else if (percentage >= 60) {
        message = '👍 Good job!';
    } else if (percentage >= 40) {
        message = '📚 Not bad, keep learning!';
    } else {
        message = '💪 Keep practicing!';
    }
    document.getElementById('scoreMessage').textContent = message;

    // Display result details
    const resultsDetails = document.getElementById('resultsDetails');
    resultsDetails.innerHTML = '';

    userAnswers.forEach((answer, index) => {
        const resultItem = document.createElement('div');
        resultItem.className = `result-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        resultItem.innerHTML = `
            <div class="result-item-question">Q${index + 1}: ${answer.question}</div>
            <div class="result-item-answer">
                Your answer: <strong>${answer.userAnswer}</strong>
                ${!answer.isCorrect ? `<br>Correct answer: <strong>${answer.correctAnswer}</strong>` : ''}
            </div>
        `;
        resultsDetails.appendChild(resultItem);
    });
}

function restartQuiz() {
    quizSelectionScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultsScreen.classList.add('hidden');
    quizStarted = false;
}

function goBack() {
    restartQuiz();
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    // Quiz is ready to start
});