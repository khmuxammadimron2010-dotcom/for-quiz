// Typewriter Animation for Author Name
function typewriterEffect(elementId, text, speed = 100) {
    const element = document.getElementById(elementId);
    let index = 0;

    // Clear the element
    element.textContent = '';

    function type() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Quiz Data - Organized by Easy and Difficult levels
const quizzes = [
    // EASY QUIZZES - 100 English Grammar Questions
    {
        level: 'easy',
        title: "English Grammar (100 Questions)",
        questions: [
            {
                question: "1. The crowd _____ cheering loudly when the goal was scored.",
                options: ["was", "were", "have been"],
                correct: 1
            },
            {
                question: "2. She is _____ than her brother.",
                options: ["more smart", "smarter", "more smarter"],
                correct: 1
            },
            {
                question: "3. If I _____ you, I would apologize.",
                options: ["was", "were", "am"],
                correct: 1
            },
            {
                question: "4. He _____ on the couch all morning yesterday.",
                options: ["laid", "lay", "lied"],
                correct: 1
            },
            {
                question: "5. Each of the players _____ a new uniform.",
                options: ["have", "are having", "has"],
                correct: 2
            },
            {
                question: "6. I look forward to _____ you soon.",
                options: ["see", "seeing", "saw"],
                correct: 1
            },
            {
                question: "7. Neither the teacher nor the students _____ in the classroom.",
                options: ["was", "were", "is"],
                correct: 1
            },
            {
                question: "8. She suggested that he _____ a doctor.",
                options: ["sees", "see", "saw"],
                correct: 1
            },
            {
                question: "9. The reason I was late is _____ my car broke down.",
                options: ["because", "that", "why"],
                correct: 1
            },
            {
                question: "10. He asked me where _____ .",
                options: ["did I live", "I lived", "did I lived"],
                correct: 1
            },
            {
                question: "11. I wish I _____ more time to travel.",
                options: ["have", "had", "would have"],
                correct: 1
            },
            {
                question: "12. This is the man _____ helped me yesterday.",
                options: ["which", "whom", "who"],
                correct: 2
            },
            {
                question: "13. She is one of those people who _____ always late.",
                options: ["is", "are", "am"],
                correct: 1
            },
            {
                question: "14. The data _____ been analyzed carefully.",
                options: ["have", "has", "are"],
                correct: 1
            },
            {
                question: "15. He stopped _____ coffee because it affects his sleep.",
                options: ["drinking", "to drink", "drink"],
                correct: 0
            },
            {
                question: "16. Between you and _____, this is a bad idea.",
                options: ["I", "me", "myself"],
                correct: 1
            },
            {
                question: "17. If it rains tomorrow, we _____ the match.",
                options: ["cancel", "will cancel", "would cancel"],
                correct: 1
            },
            {
                question: "18. Having _____ all day, I fell asleep quickly.",
                options: ["worked", "working", "work"],
                correct: 0
            },
            {
                question: "19. The book, including all its chapters, _____ well-written.",
                options: ["are", "is", "were"],
                correct: 1
            },
            {
                question: "20. She runs _____ than anyone else on the team.",
                options: ["more fast", "faster", "more faster"],
                correct: 1
            },
            {
                question: "21. I have been waiting _____ three hours.",
                options: ["for", "during", "since"],
                correct: 0
            },
            {
                question: "22. He will arrive _____ tomorrow morning.",
                options: ["at", "on", "in"],
                correct: 1
            },
            {
                question: "23. _____ you finished your homework?",
                options: ["Did", "Have", "Had"],
                correct: 1
            },
            {
                question: "24. She _____ been here for an hour.",
                options: ["has", "have", "had"],
                correct: 0
            },
            {
                question: "25. They are _____ to the cinema tonight.",
                options: ["go", "going", "gone"],
                correct: 1
            },
            {
                question: "26. The book _____ on the table.",
                options: ["is", "are", "been"],
                correct: 0
            },
            {
                question: "27. I _____ never seen such a beautiful sunset.",
                options: ["have", "has", "had"],
                correct: 0
            },
            {
                question: "28. _____ is your favorite color?",
                options: ["What", "Which", "That"],
                correct: 0
            },
            {
                question: "29. She doesn't like _____ vegetables.",
                options: ["eat", "eating", "eaten"],
                correct: 1
            },
            {
                question: "30. We _____ to the beach every summer.",
                options: ["goes", "go", "going"],
                correct: 1
            },
            {
                question: "31. The _____ is sleeping.",
                options: ["cat", "cats", "catz"],
                correct: 0
            },
            {
                question: "32. _____ apples do you want?",
                options: ["How much", "How many", "How"],
                correct: 1
            },
            {
                question: "33. He _____ coffee every morning.",
                options: ["drinks", "drink", "drinking"],
                correct: 0
            },
            {
                question: "34. I will _____ you tomorrow.",
                options: ["calling", "call", "called"],
                correct: 1
            },
            {
                question: "35. She _____ a good student.",
                options: ["am", "is", "are"],
                correct: 1
            },
            {
                question: "36. They have _____ living here for five years.",
                options: ["been", "being", "be"],
                correct: 0
            },
            {
                question: "37. _____ you like pizza?",
                options: ["Do", "Does", "Did"],
                correct: 0
            },
            {
                question: "38. She is _____ than me.",
                options: ["tall", "taller", "tallest"],
                correct: 1
            },
            {
                question: "39. I can _____ English very well.",
                options: ["speak", "speaking", "spoke"],
                correct: 0
            },
            {
                question: "40. They _____ finished their project.",
                options: ["have", "has", "had"],
                correct: 0
            },
            {
                question: "41. What _____ you doing now?",
                options: ["are", "is", "am"],
                correct: 0
            },
            {
                question: "42. She will be _____ at the party.",
                options: ["there", "their", "they're"],
                correct: 0
            },
            {
                question: "43. I _____ not understand this problem.",
                options: ["do", "does", "did"],
                correct: 0
            },
            {
                question: "44. He _____ been to Paris twice.",
                options: ["have", "has", "had"],
                correct: 1
            },
            {
                question: "45. _____ is that girl?",
                options: ["Who", "Whom", "Whose"],
                correct: 0
            },
            {
                question: "46. The dog _____ the ball.",
                options: ["chase", "chases", "chased"],
                correct: 1
            },
            {
                question: "47. I have to _____ my homework.",
                options: ["do", "doing", "done"],
                correct: 0
            },
            {
                question: "48. She _____ a dress yesterday.",
                options: ["buys", "buy", "bought"],
                correct: 2
            },
            {
                question: "49. They are _____ interesting book.",
                options: ["read", "reading", "reads"],
                correct: 1
            },
            {
                question: "50. I _____ know what to do.",
                options: ["don't", "doesn't", "didn't"],
                correct: 0
            },
            {
                question: "51. She is _____ the phone right now.",
                options: ["on", "in", "at"],
                correct: 0
            },
            {
                question: "52. We _____ play football after school.",
                options: ["is", "are", "will"],
                correct: 2
            },
            {
                question: "53. _____ you finished your meal?",
                options: ["Have", "Has", "Had"],
                correct: 0
            },
            {
                question: "54. The book _____ to me.",
                options: ["belong", "belongs", "belonging"],
                correct: 1
            },
            {
                question: "55. I _____ a new car last month.",
                options: ["bought", "buy", "buying"],
                correct: 0
            },
            {
                question: "56. She _____ to go to the store.",
                options: ["want", "wants", "wanting"],
                correct: 1
            },
            {
                question: "57. They _____ been working since morning.",
                options: ["have", "has", "had"],
                correct: 0
            },
            {
                question: "58. I _____ never tried Italian food.",
                options: ["have", "has", "had"],
                correct: 0
            },
            {
                question: "59. He _____ to study harder for exams.",
                options: ["need", "needs", "needing"],
                correct: 1
            },
            {
                question: "60. _____ you like ice cream?",
                options: ["Do", "Does", "Did"],
                correct: 0
            },
            {
                question: "61. She is _____ at home today.",
                options: ["stay", "staying", "stays"],
                correct: 1
            },
            {
                question: "62. The _____ is very expensive.",
                options: ["car", "cars", "cars'"],
                correct: 0
            },
            {
                question: "63. I will _____ you next week.",
                options: ["see", "seeing", "saw"],
                correct: 0
            },
            {
                question: "64. They _____ to the movies yesterday.",
                options: ["go", "goes", "went"],
                correct: 2
            },
            {
                question: "65. She _____ been here for two days.",
                options: ["have", "has", "had"],
                correct: 1
            },
            {
                question: "66. I _____ my keys.",
                options: ["lose", "losing", "lost"],
                correct: 2
            },
            {
                question: "67. He is _____ tall.",
                options: ["very", "much", "so much"],
                correct: 0
            },
            {
                question: "68. _____ you help me with this?",
                options: ["Can", "Cans", "Could"],
                correct: 0
            },
            {
                question: "69. The weather _____ rainy today.",
                options: ["is", "are", "been"],
                correct: 0
            },
            {
                question: "70. I _____ to Paris last summer.",
                options: ["go", "goes", "went"],
                correct: 2
            },
            {
                question: "71. She _____ a beautiful voice.",
                options: ["have", "has", "had"],
                correct: 1
            },
            {
                question: "72. They _____ playing football.",
                options: ["are", "is", "am"],
                correct: 0
            },
            {
                question: "73. I _____ already eaten lunch.",
                options: ["have", "has", "had"],
                correct: 0
            },
            {
                question: "74. He _____ to the gym every day.",
                options: ["goes", "go", "going"],
                correct: 0
            },
            {
                question: "75. _____ is your address?",
                options: ["What", "Where", "Which"],
                correct: 1
            },
            {
                question: "76. She _____ her homework before dinner.",
                options: ["finish", "finishes", "finished"],
                correct: 1
            },
            {
                question: "77. I _____ understand the lesson.",
                options: ["don't", "doesn't", "didn't"],
                correct: 0
            },
            {
                question: "78. They _____ sleeping when I called.",
                options: ["were", "was", "are"],
                correct: 0
            },
            {
                question: "79. She _____ never been to London.",
                options: ["have", "has", "had"],
                correct: 1
            },
            {
                question: "80. I _____ buy groceries tomorrow.",
                options: ["will", "am", "are"],
                correct: 0
            },
            {
                question: "81. He _____ a new job last month.",
                options: ["get", "gets", "got"],
                correct: 2
            },
            {
                question: "82. The _____ are playing in the park.",
                options: ["children", "childs", "child"],
                correct: 0
            },
            {
                question: "83. I _____ been waiting for you.",
                options: ["have", "has", "had"],
                correct: 0
            },
            {
                question: "84. She is _____ the window.",
                options: ["by", "at", "near"],
                correct: 2
            },
            {
                question: "85. _____ you ever traveled abroad?",
                options: ["Have", "Has", "Had"],
                correct: 0
            },
            {
                question: "86. I _____ a sandwich for lunch.",
                options: ["eat", "eating", "ate"],
                correct: 2
            },
            {
                question: "87. They _____ finished their work.",
                options: ["have", "has", "had"],
                correct: 0
            },
            {
                question: "88. She _____ very intelligent.",
                options: ["am", "is", "are"],
                correct: 1
            },
            {
                question: "89. I will _____ you tonight.",
                options: ["call", "calling", "called"],
                correct: 0
            },
            {
                question: "90. He _____ to go home.",
                options: ["want", "wants", "wanting"],
                correct: 1
            },
            {
                question: "91. The _____ is mine.",
                options: ["pen", "pens", "pens'"],
                correct: 0
            },
            {
                question: "92. I _____ not like mushrooms.",
                options: ["do", "does", "did"],
                correct: 0
            },
            {
                question: "93. She _____ been working here for five years.",
                options: ["have", "has", "had"],
                correct: 1
            },
            {
                question: "94. They are _____ very excited.",
                options: ["all", "very", "so"],
                correct: 0
            },
            {
                question: "95. I _____ my car yesterday.",
                options: ["wash", "washed", "washing"],
                correct: 1
            },
            {
                question: "96. He _____ a doctor.",
                options: ["am", "is", "are"],
                correct: 1
            },
            {
                question: "97. _____ you speak Spanish?",
                options: ["Do", "Does", "Did"],
                correct: 0
            },
            {
                question: "98. She _____ to the office every day.",
                options: ["go", "goes", "going"],
                correct: 1
            },
            {
                question: "99. I _____ already finished the project.",
                options: ["have", "has", "had"],
                correct: 0
            },
            {
                question: "100. They _____ playing chess right now.",
                options: ["are", "is", "am"],
                correct: 0
            }
        ]
    },
    // DIFFICULT QUIZZES
    {
        level: 'difficult',
        title: "Advanced English Grammar",
        questions: [
            {
                question: "1. Had I known about the traffic, I _____ a different route.",
                options: ["would take", "would have taken", "took"],
                correct: 1
            },
            {
                question: "2. It is imperative that he _____ immediately.",
                options: ["leaves", "leave", "will leave"],
                correct: 1
            },
            {
                question: "3. Not until the final whistle blew _____ the fans leave the stadium.",
                options: ["did", "had", "would"],
                correct: 0
            },
            {
                question: "4. She resented _____ unfairly blamed for the mistake.",
                options: ["having been", "to be", "being had"],
                correct: 0
            },
            {
                question: "5. The proposal, along with its numerous amendments, _____ approved yesterday.",
                options: ["was", "were", "have been"],
                correct: 0
            },
            {
                question: "6. Hardly _____ the house when it started to rain.",
                options: ["I had left", "had I left", "did I leave"],
                correct: 1
            },
            {
                question: "7. I would rather you _____ me the truth from the beginning.",
                options: ["tell", "told", "have told"],
                correct: 1
            },
            {
                question: "8. The higher the price, _____ the demand.",
                options: ["lower", "the lower", "more low"],
                correct: 1
            },
            {
                question: "9. She is one of the few candidates who _____ able to pass the test.",
                options: ["was", "were", "is"],
                correct: 1
            },
            {
                question: "10. The statistics _____ that the economy is improving.",
                options: ["shows", "show", "showing"],
                correct: 1
            },
            {
                question: "11. _____ his help, we would have failed.",
                options: ["But for", "Without of", "Except"],
                correct: 0
            },
            {
                question: "12. He was accused of _____ the confidential documents.",
                options: ["have stolen", "having stolen", "steal"],
                correct: 1
            },
            {
                question: "13. I have no recollection _____ signing the contract.",
                options: ["to", "of", "for"],
                correct: 1
            },
            {
                question: "14. No sooner _____ the phone than someone knocked at the door.",
                options: ["I answered", "had I answered", "I had answered"],
                correct: 1
            },
            {
                question: "15. The manager insisted on _____ the report by Friday.",
                options: ["us to finish", "us finishing", "our finishing"],
                correct: 2
            },
            {
                question: "16. If only I _____ more attention in class!",
                options: ["paid", "had paid", "would pay"],
                correct: 1
            },
            {
                question: "17. She walked in, _____ by her assistant.",
                options: ["followed", "following", "was followed"],
                correct: 0
            },
            {
                question: "18. The concert was _____ that tickets sold out in an hour.",
                options: ["so popular", "such popular", "too popular"],
                correct: 0
            },
            {
                question: "19. All the equipment _____ tested before use.",
                options: ["must be", "must have", "must being"],
                correct: 0
            },
            {
                question: "20. I'd sooner _____ alone than with him.",
                options: ["to stay", "stay", "staying"],
                correct: 1
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
let currentLevel = 'easy';
let filteredQuizzes = [];

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
const levelTitle = document.getElementById('levelTitle');
const quizGrid = document.getElementById('quizGrid');
const easyBtn = document.getElementById('easyBtn');
const difficultBtn = document.getElementById('difficultBtn');

// Functions
function showLevelQuizzes(level) {
    currentLevel = level;
    filteredQuizzes = quizzes.filter(quiz => quiz.level === level);
    
    // Update active button
    if (level === 'easy') {
        easyBtn.classList.add('active');
        difficultBtn.classList.remove('active');
        levelTitle.textContent = 'Select an Easy Quiz';
    } else {
        difficultBtn.classList.add('active');
        easyBtn.classList.remove('active');
        levelTitle.textContent = 'Select a Difficult Quiz';
    }
    
    // Update quiz grid buttons
    quizGrid.innerHTML = '';
    filteredQuizzes.forEach((quiz, index) => {
        const button = document.createElement('button');
        button.className = 'quiz-btn';
        button.textContent = quiz.title;
        button.onclick = () => startQuiz(quizzes.indexOf(quiz));
        quizGrid.appendChild(button);
    });
}

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
    showLevelQuizzes(currentLevel);
}

function goBack() {
    restartQuiz();
}

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    showLevelQuizzes('easy');
    // Start typewriter animation for author name
    typewriterEffect('authorName', 'Хакимов Мухаммадимрон', 80);
});
