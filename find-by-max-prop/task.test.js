import {getPeopleWithMaxAge, people} from './task';
import {getPeopleWithMaxAge_solution} from './task.solution';

describe('get people with max age', () => {
  it('suggested solution', () => {
    const result = getPeopleWithMaxAge_solution(people)

    expect(result).toEqual(expect.arrayContaining([
      { name: 'Justin', age: 44, duration: 2 },
      { name: 'Boris', age: 44, duration: 2 }
    ]))
  });

  it('your solution', () => {
    const result = getPeopleWithMaxAge(people)

    expect(result).toEqual(expect.arrayContaining([
      { name: 'Justin', age: 44, duration: 2 },
      { name: 'Boris', age: 44, duration: 2 }
    ]))
  });
});
