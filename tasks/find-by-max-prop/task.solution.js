export function getPeopleWithMaxAge_solution(people) {
  const peopleToSort = [...people];

  const peopleWithMaxAge = peopleToSort
    .sort((person1, person2) => person2.age - person1.age)
    .splice(0, 1)

  const otherPeopleWithSameMaxAge = peopleToSort.filter(
    person => person.age === peopleWithMaxAge[0].age
  )

  peopleWithMaxAge.push(...otherPeopleWithSameMaxAge);

  return peopleWithMaxAge
}

/**
 * Check yourself:
 *
 * Why do we copy the array on line 2?
 *
 * What does splice return?
 *
 * What if we did not use the spread operator on line 12?
 */
