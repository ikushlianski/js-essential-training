export const people = [
  { name: 'Justin', age: 44, duration: 2 },
  { name: 'Boris', age: 44, duration: 2 },
  { name: 'Masha', age: 29, duration: 4 },
  { name: 'Amelia', age: 14, duration: 3 },
]

export function getPeopleWithMaxAge_solution(people) {
  const peopleToSort = [...people];

  const [personWithMaxAge] = peopleToSort.sort(
    (person1, person2) => {
      return person2.age - person1.age
    })
  .splice(0, 1)

  const peopleWithMaxAge = [];

  peopleWithMaxAge.push(personWithMaxAge)

  const otherPeopleWithSameMaxAge = peopleToSort.filter(person => person.age === peopleWithMaxAge[0].age)

  peopleWithMaxAge.push(...otherPeopleWithSameMaxAge);

  return peopleWithMaxAge
}
