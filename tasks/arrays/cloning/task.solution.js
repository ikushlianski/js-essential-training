
/**
 * Check yourself:
 *
 *
 */

export const ages = [3, 2, 9, 10]

// todo clone using slice
export const agesCloned1 = ages.slice()

// todo clone using reduce
export const agesCloned2 = ages.reduce((acc, cur) => {
  acc.push(cur)

  return acc
}, [])

// todo clone the array without using array methods like slice or reduce
export const agesCloned3 = [...ages]
