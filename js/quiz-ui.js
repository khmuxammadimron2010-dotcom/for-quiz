// Quiz UI Controller Module
class QuizUIController {
  constructor(quizInstance, containerId) {
    this.quiz = quizInstance;
    this.container = document.getElementById(containerId);
    this.currentScreen = 'home';
  }

  // Show home screen
  showHomeScreen() {
    this.currentScreen = 'home';
    const levels = this.quiz.getLevels();
    
    let html = `
      <div class="quiz-home">
        <h1>📚 English Grammar Quiz</h1>
        <p>Select your proficiency level:</p>
        <div class="levels-container">
    `;
    
    levels.forEach(level => {
      html += `
        <div class="level-card">
          <h3>${level.level}</h3>
          <p>${level.name}</p>
          <p class="question-count">${level.totalQuestions} Questions</p>
          <button onclick="quizController.startLevel('${level.level}')">Start</button>
        </div>
      `;
    });
    
    html += `
        </div>
      </div>
    `;
    
    this.container.innerHTML = html;
  }

  // Show quiz screen
  showQuizScreen() {
    this.currentScreen = 'quiz';
    const question = this.quiz.getCurrentQuestion();
    const progress = this.quiz.getProgress();
    
    if (!question) {
      this.showResultsScreen();
      return;
    }
    
    let html = `
      <div class="quiz-screen">
        <div class="quiz-header">
          <div class="level-badge">${this.quiz.currentLevel.level}</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress.percentage}%"></div>
          </div>
          <span class="progress-text">${progress.currentQuestion}/${progress.totalQuestions}</span>
        </div>
        
        <div class="quiz-content">
          <h2>Question ${question.id}</h2>
          <p class="question-text">${question.question}</p>
          
          <div class="options-container">
    `;
    
    Object.entries(question.options).forEach(([key, value]) => {
      html += `
        <label class="option-label">
          <input type="radio" name="answer" value="${key}" class="option-input">
          <span class="option-text">${key.toUpperCase()}) ${value}</span>
        </label>
      `;
    });
    
    html += `
          </div>
          
          <div class="quiz-actions">
            <button onclick="quizController.submitAnswer()" class="btn-submit">Submit Answer</button>
            <button onclick="quizController.showHomeScreen()" class="btn-quit">Quit Quiz</button>
          </div>
        </div>
      </div>
    `;
    
    this.container.innerHTML = html;
  }

  // Show results screen
  showResultsScreen() {
    this.currentScreen = 'results';
    const results = this.quiz.getResults();
    
    let html = `
      <div class="quiz-results">
        <h1>Quiz Complete! 🎉</h1>
        
        <div class="results-summary">
          <div class="score-display">
            <div class="score-circle">
              <div class="score-number">${results.percentage}%</div>
              <div class="score-grade">${results.grade}</div>
            </div>
          </div>
          
          <div class="results-stats">
            <p><strong>Level:</strong> ${results.levelName}</p>
            <p><strong>Correct Answers:</strong> <span class="correct">${results.correctAnswers}</span></p>
            <p><strong>Wrong Answers:</strong> <span class="wrong">${results.wrongAnswers}</span></p>
            <p><strong>Total Questions:</strong> ${results.totalQuestions}</p>
          </div>
        </div>
        
        <div class="detailed-results">
          <h2>Detailed Review</h2>
    `;
    
    results.answers.forEach((answer, index) => {
      const statusClass = answer.isCorrect ? 'correct' : 'incorrect';
      html += `
        <div class="answer-review ${statusClass}">
          <div class="answer-header">
            <span class="question-number">Q${answer.questionId}</span>
            <span class="answer-status">${answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
          </div>
          <p class="answer-question"><strong>Question:</strong> ${answer.question}</p>
          <p class="answer-selected"><strong>Your Answer:</strong> ${answer.options[answer.selectedAnswer]}</p>
          ${!answer.isCorrect ? `<p class="answer-correct"><strong>Correct Answer:</strong> ${answer.options[answer.correctAnswer]}</p>` : ''}
          <p class="answer-explanation"><strong>Explanation:</strong> ${answer.explanation}</p>
        </div>
      `;
    });
    
    html += `
        </div>
        
        <div class="results-actions">
          <button onclick="quizController.showHomeScreen()" class="btn-home">Back to Home</button>
          <button onclick="quizController.retakeQuiz()" class="btn-retake">Retake Quiz</button>
        </div>
      </div>
    `;
    
    this.container.innerHTML = html;
  }

  // Submit answer and show feedback
  submitAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (!selectedOption) {
      alert('Please select an answer');
      return;
    }
    
    const result = this.quiz.submitAnswer(selectedOption.value);
    this.showFeedback(result);
  }

  // Show answer feedback
  showFeedback(result) {
    const feedbackClass = result.isCorrect ? 'feedback-correct' : 'feedback-incorrect';
    const feedbackMessage = result.isCorrect ? '✓ Correct!' : '✗ Incorrect';
    
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = `feedback-overlay ${feedbackClass}`;
    feedbackDiv.innerHTML = `
      <div class="feedback-content">
        <h2>${feedbackMessage}</h2>
        <p class="explanation">${result.explanation}</p>
        <button onclick="quizController.nextQuestion()">
          ${this.quiz.isQuizComplete() ? 'View Results' : 'Next Question'}
        </button>
      </div>
    `;
    
    this.container.appendChild(feedbackDiv);
  }

  // Start quiz at level
  startLevel(level) {
    this.quiz.startQuiz(level);
    this.showQuizScreen();
  }

  // Move to next question
  nextQuestion() {
    const feedback = document.querySelector('.feedback-overlay');
    if (feedback) {
      feedback.remove();
    }
    
    if (this.quiz.isQuizComplete()) {
      this.showResultsScreen();
    } else if (this.quiz.nextQuestion()) {
      this.showQuizScreen();
    }
  }

  // Retake quiz
  retakeQuiz() {
    this.quiz.resetQuiz();
    this.startLevel(this.quiz.currentLevel?.level || 'A1');
  }
}

// Export for Module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuizUIController;
}
