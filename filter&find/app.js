const peopel = [
  { name: "john", age: 20, job: "developer" },
  { name: "nancy", age: 23, job: "vet" },
  { name: "nina", age: 40, job: "waiter" },
  { name: "malcom", age: 36, job: "chef" },
]

const fruits = ["apple", "orange", "passion fruit", "lemon"]

const youngPeople = peopel.filter((person) => {
  //   if (person.age <= 25) {
  //     return person
  //   }
  return person.age < 30
})
const waiters = peopel.filter((person) => person.job === "waiter")
// console.log(waiters)

const john = peopel.find((person) => person.name === "john")
// console.log(john)
const nancy = peopel.filter((person) => person.name === "nancy")
console.log(nancy[0].job)

const oldPerson = peopel.find((person) => person.age > 60)
// console.log(oldPerson)
const randPerson = peopel.find((person) => person.age < 36)
// console.log(randPerson)

const fruit = fruits.find((fruit) => fruit === "banana")
// console.log(fruit)
