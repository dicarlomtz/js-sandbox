function User(name) {
  this.name = name;
}

function Admin(name) {
  User.call(this, name);
}

console.log(User, typeof Object.getPrototypeOf(User));
console.log(Admin, typeof Object.getPrototypeOf(Admin));
console.log(Array, typeof Object.getPrototypeOf(Array));

User.prototype.greet = function() {
  console.log(`Hello, I'm ${this.name}`);
}

const admin = new User('John');
admin.greet();

Array.prototype.greet = function() {
  console.log('Hello, I am an array');
}

const arr = [1, 2, 3];
arr.greet();

