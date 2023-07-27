// The method returns only the first answer of the promise that is solved.
const promise1 = new Promise((resolve, reject) => reject('Reject'))
const promise2 = new Promise((resolve, reject) => resolve('Resolve FIRST'))
const promise3 = new Promise((resolve, reject) => resolve('Resolve SECOND'))

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))
