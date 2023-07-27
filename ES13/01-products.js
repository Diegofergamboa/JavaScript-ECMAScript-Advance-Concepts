const url = 'https://api.escuelajs.co/api/v1/products'

// We don´t need now to use an async function to fetch the data
const  response = await fetch(`${url}`)
const dataProducts = await response.json()

export {  dataProducts }