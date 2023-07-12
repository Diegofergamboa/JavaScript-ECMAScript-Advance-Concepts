// Structure of any kind of function or variable that we want to share
const greeting = (string) => {
    return console.log(`I'm saying hello ${string}`)
}

// Example of a module with a normal export default
// The export can be do it using an export default or using a brackets syntax
export { greeting }
// export default greeting

