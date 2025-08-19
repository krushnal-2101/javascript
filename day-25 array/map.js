let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log("number:", number)

let newNumberArray = number.map((number) => number*3)

console.log("new number array:", newNumberArray)



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

let carsArray = cars.map((cars) => {
    return  cars;
})

console.log("fruits array:", carsArray)





const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];

let fruitsArray = fruits.map((fruits) => {
  return fruits;
});

console.log("fruits array : ", fruitsArray);





const personaldetails =
[
     { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
  {
    name: "Emily Davis",
    age: 29,
    city: "Los Angeles",
    profession: "Graphic Designer",
  },
  { name: "Michael Brown", age: 67, city: "Chicago", profession: "Doctor" },
  { name: "Sophia Wilson", age: 22, city: "Houston", profession: "Teacher" },
  {
    name: "David Martinez",
    age: 38,
    city: "San Francisco",
    profession: "Developer",
  },
]

const  personname = personaldetails.map((personDetails) => {
     return personDetails.name;
})

console.log("person Names: " + personname);