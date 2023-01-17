const people = [
  { name: "john", age: 20, job: "developer", salary: 100 },
  { name: "nancy", age: 23, job: "vet", salary: 300 },
  { name: "nina", age: 40, job: "waiter", salary: 200 },
  { name: "malcom", age: 36, job: "chef", salary: 10 },
]

const dailyTotal = people.reduce((total, person) => {
  total += person.salary
  return total
}, 0)

console.log(dailyTotal)
