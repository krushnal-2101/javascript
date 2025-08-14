
const cars = 
[
        "swift",
        "innova",
        "baleno",
        "scropio",
        "fortunar",
        "aura",
        "thar", 
        "creta",
        "venue",
]


console.log("return new string with each cars element:", cars.join(" | ") )




const newnum = 
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, 10]
]


console.log("flattend numarray:", newnum.flat())




const newnum2 = [ 1, 2, [3, 4, 5], 6, [7, 8], [9], 10]

console.log("more nested number array :", newnum2.flat(Infinity))




console.log("cars element:", cars)


console.log("slicing cars array =>", cars.slice (2, 5))












const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log("return new string with each fruits element ", fruits.join("|"));


console.log("slicing fruits array =>", fruits.slice (1, 4))