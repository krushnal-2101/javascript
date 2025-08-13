const fruits = ["apple", "banana", "orange", "guava", "cherry"];

console.log("fruits array before", "and  their length", fruits.length, fruits);



fruits.push("strawberry");

console.log("fruits array after", "and  their length", fruits.length, fruits);



fruits.unshift("mango");

console.log("fruits array", "and its length", fruits.length, fruits);



console.log("fruits elements and their length", fruits.length, fruits);



fruits.pop();

console.log(
  "fruits elements after removing last element and their length",
  fruits.length,
  fruits
);



console.log("fruits elements and their length", fruits.length, fruits);

fruits.shift();

console.log(
  "fruits elements after removing first element and its length",
  fruits.length,
  fruits
);



console.log("fruits elements and their length", fruits.length, fruits);



fruits.splice(2, 0, "watermelon", "grapes");


console.log(
  "fruits elements and their length after adding new 2 elements and not removing",
  fruits.length,
  fruits
);


console.log("fruits elements and their length", fruits.length, fruits);

fruits.splice(5, 2);

console.log(
  "fruits elements and their length after removing 2 elements",
  fruits.length,
  fruits
);


fruits.splice(8, 10);

console.log("fruits elements and their length", fruits.length, fruits); 
















// example






const bikes = ["splendar", "shine", "activa", "pleasure", "cddelux"]

console.log("bikes array before", "and their length", bikes.length, bikes)

bikes.push("access")

console.log("bikes array after", "and their length", bikes.length, bikes)

bikes.unshift("jupitor")

console.log("bikes array", "and its length", bikes.length, bikes)






console.log("bikes elements and their length", bikes.length, bikes);


bikes.pop()

console.log("bikes remove last element", bikes.length, bikes); 


console.log("bikes elements and their length", bikes.length, bikes);

bikes.shift()

console.log("bikes remove first element", bikes.length, bikes);   


console.log("bikes elements and their length", bikes.length, bikes);


bikes.splice(3,0, "ola", "pulsar")

console.log("bikes element after add and not remove", bikes.length, bikes )


bikes.splice(4,2,)

console.log("bikes element after add 2 remove", bikes.length, bikes )


bikes.splice(7, 10)

console.log("bikes elements and their length", bikes.length, bikes); 