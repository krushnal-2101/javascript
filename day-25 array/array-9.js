
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numGreaterthan5  = numArray.find((values) => values > 3)

console.log("finding number greater than three in numArray: ", numGreaterthan5)



let numGreaterthan5index = numArray.findIndex((values)  => values > 7  )

console.log("index of numGreaterThan5 in numArray is :", numGreaterthan5index)





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

console.log("fruits array op with slice:", cars.slice(2, 5))


console.log("fruit array op with splice adding one more fruits in second index op : ", cars.slice(3, 0, "verna"))

console.log("after slice:", cars)
 

// ----------------------------
const fruits = [
  "apple",
  "banana",
  "cherry",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];



console.log("fruits array op with slice", fruits.slice(3, 6));



console.log("fruits array before", fruits);

console.log(
  "fruit array op with splice adding one more fruits in second index op : ",
  fruits.splice(2, 0, "orange")
);

console.log("fruits array after", fruits);


// ---------------------------------------------




let num  = [5, 65, 45, 85, 3, 21, 10, 32, 49, 7]


console.log
(
    "num greater than 100 available :",
    num.some((values) => values > 100)
)


console.log
("num greater 10 is available :", 
   num.some((values) => values > 10) 
)


console.log
(
    "checking every elements that num greater than 7 is available :",
    num.every((values) => values > 7)
)


console.log
(
     "check number every number  is greater than 2 or not ? :",
     num.every((values) => values > 2)
)