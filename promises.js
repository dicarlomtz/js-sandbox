// Composition for running asynchronous operations concurrently
const p1 = new Promise((resolve, reject) => {
  resolve('p1');
});

const p2 = new Promise((resolve, reject) => {
  resolve('p2')
});

const p3 = new Promise((resolve, reject) => {
  reject('p3')
});

//reject all if at least one reject
// Promise.all([p1, p2, p3]).then((res) => {
//   console.log(res); // arr of responses
// }).catch((err) => {
//   console.log(err);
// })

// resolves all, but specifies if fulfilled or rejected
// Promise.allSettled([p1, p2, p3]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// resolves first fulfilled, rejects if all rejected
// returns a AggregateError with all errors
// Promise.any([p3]).then((res) => {
//   console.log(res);
// }).catch((err) => {
//   console.log(err);
// });


// resolves first fulfilled, rejects if all rejected, like in .all
Promise.race([p1, p2, p3]).then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});