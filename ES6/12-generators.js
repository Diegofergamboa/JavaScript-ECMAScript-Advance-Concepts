// Usefull tools for give iterations that return values based in the intern logical

// Defined by the symbol after function word.
function* iterate(array) {
    // yield returns based in the case
    for (let value of array) {
        yield value;
    }
}

// Generating in a instance from the principal generator
const it = iterate(['Primero', 'Segundo', 'Name', 'AnotherName'])
// Next is another native method
// Is remenbering the state of the excute of the app
console.log(it.next().value) // -> Return the first value of the array
console.log(it.next().value) // -> Return the SECOND value of the array
console.log(it.next().value) // -> Return the THIRD value of the array
console.log(it.next().value) // -> Return the FOUR value of the array
//* If the array step doesn´t exists will not be displayed or will be displayed as a undefined
