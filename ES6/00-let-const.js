// With this options the variable is reassigned 
var name = 'Diego'
name = 'Fernando'

// Let variable
let fruit = 'kiwi'
fruit = 'banana'
console.log(fruit)

// Const variable
const animal = 'dog'

const fruits = () => {
    if(true) {
        // Only the var, can be global assigned
        var fruit1 = 'Apple' // Function scope
        // Block Scope
        let fruit2 = 'Kiwi' // Doesn`t have the global scope, so is block scope
        const fruit3 = 'banana' // Doesn`t have the global scope, so is block scope
    }
    console.log('fruit1', fruit1)
    console.log('fruit2', fruit2)
    console.log('fruit3', fruit3)
}

fruits()
