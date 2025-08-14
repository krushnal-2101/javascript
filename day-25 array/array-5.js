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


    for(let i=0; i<cars.length;i++)
    {
        console.log(cars[i])    
    }
    
    

    cars.forEach((cars) => {
        console.log("using foreach:", cars)
    })


    
    let bikes = ["splendar", "activa", "shine", "pulsar", "accsess"]


    let engine = cars.concat(bikes)


    console.log("all variable mix:", engine)





    console.log("converting array to string" , cars.toString())
























const fruits = [
  "apple",
  "banana",
  "cheery",
  "mango",
  "watermelon",
  "grapes",
  "strawberry",
];



for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}


fruits.forEach((fruit) => {
  console.log("fruits using for Each OP", fruit);
});



let vegetables = ["potato", "tomato", "ginger", "chilli"];

let shopItems = fruits.concat(vegetables);

console.log("all available shop items :", shopItems);



console.log("converting an Array to String", fruits.toString());