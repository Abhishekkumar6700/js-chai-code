const coding =["js", "ruby", "java", "python", "cpp"]


const num =[1,2,3,4,5,6,7,8,9]

// const newnums = num.filter( (num) => num> 4)
// console.log(newnums)

//print greater than 4 foreach 


// const newnum = []

// num.forEach( (n) => {
//     if(n>4){
//         newnum.push(n);
//     }
// })
// console.log(newnum);

const books = [
{ title: 'one', genre: 'fiction', publish: 1981, edition: 2004},
{ title: 'two', genre: 'non-fiction', publish: 1985, edition: 2009},
{ title: 'three', genre: 'history', publish: 1981, edition: 2002},
{ title: 'four', genre: 'fiction', publish: 1991, edition: 2001},
{ title: 'five', genre: 'non-fiction', publish: 2003, edition: 1982},
{ title: 'six', genre: 'science', publish: 1981, edition: 2004},
{ title: 'seven', genre: 'fiction', publish: 1981, edition: 2004},
];

const userbook = books.filter( (bk)=>bk.genre==='fiction')
const userbook1 = books.filter( (bk) => {
    return bk.genre==='fiction' && bk.publish >= 1991
}
)
//console.log(userbook);
console.log(userbook1);