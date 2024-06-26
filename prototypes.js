// Prototypes are the mechanism by which JavaScript objects inherit features from one another

// Prototype Chain

// The primary purpose of prototypes in JavaScript is to enable and facilitate object inheritance and property delegation

const greetValue = () => {
  console.log(this.city);
}

const objectLiteral = {
  city: 'Madrid',
  greet() {
    console.log(`Hello, I live in ${this.city}`);
  },
}


// Every object in JavaScript has a built-in property, which is called its prototype
// The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
//The chain ends when we reach a prototype that has null for its own prototype
console.log(objectLiteral.toString());

console.log(Object.getPrototypeOf(objectLiteral));
objectLiteral.greet();

console.log('\n\nthe prototype of an object is not always a Object.prototype\n\n')

const date = new Date();
let object = date;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while(object);


console.log('\n\ncreate a prototype for another object\n\n')

const person = {
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const personNew = Object.create(person);
console.log(Object.getPrototypeOf(personNew));
person.greet();
personNew.greet();
personNew.name = 'John';
personNew.greet();
person.greet();

// All functions have a property named prototype.
// When you call a function as a constructor, this property is set as the prototype of the newly constructed object
// (by convention, in the property named __proto__).

const person1 = {
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

function Person(name) {
  this.name = name;
}

Object.assign(Person.prototype, person1); // assign person1 as Person.prototype
// Person.prototype.greet = personPrototype.greet

console.log(Object.getPrototypeOf(Person));
console.log(Object.getPrototypeOf(person1));

const p1 = new Person('John');
p1.greet();
person1.greet();

console.log(Object.hasOwn(p1, 'greet')); // false
console.log(Object.hasOwn(p1, 'name')); // true