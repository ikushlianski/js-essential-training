import {getPersonByDuration, people} from './task-1';

describe('Task 1', () => {
  it('should get person Masha if duration is 2', () => {
    const result = getPersonByDuration(people, 2)

    expect(result).toEqual({ name: 'Masha', age: 29, duration: 4 })
  });
});
