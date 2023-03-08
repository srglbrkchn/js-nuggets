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

// the number of items per page we want
const itemsPerPage = 8;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({ length: pages }, (_, index) => {
  const start = index * itemsPerPage;
  const tempItems = items.slice(start, start + itemsPerPage);
  return tempItems;
});

console.log(newItems);
