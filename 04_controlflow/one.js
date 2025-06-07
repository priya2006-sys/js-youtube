// IF statement
// const isUserLoggedIn = true
// const temp = 31
// if(temp<35){
// console.log("hot weather");
// }
// else{
// console.log("not so hot");
// }

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score> 100){
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }

//  console.log(`user power: ${power}`);

// const balance = 1000

// if(balance>500) console.log("test"),
// console.log("test");

// if (balance < 500){
// console.log("less than 500");
// } 
// else if(balance < 750) {
// console.log("less than 750");
// }
// else if(balance < 900){
// console.log("less than 900");
// }
// else{
//     console.log("less than 1200"); 
// }

const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard ){
    console.log("allow to buy course");
}
 if (LoggedInFromGoogle || LoggedInFromEmail ){
    console.log("user logged in");
 }