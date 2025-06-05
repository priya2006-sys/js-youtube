// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Priya"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser ={
    email: "priya@tiwari.com",
    fullname: {
        userfullname:{
            firstname: "Priya",
            lastname: "Tiwari"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);
 const obj1 ={1: "a", 2: "b"}
 const obj2 ={3: "a", 4: "b"}

//  const obj3 ={obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2)

// const obj3 = {...obj1, ...obj2}
//  console.log(obj3);

// const user =[
//     {
//         id: 1,
//         email: "Pri@ti.com"
//     },
//     {
//         ...
//     },
//     {
//         ...
//     }
// ]

// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename: "JS youtube",
    price: "999",
    courseInstructor: "Priya"
}

//course.courseInstructor // usually we call this way

const {courseInstructor:instructor} = course   // when we need to call multiple times // if we find and name large to write we can change it by using :within the same braces{}
console.log(instructor);



const navbar = ({company}) => {

}
navbar (company = "reliance")  // destructuring  objects in react

//when we want to put our work on others head this i called API

//JSON (it have name of the object if we don't declare the name of the object then it is treated as JSON)
// {
//     "name" :"Priya",
//     "coursename": "JS in hindi"
//     "price": "Free"
// }

//sometimes we get an API in the form of  arrays
[
    {},
    {},
    {}
]

