 const hero= ["sarukh" , "salman", "ranbir"]
 const heroine = ["kajal", "sara","alia"]

//  hero.push(heroine)
//  console.log(hero);
//  const newHero = hero.concat(heroine);
//   console.log(newHero);

//spread operator
 
// const spread = [...hero, ...heroine]
// console.log(spread);

// const anotherArr = [1, 2, 3, [4, 5, 6],7, [6, 7, [4,5]]]
// const newArray = anotherArr.flat(Infinity)
// //console.log(anotherArr)
// console.log(newArray)

// console.log(Array.isArray("hitesh"))
// console.log(Array.from("hitesh"))
// let array = [3,5,7,3,67]
 // array =[6,10,14,6,134]
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const children = arr1.concat(arr2);
// console.log(children);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.constructor;
// console.log(text);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.copyWithin(2, 0));
// console.log(fruits)

// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2);
// console.log(fruits)

// Create an Array
// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterator
// const list = fruits.entries();
// console.log(list);

// List the Entries
// let text = "";
// for (let x of list) {
//   text += x;
// }
// console.log(text);


// Create an Array
const ages = [32, 33, 19, 40];

// Create a Test Function
function checkAge(age) {
  return age > 18;
}

// Are all ages over 18?
console.log(ages.every(checkAge));
