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
    // 
    
    
}
// console.log(typeof bigNumber);

// ******************************************************************

// memory:: stack(primitive)=> copy of variable , heap(non-primitive)=> reference means original value
let myYoutubeName = "priya-tiwari.com"
let anotherName = myYoutubeName
anotherName= "ChaiaurCode"

console.log(myYoutubeName);
console.log(anotherName);

let userOne ={
   email : "abc@gmail.com",
   upi: "abc@123"
}
 let userTwo =userOne

 console.log(userOne.email);
  console.log(userTwo.email);
 

