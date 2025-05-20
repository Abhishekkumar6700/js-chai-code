const coding =["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item){
//     console.log(item); //print all value
// })

// coding.forEach( (item) => {
//   console.log(item); //print all value
// })

// function printme(item){
//     console.log(item);
// }

//passing function in foreach 

// coding.forEach(printme)  //printme (function) ka refrence dena usko call nhi krna hai

// coding.forEach((item, index, arr)=> {
//   console.log(item, index, arr);
// } )



//********for each in object***** */

const mycode =[
    {
        langNAme: "javascript",
        langFile:"js"
    },
     {
        langNAme: "java",
        langFile:"java"
    },
     {
        langNAme: "python",
        langFile:"py"
    },
]
mycode.forEach( (item) => {
     console.log(item.langFile);
})