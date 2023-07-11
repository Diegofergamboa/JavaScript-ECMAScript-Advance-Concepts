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
        console.log(`Hey, I'm speaking here`);
        // Check line 20 to understand this.
        return 'This is the end of the execution'; // Output: 'This is the end of the execution' after the return statement
    }
}

// The next step is to create a new object based on our class.
const firstUser = new Users();
console.log(firstUser.speak()); // Output: 'Default property or method given by the constructor', 'Hey, I'm speaking here', 'This is the end of the execution'
// Note that there is an 'undefined' at the end. This is because the speak() method is not returning any value to the calling context in the instance we created called firstUser.

class Companies {
    // Setup of the properties.
    // This properties ´ll have all the instances created from this "Companies" principal class 
    constructor(brandName, employees) {
        this.brandName = brandName
        this.employees = employees
    }

    // Way to configure the reach of the output of the variable
    getBrandName() {
        return `${this.brandName}`
    }
    // Way to configure it out the property of brandName
    setBrandName(newBrandName) {
        this.brandName = newBrandName
    }
}


// On this code line the new instance from the company is saved and is passing out the params of the company name and the employees number.
const brandOne = new Companies('developerCompany', 12)
// Reaching the first brand name
brandOne.getBrandName()
// Changing the property of the company name
brandOne.brandName = 'NewBrandNameOverWrite'
// As is seem, it´s not necessary to access for example to the .set to change the property 

//! Example with a data fetch()

// example for a class that obtains data with the fetch method from different APIs.
class Data {
    // This with the case of we want to access for example for the products or the views from an API.
    constructor(url, resource) {
        this.uri = `${url}/${resource}`
    }

    // This is a method called fetchData, this method gives the data using the URI given in the code above.
    async fetchData(uri) {
        try {
            const response = await fetch(uri);
            const contentType = response.headers.get('content-type');
            let data;

            // This is a validator if the response of the API is an object (as the case of the fake store) or just a JSON response
            if (contentType && contentType.includes('application/json')) {
                data = await response.json();
            } else {
                data = await response.text();
            }

            console.log(data);
        } catch (error) {
            console.error(`Error on fetching the data from the API: ${error}`);
        } finally {
            console.log('Execution of the fetch completed');
        }
    }

    // this method give the result of the data given above.
    getData() {
        this.fetchData(this.uri)
    }
}

// Obtaining the data from different APIs.
// Here i´m using instances from the principal class
const platziAPI = new Data('https://api.escuelajs.co/api/v1', 'products')
const fakeStoreAPI = new Data('https://fakestoreapi.com', 'users')

// An entering to the main method of the principal object class "Data"
fakeStoreAPI.getData()