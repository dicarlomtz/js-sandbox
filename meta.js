const obj = {
  name: 'John',
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const loggerHandler = {
  apply: (target, thisArg, argumentsList) => {
    console.log(target, thisArg, argumentsList);
    target.apply(thisArg, argumentsList);
  }
}

const proxy = new Proxy(obj, loggerHandler);
proxy.greet();