const gene = {
  first: "gene",
  last: "belcher",
  city: "new jersey",
  siblings: {
    olderSister: "tina",
    youngerSister: "louise",
  },
};

const {
  last: lastName,
  first,
  city,
  zip,
  siblings: { youngerSister },
} = gene;

// console.log(first, lastName, city, zip, youngerSister);

function printPerson({ first, last, siblings: { youngerSister: younger } }) {
  // const {
  //   first,
  //   last,
  //   siblings: { olderSister },
  // } = person;
  console.log(first, last, younger);
}

printPerson(gene);
