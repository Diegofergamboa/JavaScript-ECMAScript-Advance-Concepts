// If eveything is resolved in the promise

const promise1 = new Promise((resolve, reject) => reject('Reject'))
const promise2 = new Promise((resolve, reject) => resolve('Resolve'))
const promise3 = new Promise((resolve, reject) => resolve('Resolve 2'))

// Returns an array with all the Promises that we´re passing.

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response))

// Output =>
    // [
    //     { status: 'rejected', reason: 'Reject' },
    //     { status: 'fulfilled', value: 'Resolve' },
    //     { status: 'fulfilled', value: 'Resolve 2' }
    //   ]