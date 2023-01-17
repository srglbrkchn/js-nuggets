const cart = [
  {
    title: "Samsung Galaxy S7",
    price: 599.99,
    amount: 1,
  },
  {
    title: "Google pixel",
    price: 499.99,
    amount: 2,
  },
  {
    title: "Xiaomi Redmi Note 2",
    price: 699.99,
    amount: 4,
  },
  {
    title: "Xiaomi Redmi Note 5",
    price: 399.99,
    amount: 3,
  },
]

let { totalItems, cartTotal } = cart.reduce(
  (total, cartItem) => {
    const { amount, price } = cartItem
    // count items
    total.totalItems += amount
    // count sum
    total.cartTotal += amount * price
    return total
  },
  {
    totalItems: 0,
    cartTotal: 0,
  }
)

cartTotal = parseFloat(cartTotal.toFixed(2))
// console.log(total)
console.log(totalItems, cartTotal)
