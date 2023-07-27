// We can now create private methods, to acces only into the same class.
class User {};

//const newUser = new User ();

class User {
//Method
greeting() {
    return "hello";
}
};

const Diego = new user();
console.log(Diego.greeting());
const anotherName = new user();
console.log(anotherName.greeting());

// Constructor

class User { 
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "hello";
    }
}

// Setter & Getters

class user {
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }

    // Methods
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const Diego1 = new user ("Diegofergamboa", 15);
console.log(Diego1.uAge);
console.log(Diego1.uAge = 20);