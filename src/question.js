// CONSTRUCTOR FUNCTION
function Question(challenge, answer) {
  this.challenge = challenge;
  this.answer = answer;
}

// OBJECTS PROTOTYPE
Question.prototype.verify = function verify(guess) {
  return this.answer === guess;
};

// EXPORTS FUNCTION
module.exports = {
  Question,
};
