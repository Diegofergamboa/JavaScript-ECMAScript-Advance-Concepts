const string = 'Hello';
console.log(string.padStart(7,'hi')); //

/*output:
hiHello
*/

console.log(string.padStart(5,'hi'));

/*output:
Hello
*/

console.log(string.padStart(8,'hi')); //Toma los 5 elmentos de Hello y rellena con hih para llegar a 8

/*output:
hihHello
*/

console.log(string.padStart(10,'hi'));

/*output:
hihihHello
*/

console.log(string.padStart(10,'_'));

/*output:
_____Hello
*/

console.log(string.padStart(6,'_'));

/*output:
_Hello
*/

console.log(string.padEnd(6,'_')); //Rellena al final de la palabra

/*output:
Hello_
*/