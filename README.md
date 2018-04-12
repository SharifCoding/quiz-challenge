![quiz](./quiz.jpeg)

# Quiz Challenge :question:
Make an object-oriented quiz game using the following user stories:

### Let's have a look at the first User Story:
```
As a quiz maker
So that I can challenge users
I want to be able to create a question with an answer
```

<details>
<summary>Expand - First User Story</summary>
<p>

The line we look at here is:
```
I want to be able to create a question with an answer
```
This could be translated to:

| Object   | Methods | Properties |
|----------|---------|------------|
| Question |         | challenge  |
|          |         | answer     |

`challenge` and `answer` are set as properties, we have a `Question` object so we'll describe a `Question` constructor.

In a new file `__tests__/question.test.js`, write the following code:
```js
describe('constructor', () => {
  it('has the given question property', () => {
      const question1 = new Question();
      expect(question1.challenge).toEqual('foo');
  })
  it('has the given answer property', () => {
    const question1 = new Question(jest.fn(), 'bar');
    expect(question1.answer).toEqual('bar');
  })
})
```
In `src/question.js`, add the following code:
```js
function Question(challenge, answer) {
  this.challenge = challenge;
  this.answer = answer;
}
```

</p>
</details>

----

### Let's have a look at the second User Story:
```
As a player
So I know if my guess is correct
I want to be able to verify my answer to a question
```

<details>
<summary>Expand - Second User Story</summary>
<p>

The line we look at here is:
```
I want to be able to verify my answer to a question
```
This could be translated to:

| Object   | Methods | Properties |
|----------|---------|------------|
| Question |         | challenge  |
|          |         | answer     |
|          | verify  |            |

`verify` is a method, added to `Question` constructor.

In a new file `__tests__/question.test.js`, write the following code:
```js
describe('verify', () => {
  it('returns true if the answer matches', () => {
    const question = new Question(jest.fn(), 'bar');
    expect(question.verify('bar')).toBe(true);
  });
})
```

In `src/question.js`, add the following code:
```js
Question.prototype.verify = function verify(guess) {
  return guess === this.answer;
}
```

</p>
</details>

----

### Let's have a look at the third User Story:
```
As a quiz maker
So I can group related questions together
I want to be able to create a quiz with a list of questions
```

<details>
<summary>Expand - Third User Story</summary>
<p>

The line we look at here is:
```
I want to be able to create a quiz with a list of questions
```
This could be translated to:

| Object   | Methods | Properties |
|----------|---------|------------|
| Question |         | challenge  |
|          |         | answer     |
|          | verify  |            |
| Quiz     |         | questions  |

`questions` is assumed as a property, we have a `quiz` object so we'll describe a `quiz` constructor.

In a new file `__tests__/quiz.test.js`, write the following code:
```js
describe('quiz constructor', () => {
  it('has the given list of questions', () => {
    const questions = [jest.fn(), jest.fn()];
    const quiz = new Quiz(questions);
    expect(quiz.questions).toEqual(questions);
  });
})
```
Alternative unit test:
```js
describe('quiz constructor', () => {
  it('has the given list of questions', () => {
    const q1 = jest.fn();
    const q2 = jest.fn();
    const quiz = new Quiz(questions);
    expect(quiz.questions).toEqual(q1, q2);
  });
})
```
In `src/quiz.js`, add the following code:
```js
function Quiz(questions) {
  this.questions = questions;
}
```

</p>
</details>

----

### Let's have a look at the fourth User Story:
```
As a quiz maker
So I can keep track of my quizzes
I want to provide a quiz with a name/identifier
```

<details>
<summary>Expand - Fourth User Story</summary>
<p>

The line we look at here is:
```
I want to provide a quiz with a name/identifier
```
This could be translated to:

| Object   | Methods | Properties |
|----------|---------|------------|
| Question |         | challenge  |
|          |         | answer     |
|          | verify  |            |
| Quiz     |         | questions  |
|          |         | name       |

`name` is a property, added to `Quiz` constructor.

</p>
</details>

----

### Let's have a look at the fifth User Story:
```
As a player
So I know what question to answer
I want to be able to read the current question
```

<details>
<summary>Expand - Fifth User Story</summary>
<p>

The line we look at here is:
```
I want to be able to read the current question
```
This could be translated to:

| Object   | Methods             | Properties |
|----------|---------------------|------------|
| Question |                     | challenge  |
|          |                     | answer     |
|          | verify              |            |
| Quiz     |                     | questions  |
|          | readCurrentQuestion |            |

`readCurrentQuestion` is a method, added to `Quiz` constructor.

In a new file `__tests__/quiz.test.js`, write the following code:
```js
describe('readCurrentQuestion', () => {
  it('returns the challege of the current question', () => {
    const mockChallenge = jest.fn();
    const questions = [{ challege: mockChallenge }];
    const quiz = new Quiz(questions);
    expect(quiz.readCurrentQuestion()).toEqual(mockChallenge);
  });
})
```
In `src/quiz.js`, add the following code:
```js
Quiz.prototype.readCurrentQuestion = function readCurrentQuestion() {
    return this.questions[0].challenge;
}
```

