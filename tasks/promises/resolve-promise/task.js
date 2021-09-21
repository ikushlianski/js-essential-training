/**
 * Task
 *
 * fetchData function will return number 5 in 250ms. Imagine this is data from some backend, which takes some time to fetch.
 *
 * Write a function that returns this data from `backend`
 */

export const fetchData = () => {
  const dataToReturn = 5

  return new Promise((resolve) => {
    setTimeout(resolve, 250, dataToReturn);
  })
}

export function return5() {

}
