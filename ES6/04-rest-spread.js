// With the apply of ECMAScript, we can work with acces to an especific item from an object or array due to the case.

function getFullName() {
    // Obtaining the user data
    return ["Diego", "Gamboa"];
}

// Using destructuring with arrays.
let [firstName, lastName] = getFullName();


const users = {
    username : 'Diego',
    id: 123
}
const {username , id} =  users

// Spread operator.

let person = {
    name: 'Diego',
    age: 23
}

let country = 'CO'

// We can allow to set from different arrays.
// Where is in another location we can put it on this stage of the variable.

let  data  = { ...person, country }

// Rest params
// This add all the values.

function sum(num , ...values) {
    console.log(values)
    return num + values[0]
}

const result = sum(1, 2, 3, 4, 4, 5, 6, 7, 8)
console.log(result)