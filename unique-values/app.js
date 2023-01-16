const menu = [
  {
    name: "boiled eggs",
    cathegory: "breakfast",
  },
  {
    name: "burger",
    cathegory: "lunch",
  },
  {
    name: "stake",
    cathegory: "lunch",
  },
  {
    name: "pancake",
    cathegory: "breakfast",
  },
  {
    name: "spaggeti",
    cathegory: "dinner",
  },
  {
    name: "sausage",
    cathegory: "dinner",
  },
  {
    name: "fish",
    cathegory: "lunch",
  },
]

const categories = [
  "all",
  ...new Set(
    menu.map((item) => {
      return item.cathegory
    })
  ),
]

const result = document.querySelector(".result")
result.innerHTML = categories
  .map((category) => {
    return `<button> ${category} </button>`
  })
  .join(" ")
