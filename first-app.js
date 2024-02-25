const person = {
  name: "Abinash",
  age: 30,
  greet() {
    console.log("Hi My name is " + this.name);
  },
};

console.log(person.greet());
