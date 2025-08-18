const cars =
[
    "thar",
    "swift",
    "innova",
    "seltos",
    "scropio",
    "creta",
    "venue",
]

console.log(
    "find of index name and num:",
    cars.indexOf("innova")
)


console.log(
    "find the creta is available in fruit array and the answer is :",
    cars.includes("creta")
)


console.log(
    "check baleno  element is available in  cars array or not answer :",
    cars.includes("baleno")
)







// ---------------------------------

const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

console.log(
  " i want to find the index of mango and index is :",
  fruits.indexOf("mango")
);



console.log(
  " i want to find the watermelon is available in fruit array and the answer is :",
  fruits.includes("watermelon")
);

console.log(
  "now i want to check orange is available in fruit array or not and the answer is :",
  fruits.includes("orange")
);



// --------------------------

let abhabet = ["a", "f", "g", "d" ,"h", "b", "c", "e", ]


console.log("sort the albhabet array:", abhabet.sort())





let numArray = [2, 35, 4, 64, 45, 89, 72, 12, 35, 96, 51, 29]

console.log(
    "sorting number in ascending order:" ,
    numArray.sort((a, b) => a - b)
)


console.log(
    "sorting number in ascending order:" ,
    numArray.sort((a, b) => b - a)
)