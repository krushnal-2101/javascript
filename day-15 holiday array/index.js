// // let arr = new Array()

// let arr = [1, 2, 3, 4, 5] 
// console.log(typeof(arr))


// arr.push(5, "six", false)
// arr.pop()

// arr.unshift("zero")

// arr.shift()
// arr.shift()
// console.log(arr)
// console.log(arr.length)



let arr = [1, 2, 3, 4, 5, 6]

console.log("slice:")
let newSlice = arr.slice(2, 5)
console.log(arr)
console.log(newSlice)



console.log("splice:")
let newSplice = arr.splice(-3, 1)
console.log(arr)
console.log(newSplice)



let quate = "my name is krushnal bhatti"

let quatearr = quate.split(" ")
console.log(quatearr)


let  name = ["krushnal", "kamleshbhai", "bhatti"]

let newname = name.join(" , ")
console.log(newname)


let strname = newname.split(" , ")
console.log(strname)