
// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array`

// • Test whether an item is not in a array


console.log("test equility with strings");

console.log("apple" =="apple")
let fruit = "orange"
console.log("apple" == fruit);

console.log("testing with lowercase")
console.log("Apple".toLowerCase() == "apple")

console.log("numerical test")
console.log(4>2)
console.log(4<2)

console.log("test with 'and' and 'or'" )
console.log(true && false)
console.log(false||true)

console.log("test an item whether in array")
let fruit1:string[]= ["apple","orange","cherry"]
console.log(fruit1.includes("apple"))


console.log("test an item whether  not in array")
console.log(!fruit1.includes("mango"))