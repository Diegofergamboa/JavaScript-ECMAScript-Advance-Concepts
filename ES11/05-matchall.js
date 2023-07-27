// Work with regex.

const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana, Kiwi, Orange, Pine'

for (const match of fruit.matchAll(regex)) {
    console.log(match)
}
// Output =>
// [
//     'Apple',
//     'Apple',
//     index: 0,
//     input: 'Apple, Banana, Kiwi, Orange, Pine',
//     groups: undefined
//   ]