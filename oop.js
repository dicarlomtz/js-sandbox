class Person {
  _name; // private keyword only on ts
  _age; // private keyword only on ts

  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this._name} and I am ${this._age} years old`);
  }

}

const p1 = new Person('John', 30);
console.log(p1._name);

class Student extends Person {
  _id;
  constructor(name, age, id) {
    super(name, age);
    this._id = id;
  }
}

const s1 = new Student('John', 30, 1);
s1.greet();

console.log(Object.getPrototypeOf(s1));

// this still relys on the prototype chain
// this means that this is delegation

class SomePrivacy {
  #name;

  constructor(name) {
    this.#name = name; // private, same for private methods
  }

  greet() {
    console.log(`Hello, my name is ${this.#name}`);
  }
}

class SomeOtherPrivacy extends SomePrivacy {

  constructor(name) {
    super(name);
  }

  greet() {
    // error
    // console.log(`Hello, my name is ${this.#name}`);
  }
}

const somePrivacy = new SomePrivacy('John');
somePrivacy.greet();
// somePrivacy.#name; syntax error

// JSON is a text-based data format following JavaScript object syntax

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(data);
}

// function getPromise() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('hello');
//       reject('error');
//     }, 1000);
//   });
// }

// ecmascript is a standard, js is built on top of the ecmascript specification and tell us how js should
// Workr, how should be structured, how should be used and the syntax