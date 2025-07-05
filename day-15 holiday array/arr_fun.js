// let  = ["one", 'two', "three", "four", "five"]

// //  for(let i=0; i<arr.length; i++){
// //     fun(arr[i], i)
// // }

// // arr.forEach(fun)

// function fun(ele, i)
// {
//     console.log(`${i}. ${ele}`)
// }


let arr = [1, 2, 3, 4, 5, 6, 7, 8]

// step-1

// arr.forEach(check)
// function check(n)
// {
//     if(n%2 == 0)
//     {
//         console.log(n)
//     }
// }

// step-2

// arr.forEach((n) =>
// {

//     if(n%2 == 0)
//     {
//         console.log(n)
//     }
// })


// let newArr = arr.map((n) => {
//     return n*n*n
// })

// console.log(newArr)


console.log(arr.indexOf(5))
console.log(arr.includes(9))


let ind = arr.findIndex((n) =>n == 5)
console.log(ind)