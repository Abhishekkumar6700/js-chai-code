// for of 

// const arr = [1, 2, 3, 4, 5]

// for(const num of arr){
//     console.log(num);
// }

// const greeting ="hello world"
// for (const greet of greeting){
//     console.log(`each char is ${greet}`)
// }

//maps 

const map = new Map() //map apne aap me ek objext hai
map.set('IN', "india")
map.set("FR", "france")
map.set('IN', "india")// ye print nhi hoga q ki map hmesa unique value ko rakhta hai


//console.log(map)

// for (const key of map){
//     console.log(key);
// }

// for(const [key, value] of map){ //array ka destructure ho jata hai
// console.log(key, ':-', value)
// }

// for of loop in object 

const obj = {
    'game1' : 'nfs',
    'game2' : 'spiderman'
}


// for(const [key, value] of obj){
//     console.log(key, ':-', value) //ye print nhi hoga q ki object iterable nhi hai
// }