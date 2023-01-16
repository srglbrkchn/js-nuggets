const person = {
  name: "john",
}
console.log(person.name)
person.age = 33
console.log(person)

const items = {
  "featured-items": ["item1", "item2"],
}
console.log(items["featured-items"])
console.log(person["age"])

let appState = "error"
let keyName = "cookie"
const app = {
  [appState]: true,
}
app[keyName] = "unnecessary"
console.log(app)

const state = {
  loading: true,
  name: "",
  job: "",
}

function updateState(key, value) {
  state[key] = value
}
updateState("name", "john")
updateState("job", "dancer")
updateState("loading", false)
updateState("product", [])
updateState("name", "peter")
console.log(state)
