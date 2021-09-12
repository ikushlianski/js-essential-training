import {getPeopleWithMaxAge, people} from './task';

describe('get people with max age', () => {
  it('should get people with max age', () => {
    const result = getPeopleWithMaxAge(people, 2)

    expect(result).toEqual([
      { name: 'Justin', age: 44, duration: 2 },
      { name: 'Boris', age: 44, duration: 2 },
    ])
  });
});
