// function add (n1,n2){
//     console.log(n1+n2);
// }
// const result = add(2,4);
// console.log("result: ", result);

//  function loginuser(username = "dsam"){
//      if(!username){
//         console.log("please enter username")
//         return;
//      }
//     return `${username} just`
      
//  }

//  console.log(loginuser( ));


// function addSquares(a, b) {
//   function square(x) {
//     return x * x;
//   }
//   return square(a) + square(b);
// }

// console.log(addSquares(3,4)); //output will be 25

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3)); // 6