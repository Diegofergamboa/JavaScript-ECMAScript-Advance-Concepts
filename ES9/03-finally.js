const anotherFunction = () => {
    const conditional = false
    return new Promise((resolve, reject) => {
        if (conditional) {
            resolve('Resolved')
        } else {
            reject('Rejected')
        }
    })
}


anotherFunction()
    .then(response => console.log(`Resolve with this response: ${response}`))
    .catch(response => console.error(`Resolve with this response: ${response}`))
    // This cases are important when we need to show a loading input while the data shows.
    .finally(() => console.log('Finally'))