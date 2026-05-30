// Quiz Application Core Module
class GrammarQuiz {
  constructor(quizData) {
    this.quizzes = quizData.quizzes;
    this.currentLevel = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.isQuizActive = false;
  }

  // Get all available levels
  getLevels() {
    return this.quizzes.map(q => ({
      level: q.level,
      name: q.name,
      totalQuestions: q.totalQuestions
    }));
  }

  // Start a quiz at specific level
  startQuiz(level) {
    const quiz = this.quizzes.find(q => q.level === level);
    if (!quiz) {
      throw new Error(`Quiz level ${level} not found`);
    }
    this.currentLevel = quiz;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.isQuizActive = true;
    return this.currentLevel;
  }

  // Get current question
  getCurrentQuestion() {
    if (!this.isQuizActive || !this.currentLevel) {
      return null;
    }
    return this.currentLevel.questions[this.currentQuestionIndex];
  }

  // Submit answer
  submitAnswer(selectedAnswer) {
    const currentQuestion = this.getCurrentQuestion();
    if (!currentQuestion) {
      return null;
    }

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    this.userAnswers.push({
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selectedAnswer: selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect: isCorrect,
      explanation: currentQuestion.explanation,
      options: currentQuestion.options
    });

    if (isCorrect) {
      this.score++;
    }

    return {
      isCorrect: isCorrect,
      correctAnswer: currentQuestion.correctAnswer,
      explanation: currentQuestion.explanation
    };
  }

  // Move to next question
  nextQuestion() {
    if (this.currentQuestionIndex < this.currentLevel.questions.length - 1) {
      this.currentQuestionIndex++;
      return true;
    }
    this.isQuizActive = false;
    return false;
  }

  // Check if quiz is complete
  isQuizComplete() {
    return this.currentQuestionIndex >= this.currentLevel.questions.length - 1 && this.userAnswers.length === this.currentLevel.questions.length;
  }

  // Get quiz results
  getResults() {
    const totalQuestions = this.currentLevel.questions.length;
    const percentage = (this.score / totalQuestions) * 100;
    
    return {
      level: this.currentLevel.level,
      levelName: this.currentLevel.name,
      totalQuestions: totalQuestions,
      correctAnswers: this.score,
      wrongAnswers: totalQuestions - this.score,
      percentage: percentage.toFixed(2),
      grade: this.getGrade(percentage),
      answers: this.userAnswers
    };
  }

  // Get grade based on percentage
  getGrade(percentage) {
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B';
    if (percentage >= 60) return 'C';
    if (percentage >= 50) return 'D';
    return 'F';
  }

  // Get progress
  getProgress() {
    const totalQuestions = this.currentLevel.questions.length;
    return {
      currentQuestion: this.currentQuestionIndex + 1,
      totalQuestions: totalQuestions,
      percentage: ((this.currentQuestionIndex + 1) / totalQuestions) * 100
    };
  }

  // Reset quiz
  resetQuiz() {
    this.currentLevel = null;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = [];
    this.isQuizActive = false;
  }
}

// Export for Node.js/Module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GrammarQuiz;
}
