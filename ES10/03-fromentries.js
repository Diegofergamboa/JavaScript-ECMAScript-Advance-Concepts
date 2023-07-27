const entries = new Map([['name', 'valueOfTheName'], ['age', 26], ['country', 'CO']])
// With this structure we can convert into an object an array with this structure.
console.log(Object.fromEntries(entries))