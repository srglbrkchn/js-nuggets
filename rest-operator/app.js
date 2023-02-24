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

// rest operator in a function
const getAvg = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average = scores.reduce((total, item) => {
    return (total += item) / scores.length;
  }, 0);
  console.log(average);
};

// getAvg(person.name, 55, 66, 20, 100);

const testScores = [44, 59, 99];
getAvg(person.name, ...testScores);
