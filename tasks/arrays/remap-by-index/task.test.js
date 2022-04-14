import {remapByIndex_solution} from './task.solution';
import {people, remapByIndex} from './task';

describe('', () => {
  it('suggested solution', () => {
    const result = remapByIndex_solution(people)

    expect(result).toEqual({
      1: 'Harry',
      2: 'Ron',
      3: 'Hermione',
    })
  });

  it('your solution', () => {
    const result = remapByIndex(people)

    expect(result).toEqual({
      1: 'Harry',
      2: 'Ron',
      3: 'Hermione',
    })
  });
});
