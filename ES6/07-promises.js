// Promises are created on this JS version.


// Structure of a promise
const anotherFunction = () =>  {
    // initialization of the code
    // A promise receives a callback function
    return new Promise((resolve, reject) => {
        // initialData simulates the response that we will provide
        let initialData = ''
        // condition represents the condition of our promise, whether it is rejected or not. It can be data from an API, etc.
        const condition = false
        // Here's the magic, the heart of how promises work
        // This is a ternary operator, but it can also be written using an if statement.
        // if (condition) {
        //     initialData = 'Resolve promise';
        // } else {
        //     initialData = 'Reject promise';
        // }
        // return initialData;

        // Using the ternary operator to resolve or reject the promise
        return (condition) ? resolve(initialData = 'Resolve promise') : reject(initialData = 'Reject Promise')
    })
}


anotherFunction()
    .then(response => console.table('response on resolve =>' , response))
    .catch(error => console.error('response on reject => ', error))
