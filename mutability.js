const person = {
  name: "Rick",
  age: 77,
  country: "US",
};

const clone1 = {
  name: "Rick",
  age: 77,
  country: "US",
};

const clone2 = {
  name: "Rick",
  age: 77,
  country: "US",
};


person.age++;
person.country = `FR`;

const samePerson = { ...person };

console.log("Person:", person);
console.log("Clone1:", clone1);
console.log("Clone2:", clone2);
console.log("SamePerson:", samePerson);
