// primitive
// 7 types : string, number, boolean, null, undefined, symbol, BigInt

// Non-primitive(reference)
// array, objects, functions

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol("123")
// console.log(id===anotherId);

const bigNumber = 263849974874237893473289n

const heroes= ["Shaktimaan", "Naagraj", "doga"]
let myObj= {
    name: "Priya",
    age: 18,
}

const myFunction= function(){
    console.log("Hello World");
    
}
console.log(typeof bigNumber);