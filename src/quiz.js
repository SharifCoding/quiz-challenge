// MAGIC NUMBER
const TOP_SCORE = 5;

// CONSTRUCTOR FUNCTION
function Quiz(questions) {
  this.questions = questions;
  this.quizIndex = 0;
  this.score = 0;
  this.finalScore = TOP_SCORE;
  this.name = undefined;
}

// GETTER METHOD
Quiz.prototype = {
  get isFinished() {
    return this.quizIndex >= this.questions.length;
  },
};

// OBJECTS PROTOTYPE
Quiz.prototype.readCurrentQuestion = function readCurrentQuestion() {
  if (this.isFinished) throw new Error('Time Up!');
  // if (this.isFinished) return ('Time Up!');
  return this.questions[this.quizIndex].challenge;
};

Quiz.prototype.verifyCurrentQuestion = function verifyCurrentQuestion(guess) {
  if (this.isFinished) throw new Error('Time Up!');
  // if (this.isFinished) return ('Time Up!');
  else if (this.questions[this.quizIndex].verify(guess)) this.score += 1;
  return this.questions[this.quizIndex].verify(guess);
};

Quiz.prototype.nextQuestion = function nextQuestion() {
  this.quizIndex += 1;
};

Quiz.prototype.highScore = function highScore() {
  if (this.score > this.finalScore) {
    this.finalScore = this.score;
    return ('Congrats! You have a new high score!');
  } return ('Try again. High score not beaten');
};

Quiz.prototype.finalResult = function finalResult() {
  return (`Hi ${this.name} your final score is ${this.score}`);
};

// EXPORTS FUNCTION
module.exports = {
  Quiz,
};
