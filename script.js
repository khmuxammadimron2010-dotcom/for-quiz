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
    },
    {
        title: "English Grammar",
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
                question: "21. I'm not sure _____ book this is.",
                options: ["who's", "whose", "who"],
                correct: 1
            },
            {
                question: "22. He advised me _____ smoking.",
                options: ["stop", "to stop", "stopping"],
                correct: 1
            },
            {
                question: "23. The weather was _____ cold that we stayed inside.",
                options: ["such", "so", "too"],
                correct: 1
            },
            {
                question: "24. Neither of the options _____ acceptable.",
                options: ["is", "are", "were"],
                correct: 0
            },
            {
                question: "25. She _____ to the store yesterday.",
                options: ["has gone", "went", "had went"],
                correct: 1
            },
            {
                question: "26. The police _____ looking for the suspect now.",
                options: ["is", "are", "am"],
                correct: 1
            },
            {
                question: "27. I remember _____ him at the party last year.",
                options: ["to meet", "meet", "meeting"],
                correct: 2
            },
            {
                question: "28. If I had known, I _____ differently.",
                options: ["would act", "would have acted", "acted"],
                correct: 1
            },
            {
                question: "29. He is the kind of person _____ never gives up.",
                options: ["who", "which", "what"],
                correct: 0
            },
            {
                question: "30. There _____ fewer people here today.",
                options: ["is", "are", "am"],
                correct: 1
            },
            {
                question: "31. She _____ already eaten when I arrived.",
                options: ["had", "has", "have"],
                correct: 0
            },
            {
                question: "32. They made me _____ my homework again.",
                options: ["to do", "doing", "do"],
                correct: 2
            },
            {
                question: "33. The longer you wait, _____ it becomes.",
                options: ["the harder", "harder", "more hard"],
                correct: 0
            },
            {
                question: "34. This is the second time I _____ this movie.",
                options: ["see", "saw", "have seen"],
                correct: 2
            },
            {
                question: "35. He doesn't like _____ told what to do.",
                options: ["be", "being", "to be"],
                correct: 1
            },
            {
                question: "36. The committee _____ reached a decision.",
                options: ["has", "have", "are"],
                correct: 0
            },
            {
                question: "37. She is more experienced than _____.",
                options: ["I", "me", "myself"],
                correct: 1
            },
            {
                question: "38. I'd rather you _____ quiet.",
                options: ["keep", "kept", "to keep"],
                correct: 1
            },
            {
                question: "39. Despite _____ tired, he continued working.",
                options: ["to be", "being", "of being"],
                correct: 1
            },
            {
                question: "40. He has _____ his keys again.",
                options: ["lose", "lost", "losed"],
                correct: 1
            },
            {
                question: "41. My sister, along with her friends, _____ coming.",
                options: ["is", "are", "am"],
                correct: 0
            },
            {
                question: "42. She advised _____ earlier.",
                options: ["to leave", "leaving", "leave"],
                correct: 1
            },
            {
                question: "43. If she _____ harder, she would succeed.",
                options: ["works", "worked", "would work"],
                correct: 1
            },
            {
                question: "44. He is good _____ playing guitar.",
                options: ["in", "at", "for"],
                correct: 1
            },
            {
                question: "45. I'm used to _____ up early.",
                options: ["wake", "waking", "woken"],
                correct: 1
            },
            {
                question: "46. The number of unemployed people _____ rising.",
                options: ["is", "are", "were"],
                correct: 0
            },
            {
                question: "47. She objected _____ treated like a child.",
                options: ["to be", "to being", "being"],
                correct: 1
            },
            {
                question: "48. He _____ me that he was leaving.",
                options: ["said", "told", "spoke"],
                correct: 1
            },
            {
                question: "49. The movie was _____ than I expected.",
                options: ["more better", "better", "best"],
                correct: 1
            },
            {
                question: "50. It's time we _____ home.",
                options: ["go", "went", "have gone"],
                correct: 1
            },
            {
                question: "51. Not only the students but also the teacher _____ surprised.",
                options: ["was", "were", "are"],
                correct: 0
            },
            {
                question: "52. He is interested in _____ a new language.",
                options: ["learn", "to learn", "learning"],
                correct: 2
            },
            {
                question: "53. I wish I _____ speak French fluently.",
                options: ["can", "could", "would"],
                correct: 1
            },
            {
                question: "54. She spends hours _____ TV.",
                options: ["to watch", "watch", "watching"],
                correct: 2
            },
            {
                question: "55. The problem is _____ to solve.",
                options: ["enough easy", "easy enough", "easily enough"],
                correct: 1
            },
            {
                question: "56. He is _____ honest person.",
                options: ["a", "an", "the"],
                correct: 0
            },
            {
                question: "57. They accused him _____ stealing.",
                options: ["for", "of", "with"],
                correct: 1
            },
            {
                question: "58. I have known her _____ five years.",
                options: ["since", "for", "from"],
                correct: 1
            },
            {
                question: "59. She prevented me _____ going alone.",
                options: ["from", "to", "of"],
                correct: 0
            },
            {
                question: "60. The harder you try, _____ you achieve.",
                options: ["the less", "less", "lesser"],
                correct: 0
            },
            {
                question: "61. He _____ be at home by now.",
                options: ["must", "can", "dare"],
                correct: 0
            },
            {
                question: "62. You needn't _____ if you don't want to.",
                options: ["come", "to come", "coming"],
                correct: 0
            },
            {
                question: "63. The window was broken by _____.",
                options: ["he", "him", "his"],
                correct: 1
            },
            {
                question: "64. Let's go for a walk, _____?",
                options: ["will we", "shall we", "do we"],
                correct: 1
            },
            {
                question: "65. She can't help _____ when she sees him.",
                options: ["laugh", "laughing", "to laugh"],
                correct: 1
            },
            {
                question: "66. I have a lot of work _____ today.",
                options: ["do", "to do", "doing"],
                correct: 1
            },
            {
                question: "67. He is looking forward _____ the weekend.",
                options: ["to", "for", "at"],
                correct: 0
            },
            {
                question: "68. This is the hotel _____ I stayed last year.",
                options: ["which", "where", "that"],
                correct: 1
            },
            {
                question: "69. She is afraid _____ spiders.",
                options: ["from", "of", "with"],
                correct: 1
            },
            {
                question: "70. I regret _____ you that you failed.",
                options: ["to tell", "telling", "tell"],
                correct: 1
            },
            {
                question: "71. He kept _____ the same question.",
                options: ["ask", "to ask", "asking"],
                correct: 2
            },
            {
                question: "72. She decided _____ the job.",
                options: ["to accept", "accepting", "accept"],
                correct: 0
            },
            {
                question: "73. They are capable _____ more than that.",
                options: ["to do", "of doing", "for doing"],
                correct: 1
            },
            {
                question: "74. The coffee is too hot _____.",
                options: ["to drink", "drinking", "for drink"],
                correct: 0
            },
            {
                question: "75. He succeeded _____ the exam.",
                options: ["to pass", "in passing", "for passing"],
                correct: 1
            },
            {
                question: "76. I'm not used to _____ in a big city.",
                options: ["live", "living", "lived"],
                correct: 1
            },
            {
                question: "77. She apologized _____ late.",
                options: ["to be", "for being", "of being"],
                correct: 1
            },
            {
                question: "78. They are thinking _____ moving abroad.",
                options: ["to", "of", "for"],
                correct: 1
            },
            {
                question: "79. He insisted _____ paying the bill.",
                options: ["on", "to", "for"],
                correct: 0
            },
            {
                question: "80. This needs _____.",
                options: ["to clean", "cleaning", "clean"],
                correct: 1
            },
            {
                question: "81. I can't afford _____ a new car.",
                options: ["to buy", "buying", "buy"],
                correct: 0
            },
            {
                question: "82. She denied _____ the money.",
                options: ["to steal", "stealing", "steal"],
                correct: 1
            },
            {
                question: "83. He pretended _____ asleep.",
                options: ["to be", "being", "be"],
                correct: 0
            },
            {
                question: "84. They threatened _____ us.",
                options: ["to sue", "suing", "sue"],
                correct: 0
            },
            {
                question: "85. She is very good _____ math.",
                options: ["in", "at", "for"],
                correct: 1
            },
            {
                question: "86. He is different _____ his brother.",
                options: ["of", "than", "from"],
                correct: 2
            },
            {
                question: "87. I'm tired _____ waiting.",
                options: ["from", "of", "with"],
                correct: 1
            },
            {
                question: "88. She is responsible _____ training new staff.",
                options: ["for", "to", "of"],
                correct: 0
            },
            {
                question: "89. He is married _____ a doctor.",
                options: ["with", "to", "for"],
                correct: 1
            },
            {
                question: "90. I agree _____ you completely.",
                options: ["to", "with", "for"],
                correct: 1
            },
            {
                question: "91. She suffers _____ headaches.",
                options: ["from", "of", "with"],
                correct: 0
            },
            {
                question: "92. He is interested _____ photography.",
                options: ["in", "at", "for"],
                correct: 0
            },
            {
                question: "93. Please turn _____ the light. It's dark.",
                options: ["of", "off", "on"],
                correct: 2
            },
            {
                question: "94. She broke _____ with her boyfriend.",
                options: ["up", "down", "out"],
                correct: 0
            },
            {
                question: "95. I ran _____ an old friend yesterday.",
                options: ["over", "into", "out"],
                correct: 1
            },
            {
                question: "96. He takes _____ his father in many ways.",
                options: ["after", "over", "off"],
                correct: 0
            },
            {
                question: "97. The meeting was called _____.",
                options: ["off", "out", "of"],
                correct: 0
            },
            {
                question: "98. She looked _____ the word in a dictionary.",
                options: ["for", "up", "after"],
                correct: 1
            },
            {
                question: "99. I can't put _____ with this noise anymore.",
                options: ["up", "off", "out"],
                correct: 0
            },
            {
                question: "100. The plane took _____ an hour late.",
                options: ["off", "out", "over"],
                correct: 0
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
