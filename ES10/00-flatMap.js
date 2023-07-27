// FlatMap return a matrix or array given a principal matrix.
const arrayNumbers = [
    1,
    2,
    [3,4,5,44,3,2],
    [1,12,12],
    [12,12,12]
]
// To acces to the deep level of running the elements.
console.log(arrayNumbers)
const flatArray = arrayNumbers.flat(3)
console.log(flatArray)


// Flatmap returns a new array with the logical of the calbacks that we can pass.
const array = [1,2,3,4,5]
const array2 = array.flatMap((number =>  number ** 2))
console.log(array2)

