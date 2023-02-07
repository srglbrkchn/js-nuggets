// rest operators array
const fruits = ["passion fruit", "apple", "strawberry", "banana"];
const [first, second, ...restOfTheFruits] = fruits;
console.log(first, second, restOfTheFruits);

const specificFruit = restOfTheFruits.find((fruit) => {
  return fruit === "strawberry";
});
console.log(specificFruit);

// rest operator objects
const person = {
  name: "gene",
  lastName: "belcher",
  job: "burger boy",
};

const { job, ...rest } = person;
console.log(job, rest);