</p>
</details>

----

### Let's have a look at the sixth User Story:
```
As a player
So I can play the game
I want to be able to provide an answer to the current question
```

<details>
<summary>Expand - Sixth User Story</summary>
<p>

The line we look at here is:
```
I want to be able to provide an answer to the current question
```
This could be translated to:

| Object   | Methods               | Properties |
|----------|-----------------------|------------|
| Question |                       | challenge  |
|          |                       | answer     |
|          | verify                |            |
| Quiz     |                       | questions  |
|          | readCurrentQuestion   |            |
|          | verifyCurrentQuestion |            |

`verifyCurrentQuestion` is a method, added to `Quiz` constructor.

In a new file `__tests__/quiz.test.js`, write the following code:
```js
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
})
```
In `src/quiz.js`, add the following code:
```js
Quiz.prototype.verifyCurrentQuestion = function verifyCurrentQuestion(guess) {
    return this.questions[0].verify(guess);
}
```

</p>
</details>

----

### Let's have a look at the seventh User Story:
```
As a player
So I can progress through a game
I want to move onto the next question after I provide an answer to a question
```
<details>
<summary>Expand - Seventh User Story</summary>
<p>

The line we look at here is:
```
I want to move onto the next question after I provide an answer to a question
```
This could be translated to:

| Object   | Methods               | Properties |
|----------|-----------------------|------------|
| Question |                       | challenge  |
|          |                       | answer     |
|          | verify                |            |
| Quiz     |                       | questions  |
|          | readCurrentQuestion   |            |
|          | verifyCurrentQuestion |            |
|          | nextQuestion          |            |
|          |                       | quizIndex  |

`nextQuestion` is a method, `quizIndex` is a property, added to `Quiz` constructor.

In a new file `__tests__/quiz.test.js`, write the following code:
```js
describe('nextQuestion', () => {
  it('move to next question from Q.1', () => {
    const questions = [jest.fn(), jest.fn()];
    const quiz = new Quiz(questions);
    quiz.nextQuestion();
    expect(quiz.quizIndex).toEqual(2);
  });
});
```
In `src/quiz.js`, add the following property `quizIndex` with initial value to constructor, and method `nextQuestion`:
```js
function Quiz(questions) {
  this.questions = questions;
  // start from array[1] to match first question (Q1).
  this.quizIndex = 1;
}
Quiz.prototype.nextQuestion = function nextQuestion() {
  // this.quizIndex ++;
  this.quizIndex += 1;
};
```

</p>
</details>

----

### Let's have a look at the eighth User Story:
```
As a player
So I can keep track of how I'm doing
I want the game to track my score
```

<details>
<summary>Expand - Eighth User Story</summary>
<p>

The line we look at here is:
```
I want the game to track my score
```
This could be translated to:

| Object   | Methods               | Properties |
|----------|-----------------------|------------|
| Question |                       | challenge  |
|          |                       | answer     |
|          | verify                |            |
| Quiz     |                       | questions  |
|          | readCurrentQuestion   |            |
|          | verifyCurrentQuestion |            |
|          |                       | score      |
|          | nextQuestion          |            |
|          |                       | quizIndex  |

Already got `verifyCurrentQuestion` which will need to be extended to include `score` as a property.

In a new file `__tests__/quiz.test.js`, write the following code:
```js
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
```
In `src/quiz.js`, add the following property `score` with initial value to constructor:
```js
function Quiz(questions) {
  this.questions = questions;
  this.quizIndex = 1;
  this.score = 0;
}
Quiz.prototype.verifyCurrentQuestion = function verifyCurrentQuestion(guess) {
  if (this.questions[0].verify(guess)) {
    this.score += 1;
  }
  return this.questions[0].verify(guess);
};
```

</p>
</details>

----

### Let's have a look at the ninth User Story:
```
As a player
So I can know when I have answered all of the questions
I want to be told that a quiz is finished when trying to read or answer a question
```

<details>
<summary>Expand - Ninth User Story</summary>
<p>

The line we look at here is:
```
I want to be told that a quiz is finished when trying to read or answer a question
```
This could be translated to:

| Object   | Methods               | Properties |
|----------|-----------------------|------------|
| Question |                       | challenge  |
|          |                       | answer     |
|          | verify                |            |
| Quiz     |                       | questions  |
|          | readCurrentQuestion   |            |
|          |                       | isFinished |
|          | verifyCurrentQuestion |            |
|          |                       | score      |
|          |                       | isFinished |
|          | nextQuestion          |            |
|          |                       | quizIndex  |

Need to include `isFinished` as a property for methods `readCurrentQuestion` and `verifyCurrentQuestion`.

Property `isFinished` is a function based on `quizIndex` value where the Quiz is completed once it reaches the last array, with the modification applied to the `readCurrentQuestion` and `verifyCurrentQuestion` functions. Much simiplar method would be to use the getter methods which will require one object to cover the two modification mentioned.

