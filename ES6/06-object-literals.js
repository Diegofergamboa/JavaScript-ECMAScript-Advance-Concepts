// With this object, we can easily add default values and keys for our objects or arrays.

// The old example, for example, created a userAdmin. This example is mentioned above.
function oldUserAdmin(user, id, phone, country) {
    return {
        user: user,
        id: id,
        phone: phone,
        country: country,
    }
}

// But now, we can simply set the value without repeating the key. We can update it by assigning a new value to the variable.
function newUserAdmin(user, id, phone, country) {
    return {
        user,
        id,
        phone,
        country,
    }
}

// Here's another way to set the values in a custom order.
function setNewUsers(name, phone, id) {
    const publicReturn = {
        name,
        id,
        phone,
    }
    return publicReturn;
}

// The id is set after the phone, but as it seems in the parameters, it's in a different order. This works when we have various instances for our main constructor or function.
console.log(setNewUsers('Diego', 333333, 123)); // => { name: 'Diego', id: 123, phone: 333333 }
