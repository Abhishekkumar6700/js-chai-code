const num = [1,2,3,4,5,6,7,8,9]

 //const newnum = num.map( (val) => val+10 )

 //chaining of map and filter

const newnum = num
                .map((n) => n*10 )
                .map( (n) => n+1)
                .filter ( (n) => n>=30)

 console.log(newnum)