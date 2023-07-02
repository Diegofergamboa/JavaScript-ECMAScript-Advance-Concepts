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

