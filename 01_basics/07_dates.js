let myDate =  new Date()
// console.log(myDate.toString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let createdDate = new Date(2006, 7, 20)
let createdDate = new Date(2006, 7, 20, 5, 3)
// console.log(createdDate.toDateString());

let myTimeStamp =  Date.now()
// console.log(myTimeStamp);
// console.log(createdDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default',{
    weekday: "long"
})









