function sortByAge(people) {
  function compareByAge(a, b) {
    return a.age - b.age;
  }

  people.sort(compareByAge);

  return people;
}

const peopleArray = [
  { name: "hadi", age: 30 },
  { name: "hajar", age: 25 },
  { name: "ahmad", age: 40 },
  { name: "ali", age: 22 },
];

const sortedPeople = sortByAge(peopleArray);
console.log(sortedPeople);
