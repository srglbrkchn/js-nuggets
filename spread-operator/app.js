const kaffee = "kaffee";
const letters = [...kaffee];
// console.log(letters);

const boys = ["mike", "john", "tom"];
const girls = ["lili", "sarah", "lilani"];
const bff = "malcom";

const friends = [...boys, bff, ...girls];

// reference
// const newFriends = friends;
// newFriends[0] = "utena";
// console.log(newFriends);
// console.log(friends);

// copy
const newFriends = [...friends];
newFriends[0] = "utena";
// console.log(newFriends);
// console.log(friends);

// spread operator objects
const person = { name: "gene", job: "berger boy" };
const newPerson = { ...person, city: "new jersey", name: "louise" };

console.log(person);
console.log(newPerson);
