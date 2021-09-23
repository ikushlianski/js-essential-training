import {Human_Solution} from './task.solution';

describe('', () => {
  it('suggested solution', () => {
    const human = new Human_Solution('green')
    const sentence = human.talk()

    expect(sentence).toBe('My eye color is green')
  });

  it('your solution', () => {
    const human = new Human('green')
    const sentence = human.talk()

    expect(sentence).toBe('My eye color is green')
  });
});
