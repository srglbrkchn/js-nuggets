const mango = "mango...";
// console.log(Array.from(mango));

const text = document.querySelectorAll(".text");
// console.log(text);

const newText = Array.from(text).find((item) => {
  if (item.textContent === "person") {
    return item;
  }
});
// console.log(newText);

const items = Array.from({ length: 120 }, (_, index) => {
  return index;
});

console.log(items);
