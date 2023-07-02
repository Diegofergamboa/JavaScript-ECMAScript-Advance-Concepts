// Basic example of how a class works
class Users {
    // The constructor is the starting point of the new class created based on this capsule or box called Users.
    // The constructor can have special properties, such as methods or properties.
    constructor() {
        // In this example, the constructor simply outputs 'Default property or method given by the constructor'.
        console.log('Default property or method given by the constructor');
    }

    // Classes can have methods. In this example, the method for Users is 'speak'.
    speak() {
        console.log('Hey, I\'m speaking here');
        // Check line 20 to understand this.
        return 'This is the end of the execution'; // Output: 'This is the end of the execution' after the return statement
    }
}

// The next step is to create a new object based on our class.
const firstUser = new Users();
console.log(firstUser.speak()); // Output: 'Default property or method given by the constructor', 'Hey, I'm speaking here', 'This is the end of the execution'
// Note that there is an 'undefined' at the end. This is because the speak() method is not returning any value to the calling context in the instance we created called firstUser.

//! Example with a data fetch()


