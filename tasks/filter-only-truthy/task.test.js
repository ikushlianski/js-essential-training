import {people, peopleWithCredit} from './task';
import {peopleWithCredit_solution} from './task.solution';

describe('Find only people with credit', () => {
  test('suggested solution', () => {
    const result = peopleWithCredit_solution(people)

    expect(result).toEqual(expect.arrayContaining([
      { name: 'Amelia', age: 14, hasCredit: 1 },
      { name: 'Justin', age: 44, hasCredit: true }
    ]))
  });

  test('your solution', () => {
    const result = peopleWithCredit(people)

    expect(result).toEqual(expect.arrayContaining([
      { name: 'Amelia', age: 14, hasCredit: 1 },
      { name: 'Justin', age: 44, hasCredit: true }
    ]))
  });
});
