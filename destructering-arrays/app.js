const fruits = ["orange", "banana", "lemon"];
const friends = ["ross", "monice", "phibie", "chandler", "rachel", "joey"];

const [nerd, neatFreak, spookey, sarcastic, spoiled, idiot, janator] = friends;
console.log(nerd, spoiled, idiot, janator);

const [, , spook, , , dummy] = friends;
console.log(spook, dummy);

let looney = "chandler";
let smartMouth = "phibie";

[smartMouth, looney] = [looney, smartMouth];

console.log(smartMouth, looney);
