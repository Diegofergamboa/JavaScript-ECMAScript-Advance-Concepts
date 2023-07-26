// "At Michis' nursery 'Michilango,' they are registering new kittens, but they need a way to identify them.

// Your task will be to provide a function getId() that generates these identifiers. Using a .next() method, you can move to the next identifier, and through the .value property, you can obtain the value of the new identifier.

// Every time you call the function in the following way, it should return a completely different new identifier:

// const id = getId();
// id.next().value

// The identifier can be of any type (numbers or strings), the only condition is that each new identifier returned must be completely different from the ones returned previously.

// You must use JavaScript generators to solve this exercise. The solution should have an input and output like the following:

// Example 1:

// Input:

// const id = getId()
// id.next().value
// id.next().value
// id.next().value

// Output:

// 1
// 2
// 3

// Example 2:

// Input:

// const id = getId()
// id.next().value
// id.next().value
// id.next().value

// Output:

// AX6SF5S
// G7QNW01
// KH3BR02"

function* getId(array) {
    let numberId = 0
    for (let value of array) {
        numberId = numberId + 1
        yield `${numberId}-${value}`;
    }
}

const id = getId(['Primero', 'Segundo', 'Name', 'AnotherName'])
console.log(id.next().value)
