// Before ECMAScript update.
// This is the default config name.
function newUsers(name, age, country) {
    var name = name || 'Default name'
    var  age = age || 22
    var country =  country  || 'Default country'
}


// This is the new syntax with the ECMAScript with the default values.
function newAdmin(name = 'Default name', age = 23, country = 'USA') {
    return (name, age, country)
}
