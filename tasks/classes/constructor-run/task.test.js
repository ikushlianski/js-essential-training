import {Greeter_Solution} from './task.solution';
import {Greeter} from './task';

describe('Greeter!', () => {
  let consoleLogSpy

  beforeEach(() => {
    consoleLogSpy = jest.spyOn(console, 'log')
  })

  afterEach(() => {
    consoleLogSpy.mockRestore()
  })

  it('suggested solution', () => {
    new Greeter_Solution();

    expect(consoleLogSpy).toHaveBeenCalledWith('Hey!')
  });

  it('your solution', () => {
    new Greeter();

    expect(consoleLogSpy).toHaveBeenCalledWith('Hey!')
  });
});
