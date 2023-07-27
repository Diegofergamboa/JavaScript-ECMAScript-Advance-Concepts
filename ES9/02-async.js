async function* anotherGeneratorFunction() {
    yield await Promise.resolve(1)
    yield await Promise.resolve(2)
    yield await Promise.resolve(3)
}

const other = anotherGeneratorFunction()
other.next().then(response => console.log(`Response: ${response.value}`))
other.next().then(response => console.log(`Response: ${response.value}`))
other.next().then(response => console.log(`Response: ${response.value}`))
// The final output of this generator function is 1,2,3,and the console below showed but, that caused because we´re waiting for the application of the generator function.
console.log('This should be a last execution as a print')


// As another feature we can check that the arrays can be used in a async / await function
async function arrayOfNames(array) {
    for await (let value of array) {
        console.log(value)
    }
}

const names = arrayOfNames(['Diego', 'Fernando', 'Ortiz', 'Gamboa'])
console.log('After')