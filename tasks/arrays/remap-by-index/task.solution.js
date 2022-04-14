export function remapByIndex_solution(people) {
  return people.reduce((finalObj, person) => {
    finalObj[person.id] = person.name;

    return finalObj
  }, {})
}

/**
 * Check yourself:
 *
 * What does the left side of code on line 3 do?
 *
 * What is the empty object on line 6?
 */
