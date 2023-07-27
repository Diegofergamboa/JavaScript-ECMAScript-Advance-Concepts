// We can now with the spread operator use it in objects.
const user = {
    username: 'Diego',
    age: 26,
    country: 'CO'
}

// We´re assign to values, the another values of the object except username that is assigned.
const { username, ...values } = user
console.log(values)