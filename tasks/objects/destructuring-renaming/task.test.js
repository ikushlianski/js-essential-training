import {getHeight} from './task';
import {getHeight_solution} from './task.solution';

describe('', () => {
  it('suggested solution', () => {
    const person = {
      name: 'Stef',
      height_cm: 178
    }

    expect(getHeight_solution(person)).toBe(178)
  });

  it('your solution', () => {
    const person = {
      name: 'Stef',
      height_cm: 178
    }

    expect(getHeight(person)).toBe(178)
  });
});
