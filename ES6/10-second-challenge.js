import {getData} from './10-second-challenge-engine.js'

function solution() {
    getData()
        .then(response => console.log(response))
        .catch(error => console.error('response on reject => ', error))
}
solution()


// The solution of the code should be a .then or an wait solution because is the result of a Promise