export function peopleWithCredit_solution(people) {
  return people.filter(person => Boolean(person.hasCredit))
}

