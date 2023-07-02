/*-----------------------1st Challenge-------------------*/

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});

Promise.all([promise1, promise2, promise3])
.then((values)=>{ console.log(values) })
.catch((err)=>{ console.log(err) })