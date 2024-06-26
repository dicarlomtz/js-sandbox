
// can be paused and resumed
function* createGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = createGenerator();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

const array = [1, 2, 3];
const iterator = array[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
