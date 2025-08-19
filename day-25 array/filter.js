
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

console.log(number)


const evennumber = number.filter((number) => number % 2 === 0)

console.log("even number:", evennumber)


const personaldetails = [
    { name: "John Smith", age: 45, city: "New York", profession: "Engineer" },
    {
        name: "Emily Davis",
        age: 45,
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


const peopleAge = personaldetails.filter((x) => x.age > 40);

console.log("age is up 40", peopleAge);



const peopleName = personaldetails.filter((x) => x.age > 40).map((x) => x.name);

console.log("age is up 40: " , peopleName)


const peopleAgenumber = personaldetails.filter((x) => x.age > 40)

console.log("age is up 40", peopleAge)




const personNameGreaterThan40 = peopleAgenumber.map((x) => x.name);

console.log("person Name which are greater than 40", personNameGreaterThan40);