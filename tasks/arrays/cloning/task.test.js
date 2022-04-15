import {agesCloned1, agesCloned2, agesCloned3} from './task';
import {
  ages,
  agesCloned1 as solution1,
  agesCloned2 as solution2,
  agesCloned3 as solution3
} from './task.solution';


describe('', () => {
  it('suggested solution', () => {
    expect(solution1).toEqual(ages)
    expect(solution2).toEqual(ages)
    expect(solution3).toEqual(ages)
  });

  it('your solution', () => {
    expect(agesCloned1).toEqual(ages)
    expect(agesCloned2).toEqual(ages)
    expect(agesCloned3).toEqual(ages)
  });
});
