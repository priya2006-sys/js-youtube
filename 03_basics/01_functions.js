// // function sayMyName(){
//     console.log("P");
//      console.log("R");
//       console.log("I");
//        console.log("Y");
//         console.log("A");
// }
 // function definition

// sayMyName()//  when we put parenthesis it is called as function execution 

// function addTwoNumbers(num1, num2)//parameters
// {
// console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2)//parameters
{
// let  result = num1 +num2
// return result      // after we write return nothing cant be printed after that
return num1 + num2
}

 const result = addTwoNumbers(2, 4)// arguements

//  console.log("result:", result);

function LoginUserMessage(username ="Sam"){
    if(username === undefined){
// console.log("Please enter the user name");
return
    }
return `${username} just logged in  `
}
 
// console.log(LoginUserMessage("Priya"));
//  console.log(LoginUserMessage());




// function calculateCardPrice (...num1){
// return num1
// }
function calculateCardPrice (val1, val2, ...num1){
return num1
}


// console.log(calculateCardPrice(200, 400, 500));

const user ={
    username: "Priya",
    price: 200
}

function handleObject(anyobject){
// console.log(`user name is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "Priya",
    price: 300
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));