**What a getter methods is...**
Getter methods allow access to a property that returns a dynamically computed value - they are methods that can be used like properties - they allow us to report on an objects state, without actually managing a new piece of state. Meaning, the less state you have to manage, the simpler your code will be.

When you create a method, Quiz.prototype is an object, and you are setting a property on that object. However for getter methods, they have to be created on an object literal in `src/quiz.js`:
```js
Quiz.prototype = {
  get isFinished() {
    return this.quizIndex >= this.questions.length;;
  }
}
```
Implementing a unit test for testing one of the condition for `quiz.isFinished` getter method in `__tests__/quiz.test.js`:
```js
describe('readCurrentQuestion', () => {
  it('throws an error when game is finished', () => {
    const mockChallenge = jest.fn();
    const questions = [{ challenge: mockChallenge }];
    const quiz = new Quiz(questions);
    quiz.quizIndex = 11;
    expect(quiz.readCurrentQuestion()).toEqual(false);
  });
});
```
Note; there are ten questions in the `index.js` file, therefore `quizIndex = 10`.

Updated code added to objects `readCurrentQuestion` and `verifyCurrentQuestion`:
```js
Quiz.prototype.readCurrentQuestion = function readCurrentQuestion() {
  if (!this.isFinished) throw new Error('Time Up!');
  return this.questions[this.quizIndex].challenge;
};
Quiz.prototype.verifyCurrentQuestion = function verifyCurrentQuestion(guess) {
  if (!this.isFinished) throw new Error('Time Up!');
  else if (this.questions[this.quizIndex].verify(guess)) this.score += 1;
  return this.questions[this.quizIndex].verify(guess);
};
```

</p>
</details>

----

### Let's have a look at the tenth User Story:
```
As a player
So I can keep track of my achievements
I want my high scores for each quiz to be recorded on my profile after completing it
```

<details>
<summary>Expand - Tenth User Story</summary>
<p>

The line we look at here is:
```
I want my high scores for each quiz to be recorded on my profile after completing it
```
This could be translated to:

| Object   | Methods               | Properties |
|----------|-----------------------|------------|
| Question |                       | challenge  |
|          |                       | answer     |
|          | verify                |            |
| Quiz     |                       | questions  |
|          | readCurrentQuestion   |            |
|          |                       | isFinished |
|          | verifyCurrentQuestion |            |
|          |                       | score      |
|          |                       | isFinished |
|          | nextQuestion          |            |
|          |                       | quizIndex  |
|          | highScore             |            |
|          |                       | finalScore |

Need to include `highScore` as a property for the constructor `Quiz`.

Implementing a unit test for testing the condition for `quiz.highScore` in `__tests__/quiz.test.js`:
```js
describe('highScore', () => {
  it('high scores recorded after each completion', () => {
    const quiz = new Quiz(jest.fn());
    quiz.score = 6;
    expect(quiz.highScore()).toEqual('Congrats! You have a new high score!');
  });
});
```
Updated code added to include property `quiz.finalScore`, method `quiz.highScore`, and a magic number:
```js
const TOP_SCORE = 5;
function Quiz(questions) {
  this.questions = questions;
  this.quizIndex = 0;
  this.score = 0;
  this.finalScore = TOP_SCORE;
}
Quiz.prototype.highScore = function highScore() {
  if (this.score > this.finalScore) {
    this.finalScore = this.score;
    return ('Congrats! You have a new high score!');
  } return ('Try again. High score not beaten');
};
```

</p>
</details>

----

### Let's have a look at the eleventh User Story:
```
As a player
So I can brag to my friends when I do the best
I want new high scores for a quiz to be recorded along with my name
```

<details>
<summary>Expand - Eleventh User Story</summary>
<p>

The line we look at here is:
```
I want new high scores for a quiz to be recorded along with my name
```
This could be translated to:

| Object   | Methods               | Properties |
|----------|-----------------------|------------|
| Question |                       | challenge  |
|          |                       | answer     |
|          | verify                |            |
| Quiz     |                       | questions  |
|          | readCurrentQuestion   |            |
|          |                       | isFinished |
|          | verifyCurrentQuestion |            |
|          |                       | score      |
|          |                       | isFinished |
|          | nextQuestion          |            |
|          |                       | quizIndex  |
|          | finalScore            |            |
|          |                       | highScore  |
|          | finalResult           |            |
|          |                       | name       |

Need to include `finalResult` as a method for the object `Quiz`.

Implementing a unit test for testing the condition for `quiz.finalResult` in `__tests__/quiz.test.js`:
```js
describe('finalResult', () => {
  it('display new high scores along with name', () => {
    const quiz = new Quiz(jest.fn());
    quiz.name = 'Bruce Forsyth';
    quiz.score = 10;
    expect(quiz.finalResult()).toEqual('Hi Bruce Forsyth your final score is 10');
  });
});
```
Updated code added to include new method `quiz.finalResult`:
```js
Quiz.prototype.finalResult = function finalResult() {
  return (`Hi ${this.name} your final score is ${this.score}`);
};
```

</p>
</details>
