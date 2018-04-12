/* globals describe it expect */
/* eslint-env jest */
const { Question } = require('../src/question');

describe('constructor', () => {
  it('has the given question property', () => {
    const question1 = new Question('foo');

    expect(question1.challenge).toEqual('foo');
  });
  it('has the given answer property', () => {
    const question1 = new Question(jest.fn(), 'bar');

    expect(question1.answer).toEqual('bar');
  });
});

describe('verify', () => {
  it('returns true if the answer matches', () => {
    const question = new Question(jest.fn(), 'bar');

    expect(question.verify('bar')).toBe(true);
  });
});
