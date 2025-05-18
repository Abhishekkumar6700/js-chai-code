//singleton =>constructor se object bnate hai to singleton object bnta hai

//object literals

const jsUser = {
 name: "Hitesh",
 age:18,
 location:"jaipur",
 email:"hitesh@gmail.com",
 isLoggedin:false,
 arr:["abhi","raj"]

}
// console.log(jsUser.name);
// console.log(jsUser["name"])
//Object.freeze(jsUser) //object lock ho jata hai iske bad change nhi hoga object

jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greeting1 =function(){
    console.log(`hello js user , ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greeting1());
