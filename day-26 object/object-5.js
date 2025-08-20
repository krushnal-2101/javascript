
const student =
{
   firstname: "krushnal", 
}

const studentdetails = 
{
    name:"krushnal",
    age:21,
    get studentage()
    {
        return this.age
    }
}

console.log("student age is : ", studentdetails.studentage)


const cardetails =
{
    company : "toyota",
    model:"fotuner",
    color : "black",

    get carcompany()
    {
        return this.company;
    }
}

console.log("car company is :", cardetails.carcompany)

console.log("color is :", cardetails)
