const num = [1,2,3]

// const total = num.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currrval: 4{currval}`);
//     return acc + currval
// } ,0)

///reduce  by arrow

// const total = num.reduce( (acc,currval) =>{
//   console.log(`acc: ${acc} and currrval: 4{currval}`);
//    return acc + currval
// } ,0)

// console.log(total)


const cart = [
    {
        item: "web dev",
        price: 767
    },
       {
        item: "andoid",
        price: 999
    },
       {
        item:"react",
        price:299
    },
       {
        item:"js",
        price:876
    },
]

const finalprice=cart.reduce( (acc,item) => item.price+acc ,0)
console.log(finalprice)