const people = [
  {
    name: "Margarita",
    location: { street: "6039 Margarita", timezone: { offset: "+9:30" } },
  },
  {
    name: "Aiden",
    location: { street: "4302 Fairview Road" },
  },
  {
    name: "Elijah",
    location: { street: "4478 Brick Kiln Road", timezone: { offset: "+5:45" } },
  },
];

people.forEach((person) => {
  // use && operator
  // console.log(
  //   (person.location &&
  //     person.location.timezone &&
  //     person.location.timezone.offset) ||
  //     "+8:30"
  // );

  // use Optional chaining
  console.log(person?.location?.timezone?.offset || "+6:30");
});
