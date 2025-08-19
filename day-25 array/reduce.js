
let numberarray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("number array: " + numberarray )    

const sumofnumber = numberarray.reduce((accumulator, element) =>{
    return accumulator + element
})

console.log("sumofnumber : " + sumofnumber)


function findingmax(numberarray)
{
    let max = 0
    for(let i=0; i<numberarray.length; i++)
    {
        max = Math.max(numberarray[i])
    }
    console.log("max number is number array:" + max)
}

findingmax(numberarray)

const  maxnum = numberarray.reduce((accumulator, element) => 
    Math.max(accumulator, element)
)

console.log("maxnum:" ,maxnum)




const  personaldetails =
[
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

let similaragenumber = personaldetails.reduce(function (acc, curr){
    if(acc[curr.age])
    {
        acc[curr.age] = ++acc[curr.age]
    }else{
        acc[curr.age] = 1
    }
    return acc
}, {}) 

console.log("similaragenumber: " , similaragenumber) 


const personaldetails2 =
[
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


const personage = personaldetails2.reduce(function(acc, curr){
  if(curr.age>40){
    acc.push(curr.name)
  }
  return acc
}, [])

console.log("person age up to 40", personage)