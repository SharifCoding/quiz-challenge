/* globals describe it expect */
/* eslint-env jest */
const { Quiz } = require('../src/quiz');

describe('quiz constructor', () => {
  it('has the given list of questions', () => {
    const questions = [jest.fn(), jest.fn()];
    const quiz = new Quiz(questions);

    expect(quiz.questions).toEqual(questions);
  });
});

describe('readCurrentQuestion', () => {
  it('returns the challenge of the current question', () => {
    const mockChallenge = jest.fn();
    const questions = [{ challenge: mockChallenge }];
    const quiz = new Quiz(questions);

    expect(quiz.readCurrentQuestion()).toEqual(mockChallenge);
  });
  xit('throws an error when game is finished', () => {
    const quiz = new Quiz(jest.fn());
    quiz.quizIndex = 1;

    expect(quiz.readCurrentQuestion()).toBeTruthy();
    expect(quiz.readCurrentQuestion()).toBe('Time Up!');
  });
});

describe('verifyCurrentQuestion', () => {
  it('verifies the guess against the current question', () => {
    const mockGuess = jest.fn();
    const mockVerifyValue = jest.fn();
    const mockQuestion = {
      verify: jest.fn(() => mockVerifyValue),
    };
    const questions = [mockQuestion];
    const quiz = new Quiz(questions);
    const result = quiz.verifyCurrentQuestion(mockGuess);

    expect(result).toEqual(mockVerifyValue);
    expect(mockQuestion.verify).toHaveBeenCalledWith(mockGuess);
  });
});

describe('nextQuestion', () => {
  it('move to next question from Q.1', () => {
    const questions = [jest.fn(), jest.fn()];
    const quiz = new Quiz(questions);

    quiz.nextQuestion();

    expect(quiz.quizIndex).toEqual(1);
  });
  it('move to next question from Q.10', () => {
    const questions = [jest.fn(), jest.fn()];
    const quiz = new Quiz(questions);
    quiz.quizIndex = 10;

    quiz.nextQuestion();

    expect(quiz.quizIndex).toEqual(11);
  });
});

describe('verifyCurrentQuestion', () => {
  it('increase score if return true', () => {
    const mockQuestion = {
      verify: jest.fn(() => true),
    };
    const questions = [mockQuestion];
    const quiz = new Quiz(questions);

    quiz.verifyCurrentQuestion(jest.fn());

    expect(quiz.score).toEqual(1);
    expect(quiz.score).toBeTruthy();
  });
  it('score remains if return false', () => {
    const mockQuestion = {
      verify: jest.fn(() => false),
    };
    const questions = [mockQuestion];
    const quiz = new Quiz(questions);

    quiz.verifyCurrentQuestion(jest.fn());

    expect(quiz.score).toEqual(0);
    expect(quiz.score).toBeFalsy();
  });
  it('increase score to current total', () => {
    const mockQuestion = {
      verify: jest.fn(() => true),
    };
    const questions = [mockQuestion];
    const quiz = new Quiz(questions);

    quiz.verifyCurrentQuestion(jest.fn());
    quiz.score += 10;

    expect(quiz.score).toEqual(11);
    expect(quiz.score).toBeTruthy();
  });
});

describe('highScore', () => {
  it('high scores recorded after each completion', () => {
    const quiz = new Quiz(jest.fn());
    quiz.score = 6;

    expect(quiz.highScore()).toEqual('Congrats! You have a new high score!');
    expect(quiz.finalScore).toEqual(6);
  });
  it('high scores not met after completion', () => {
    const quiz = new Quiz(jest.fn());
    quiz.score = 5;

    expect(quiz.highScore()).toEqual('Try again. High score not beaten');
    expect(quiz.finalScore).toEqual(5);
  });
});

describe('finalResult', () => {
  it('display new score along with name', () => {
    const quiz = new Quiz(jest.fn());
    quiz.name = 'Bruce Forsyth';
    quiz.score = 10;

    expect(quiz.finalResult()).toEqual('Hi Bruce Forsyth your final score is 10');
  });
});
