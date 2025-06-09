// const myNums = [1, 2, 3]
// const myTotal = myNums.reduce (function (acc, curval ){
//     console.log(`acc: ${acc} and curval: ${curval}`);
    
//     return acc + curval
// }, 0)

const myNums = [1, 2, 3]
const myTotal = myNums.reduce ( (acc, curval) => acc + curval , 0)
console.log(myTotal);

const shoppingCart = [

        {
        itemname: "js course",
        price: 2000
    },
        {
        itemname: "html course",
        price: 3000
    },
    
    {
        itemname: "java course",
        price: 6000
    },
]
 const  pricetopay = shoppingCart.reduce( ( acc ,item) => acc + item.price , 0)
 console.log(pricetopay);
 
