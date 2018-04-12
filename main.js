// Require the `Question` & `Quiz` functions into the `questions` list.
const Question = require('./src/question');
const Quiz = require('./src/quiz');

const questions = [
  new Question('What is the capital city of France?', 'Paris'),
  new Question('What is the largest of the Channel Islands?', 'Jersey'),
  new Question('In which US city would you find Manhattan, Brooklyn and the Bronx?', 'New York'),
  new Question('Which desert covers much of northern Africa?', 'The Sahara'),
  new Question('What is the capital city of Germany?', 'Berlin'),
  new Question('Which sea separates Europe from Africa?', 'The Mediterranean'),
  new Question('Which island country lies off China, Korea and Russia?', 'Japan'),
  new Question('What is the capital city of Spain?', 'Madrid'),
  new Question('Which Italian city is famous for its canals?', 'Venice'),
  new Question('In which country does the River Nile meet the sea?', 'Egypt'),
];

const quiz = new Quiz(questions);

// EXPORTS FUNCTION
module.exports = {
  quiz,
};
