// let a = 10
const b =20

//whatever we write outside that is a global scope
let a = 300
if(true){
   let a = 10
const b =20
// console.log("Inner:", a);

} // whatever we write inside the the if statement is block scope , whatever value written inside the global scope is available here  but value written inside that is not available outside


// console.log(a);
// console.log(b);

function one(){
   const username = "Priya"

   function two(){
      const website = "youtube"
      // console.log(username); 
   }
   // console.log(website);
   two()
}
one()

if(true){
   const username ="priya"
   if(username == "priya"){
      const website ="youtube"
      // console.log(username + website);
      
   }
   // console.log(website);
}
// console.log(username);


//+++++++++++++++ interesting++++++++++++++
addone(5)

function addone(num){
   return num + 1
}


addTwo(5)
const addTwo = function(num){
   return num + 2
}
