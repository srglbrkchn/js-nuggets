const customers = [
  {
    name: "alex",
    age: 33,
    job: "painter",
  },
  {
    name: "lili",
    age: 18,
    job: "waiter",
  },
  {
    name: "marco",
    age: 44,
    job: "waiter",
  },
  {
    name: "ali",
    age: 26,
    job: "actress ",
  },
]

function getAges(customer) {
  return customer.age * 2
}
const ages = customers.map(getAges)
console.log(ages)

const newCustomers = customers.map((customer) => {
  return {
    name: customer.name.toUpperCase(),
    newJob: "secratary",
  }
})
console.log(newCustomers)

const names = customers.map((customer) => {
  return `<h3>${customer.name}</h3>`
})
const result = document.getElementById("result")

result.innerHTML = names.join("").toUpperCase()
