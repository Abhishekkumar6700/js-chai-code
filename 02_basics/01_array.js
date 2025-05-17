//arrays

const myArr= [0, 1, 8, 3 ,4, 5]
const myHeros= ["salmankhan","ranbir"]

const myarr2 = new Array (1,2,3,4) 

// Array Method
myArr.push(6);// add last value of array
// console.log(myArr); 
// myArr.pop()  // remove last value of array

// myArr.unshift(0); // add first value of array

// console.log(myArr); 
//  myArr.shift(); //remove first element of array

//  console.log(myArr.includes(9)); //result always in boolean
 
//  console.log(myArr.indexOf(8)); //agar value hoga to index return krega nhi hoga to -1

//  const newArr = myArr.join()

//  console.log(myArr); 
//  console.log(typeof myArr);
//  console.log(newArr); 
//  console.log(typeof newArr)

//slice, splice

console.log("A ", myArr);
const n1 = myArr.slice(1,3) //original value me koi change nhi hota hai or last value me change nhi hota hai

console.log(n1);
console.log("B ", myArr);

const n2= myArr.splice(1,3) // original array me change hota hai or last value v print hota hai
console.log(n2)