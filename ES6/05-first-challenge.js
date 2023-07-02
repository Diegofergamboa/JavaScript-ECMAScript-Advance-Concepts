// In this challenge you will receive two JSON objects for parameters.

// Using the spread operator, you must combine both objects into one. It is possible that you may not be sent either of the two objects or neither, so you should use these by default, in their respective order:

// JSON 1:

// {
//     name: "Mr. Michi",
//     food: "Fish"
// }

// JSON 2:

// {
//     age: 12,
//     color: "White"
// }

// The solution should have an input and output like the following, remember that you may or may not be sent the parameters.

// Input:

// solution({
//     name: "Whiskers",
//     food: "Chicken"
// }),

// Output:

// {
//     name: "Whiskers",
//     food: "Pollito",
//     age: 12,
//     color: "White"
// }


const joinJson = (
    firstJson = {
        name: 'Mr. Michi',
        food: 'Pescado',
    },
    secondJSon = {
        age: 12,
        color: 'Blanco'
    }
) => {
    const joinedJson = {
        ...firstJson,
        ...secondJSon
    }
    return joinedJson
}

const result = joinJson()
console.log(result)