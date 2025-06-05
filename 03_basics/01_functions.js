function sayMyName(){
    console.log("P");
     console.log("R");
      console.log("I");
       console.log("Y");
        console.log("A");
} // function definition

sayMyName()//  when we put parenthesis it is called as function execution 

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
console.log("Please enter the user name");
return
    }
return `${username} just logged in  `
}
 
// console.log(LoginUserMessage("Priya"));
 console.log(LoginUserMessage());

