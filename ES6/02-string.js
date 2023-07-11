// The template literals allow to us have functionalities with the strings and objects

const hello = 'hello'
const world = 'world'

// Before, we have to concatenate with + or ','
const phrase = hello + ' ' + world

// Thats why here exists another friendly propose
const literalPhrase = `${hello} ${world}`

// multi - line strings. Before ECMAScript we have to set for example \n for a break-down line  as the next example.

const lorem = 'this is an example for the first line \n'
const lorem2 = 'this is the second string after line jump'

// With ECMAScript we can just made that jump over here.

const templateString = `this is the first line
    this is the second line
`

console.log(templateString)