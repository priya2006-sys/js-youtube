const userEmail = []

if(userEmail){
    console.log(" got User email");
}else{
    console.log("Dont have email");
}

//false, 0, -0, BigInt 0n, "", null, undefined, NaN (falsy)
// "0", "false", " ", [], {}, function(){}  (truthy)

// if(userEmail.length === 0){
// console.log("Array is empty");
// }

// const emptyObj ={}

// if ((Object.keys(emptyObj).lenth === 0){
// console.log("object is empty");
// })

//nullish coalescing operator(??):

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15
console.log(val1);

//ternary operator
//  condition ? true : false;
const icecreamPrice =100
icecreamPrice <= 80 ? console.log("less than 80"): console.log("more than 80")



