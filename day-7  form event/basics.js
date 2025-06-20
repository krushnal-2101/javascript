let arr = ["a","b", "c", "d"]
let str = "alishan";

// console.log(str.includes("b"))

// let ans = arr.some((n)=> n.toLocaleUpperCase().trim() == "A")


// arr.some(function(ele){
//   str.includes(ele)
// })

// arr.some((ele)=> str.includes(ele))



// for(let i=0; i<arr.length; i++)
// {
//     for(let j=0; j<str.length; j++)
//     {
//         if(arr[i] == arr[j])
//         {
//             return true;
//         }
//     }
// }

// let newarr = str.split("")
// console.log(newarr)

// let val = newarr.some((n)=> n.toLocaleUpperCase() == n)

// console.log(val)

let newval = str.split("").some((n)=> n.toLocaleUpperCase() == n)
console.log(newval)