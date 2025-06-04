//singleton
//object 

//object literals



const JSuser ={
name: "Priya",
age: 18,
location: "Mumbai",
email: "priya@tiwai20google.com",
isLoggedIn : false,
lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JSuser.email);
// console.log(JSuser["email"]);


JSuser.email = "priya@tiwarigoogle.com"
// Object.freeze(JSuser)
JSuser.email = "priya@tiwarichatgpt.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());



