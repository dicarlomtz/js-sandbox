console.log(Array.prototype);
Array.prototype.asd = () => {
  console.log('asd');
};
// Array.asd();

Array.asd = () => {
  console.log('asdasds');
};
Array.asd();

console.log(Object.getPrototypeOf(Array));

const func = (hola) => {
  console.log(arguments);
}

func(123);