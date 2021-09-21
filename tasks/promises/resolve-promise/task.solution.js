import {fetchData} from './task';

export function return5_solution() {
  return fetchData().then(num => num)
}

/**
 * Check yourself:
 *
 * - why do we have to use return keyword inside the `return5_solution` function?
 *
 */
