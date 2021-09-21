import {return5_solution} from './task.solution';
import {return5} from './task';

describe('A promise returning 5', () => {
  it('suggested solution', async () => {
    const result = await return5_solution()
    expect(result).toBe(5)
  });

  it('your solution', async () => {
    const result = await return5()
    expect(result).toBe(5)
  });
});
