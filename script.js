// Quiz Data - Organized by Easy and Difficult levels
const quizzes = [
    // EASY QUIZZES
    {
        level: 'easy',
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
        level: 'easy',
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
        level: 'easy',
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
        level: 'easy',
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
        level: 'easy',
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
            },
            {
                question: "21. The company whose shares _____ sharply last week has recovered.",
                options: ["fell", "fallen", "had fell"],
                correct: 0
            },
            {
                question: "22. Supposing you _____ the lottery, what would you do?",
                options: ["win", "won", "had won"],
                correct: 1
            },
            {
                question: "23. He is the sort of person to _____ I cannot entrust my secrets.",
                options: ["who", "whom", "which"],
                correct: 1
            },
            {
                question: "24. The storm prevented us _____ the summit.",
                options: ["to reach", "from reaching", "of reaching"],
                correct: 1
            },
            {
                question: "25. Not only _____ late, but he also forgot the documents.",
                options: ["was he", "he was", "did he be"],
                correct: 0
            },
            {
                question: "26. I wish I _____ that comment about her family.",
                options: ["never made", "had never made", "would never make"],
                correct: 1
            },
            {
                question: "27. The painting _____ to be a masterpiece is actually a forgery.",
                options: ["thought", "thinking", "being thought"],
                correct: 0
            },
            {
                question: "28. His knowledge of the subject _____ far beyond his years.",
                options: ["are", "is", "were"],
                correct: 1
            },
            {
                question: "29. She left the party early, _____ to feel unwell.",
                options: ["claiming", "and claimed", "she claimed"],
                correct: 0
            },
            {
                question: "30. Little _____ that the project would take so long.",
                options: ["we realized", "did we realize", "we did realize"],
                correct: 1
            },
            {
                question: "31. The idea deserves _____.",
                options: ["to explore", "exploring", "being explored"],
                correct: 1
            },
            {
                question: "32. I'm not accustomed to _____ treated in such a manner.",
                options: ["be", "being", "have been"],
                correct: 1
            },
            {
                question: "33. The committee's decision, after hours of debate, _____ finally announced.",
                options: ["were", "was", "have been"],
                correct: 1
            },
            {
                question: "34. The more you practice, _____ you will make mistakes.",
                options: ["the fewer", "less", "the less"],
                correct: 0
            },
            {
                question: "35. He denied _____ at the scene of the crime.",
                options: ["to have been", "having been", "to be"],
                correct: 1
            },
            {
                question: "36. Only after the police arrived _____ what had happened.",
                options: ["we understood", "did we understand", "understood we"],
                correct: 1
            },
            {
                question: "37. This is the room _____ the president used to work.",
                options: ["which", "where", "in that"],
                correct: 1
            },
            {
                question: "38. She regretted _____ him the truth, as it caused a rift.",
                options: ["to tell", "telling", "tell"],
                correct: 1
            },
            {
                question: "39. The data, much of which _____ unreliable, was discarded.",
                options: ["were", "was", "being"],
                correct: 0
            },
            {
                question: "40. _____ our best player injured, we lost the match.",
                options: ["With", "Having", "Because"],
                correct: 0
            },
            {
                question: "41. I'd rather you _____ smoke in here.",
                options: ["don't", "didn't", "won't"],
                correct: 1
            },
            {
                question: "42. He was so tired that he lay down and _____ asleep instantly.",
                options: ["felt", "fell", "fall"],
                correct: 1
            },
            {
                question: "43. The proposal is worth _____ seriously.",
                options: ["to consider", "considering", "of considering"],
                correct: 1
            },
            {
                question: "44. Scarcely _____ the car when the warning light came on.",
                options: ["I had started", "had I started", "did I start"],
                correct: 1
            },
            {
                question: "45. There is no point in _____ angry about it now.",
                options: ["get", "getting", "to get"],
                correct: 1
            },
            {
                question: "46. She seems _____ everything.",
                options: ["to know", "knowing", "know"],
                correct: 0
            },
            {
                question: "47. The job would require _____ long hours.",
                options: ["to work", "working", "work"],
                correct: 1
            },
            {
                question: "48. If he _____ the money, he would have bought the house.",
                options: ["had had", "had", "would have"],
                correct: 0
            },
            {
                question: "49. Under no circumstances _____ the alarm without permission.",
                options: ["you should trigger", "should you trigger", "you trigger"],
                correct: 1
            },
            {
                question: "50. The whole issue needs _____ differently.",
                options: ["handling", "to handle", "being handled"],
                correct: 0
            },
            {
                question: "51. He was caught _____ a false statement.",
                options: ["to make", "making", "make"],
                correct: 1
            },
            {
                question: "52. The idea of _____ a party appealed to everyone.",
                options: ["having", "have", "had"],
                correct: 0
            },
            {
                question: "53. You are required _____ your identity before entry.",
                options: ["to show", "showing", "show"],
                correct: 0
            },
            {
                question: "54. The suspect admitted _____ the crime.",
                options: ["to commit", "committing", "commit"],
                correct: 1
            },
            {
                question: "55. The longer she waited, the _____ she became.",
                options: ["more anxious", "most anxious", "anxious"],
                correct: 0
            },
            {
                question: "56. I would have finished on time but I _____ interrupted.",
                options: ["kept", "was kept", "kept being"],
                correct: 1
            },
            {
                question: "57. The house, the roof _____ was damaged, needs repairs.",
                options: ["of which", "which", "whose"],
                correct: 0
            },
            {
                question: "58. He is not as smart as _____.",
                options: ["I", "me", "myself"],
                correct: 1
            },
            {
                question: "59. The police are looking for a man _____ tall and blond.",
                options: ["who is", "is", "he is"],
                correct: 0
            },
            {
                question: "60. _____ in the rain, I caught a cold.",
                options: ["Walked", "Walking", "Having walked"],
                correct: 2
            },
            {
                question: "61. The decision will affect each and every one of _____.",
                options: ["we", "us", "ours"],
                correct: 1
            },
            {
                question: "62. They failed _____ the deadline.",
                options: ["meeting", "to meet", "meet"],
                correct: 1
            },
            {
                question: "63. I recall _____ him at the conference last spring.",
                options: ["to see", "see", "seeing"],
                correct: 2
            },
            {
                question: "64. The more complex the problem, _____ the challenge.",
                options: ["greater", "the greater", "more great"],
                correct: 1
            },
            {
                question: "65. She could not help _____ at his absurd excuse.",
                options: ["laugh", "laughing", "to laugh"],
                correct: 1
            },
            {
                question: "66. The refugees, most of _____ have no shelter, are in urgent need.",
                options: ["whom", "who", "which"],
                correct: 0
            },
            {
                question: "67. Not a single word _____ since the argument began.",
                options: ["she said", "did she say", "she has said"],
                correct: 1
            },
            {
                question: "68. The chances of _____ the match are slim.",
                options: ["us winning", "our winning", "we winning"],
                correct: 1
            },
            {
                question: "69. He avoided _____ me in the eye.",
                options: ["to look", "looking", "look"],
                correct: 1
            },
            {
                question: "70. I would sooner _____ than admit defeat.",
                options: ["die", "to die", "dying"],
                correct: 0
            },
            {
                question: "71. The painting is believed _____ by a famous artist.",
                options: ["to be painted", "to have been painted", "being painted"],
                correct: 1
            },
            {
                question: "72. Had the weather been better, we _____ camping.",
                options: ["would go", "would have gone", "went"],
                correct: 1
            },
            {
                question: "73. I'm considering _____ a new career.",
                options: ["to start", "starting", "start"],
                correct: 1
            },
            {
                question: "74. The problem is _____ to ignore.",
                options: ["too significant", "so significant", "significant enough"],
                correct: 0
            },
            {
                question: "75. On no account _____ the security code to anyone.",
                options: ["you should give", "should you give", "you give"],
                correct: 1
            },
            {
                question: "76. She is not used to _____ in such noisy conditions.",
                options: ["work", "working", "have worked"],
                correct: 1
            },
            {
                question: "77. The proposal deserves _____ attention.",
                options: ["our", "us", "we"],
                correct: 0
            },
            {
                question: "78. Try _____ the button again; it might work.",
                options: ["press", "pressing", "to press"],
                correct: 1
            },
            {
                question: "79. I remember _____ the door before leaving.",
                options: ["locking", "to lock", "lock"],
                correct: 0
            },
            {
                question: "80. I regret _____ you that your application has been rejected.",
                options: ["to inform", "informing", "inform"],
                correct: 1
            },
            {
                question: "81. He went on _____ for hours after the meeting.",
                options: ["talking", "to talk", "talk"],
                correct: 0
            },
            {
                question: "82. They stopped _____ coffee at the station.",
                options: ["having", "to have", "have"],
                correct: 1
            },
            {
                question: "83. Please stop _____ so much noise.",
                options: ["to make", "making", "make"],
                correct: 1
            },
            {
                question: "84. I tried _____ to the manager, but he was unavailable.",
                options: ["speaking", "to speak", "speak"],
                correct: 1
            },
            {
                question: "85. She meant _____ you, but she forgot.",
                options: ["calling", "to call", "call"],
                correct: 1
            },
            {
                question: "86. If only I _____ the courage to tell her.",
                options: ["had had", "had", "would have"],
                correct: 0
            },
            {
                question: "87. The data _____ collected, but the analysis is pending.",
                options: ["have been", "has been", "is been"],
                correct: 1
            },
            {
                question: "88. Each of the participants _____ given a certificate.",
                options: ["were", "was", "have been"],
                correct: 1
            },
            {
                question: "89. The team, including the substitutes, _____ celebrating the victory.",
                options: ["was", "were", "have"],
                correct: 0
            },
            {
                question: "90. Mathematics _____ always been my weakest subject.",
                options: ["have", "has", "are"],
                correct: 1
            },
            {
                question: "91. The faculty _____ divided on the issue of online exams.",
                options: ["is", "are", "has"],
                correct: 1
            },
            {
                question: "92. Not only the students but also the dean _____ agreed to the proposal.",
                options: ["have", "has", "are"],
                correct: 1
            },
            {
                question: "93. A number of issues _____ yet to be resolved.",
                options: ["is", "are", "has"],
                correct: 1
            },
            {
                question: "94. The majority of the population _____ in favor of the reform.",
                options: ["is", "are", "were"],
                correct: 1
            },
            {
                question: "95. The pair of shoes _____ too expensive.",
                options: ["are", "is", "were"],
                correct: 1
            },
            {
                question: "96. Every one of the copies _____ a misprint.",
                options: ["have", "has", "are"],
                correct: 1
            },
            {
                question: "97. Neither the manager nor his employees _____ satisfied.",
                options: ["is", "are", "am"],
                correct: 1
            },
            {
                question: "98. The singer, along with her musicians, _____ rehearsing.",
                options: ["is", "are", "have"],
                correct: 0
            },
            {
                question: "99. Fifty dollars _____ too much to pay for that.",
                options: ["are", "is", "were"],
                correct: 1
            },
            {
                question: "100. The committee _____ issued their final report.",
                options: ["has", "have", "is"],
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
});
