const person = {
  name: "Rick",
  age: 77,
  country: "US",
};

const clone1 = { ...person };
const clone2 = { ...person };
const samePerson = person;


person.age++;
person.country = `FR`;

console.log("Person:", person);
console.log("Clone1:", clone1);
console.log("Clone2:", clone2);
console.log("SamePerson:", samePerson);
