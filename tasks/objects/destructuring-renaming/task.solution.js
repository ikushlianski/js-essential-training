const person = {
  name: 'Maria',
  height_cm: 179
}

export function getHeight_solution(somePerson) {
  // do not write
  // const height_cm = somePerson.height_cm;
  // find alternative
  const { height_cm: height } = somePerson

  return height;
}

/**
 * Check yourself:
 *
 *
 */
