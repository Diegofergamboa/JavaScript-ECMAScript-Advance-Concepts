// Here we are trying to execute a function that si not defined in the script
// So we can made the execution of the function and capture the error with a try / catch statement
try {
    hello();
} catch(error) {
    console.log(error)
}

// On this case it´s not neccesary the catch with an error, just with a console.log we can capture the information
try {
    functionDoesntExist()
} catch {
    console.log('An error ocurred in the functionDoesntExist Execution')
}