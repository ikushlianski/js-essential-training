import {people, peopleWithCredit} from './task';

describe('Find only people with credit', () => {
  it('should output people with credit', () => {
    const result = peopleWithCredit(people)

    expect(result).toEqual([
      { name: 'Justin', age: 44, hasCredit: true },
      { name: 'Amelia', age: 14, hasCredit: 1 },
    ])
  });
});
