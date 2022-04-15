import {namesFromServerSolution} from './task.solution';
import {namesFromServer} from './task';

describe('', () => {
  it('suggested solution', async () => {
    const result = await namesFromServerSolution

    expect(result).toEqual(["John", "Kevin", "Albert"])
  });

  it('your solution', async () => {
    const result = await namesFromServer

    expect(result).toEqual(["John", "Kevin", "Albert"])
  });
});
