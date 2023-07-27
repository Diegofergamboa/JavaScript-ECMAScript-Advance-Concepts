// To give more performance, we can call the functions that we need to export from a JS file.


// module.js
export function sayHello() {
    console.log('Hello');
}

// main.js
const btn = document.querySelector('#try');

btn.addEventListener('click', async () => {
    const { sayHello } = await import('./module');

    sayHello();
});