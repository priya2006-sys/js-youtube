const user = {
    username: "Priya",
    price: 999,
    welcomemessage: function(){
        console.log(`${this.username},welcome to website`);
        // console.log(this);
        
        
    }
}
// user.welcomemessage()
// const username = "sam"const addTwo = (num1 , num2) =>   num1 + num2
// user.welcomemessage()

    console.log(this);

    // function one(){
    //     let username ="Priya"
    //     console.log(this.username);
        
    // }
    // one()

    // const chai = function(){
    //     let username ="Priya"
    //    console.log(this.username);
    // }

    const chai = () => {
        let username ="Priya"
       console.log(this);
    }
    chai()

//    const addTwo = (num1 , num2) => {
//     return num1 + num2
//    }

    // const addTwo = (num1 , num2) => num1 + num2
  
//    const addTwo = (num1 , num2) => ( num1 + num2 ) // most used in react

 const addTwo = (num1 , num2) =>({username :" priya"})

console.log( addTwo(1, 2));
