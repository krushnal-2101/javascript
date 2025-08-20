
class personaldetails 
{
    constructor(name, age, job)
    {
        this.name = name,
        this.age = age,
        this.job = job     
    }
}

const person = new personaldetails("krushnal", 21, "developer")

console.log("personal details:", person)



const studentdetails=
{
    totalstudent: 600,
    exam:"mphw",
    Block:"a-z",
}

const alldetails = {...person, ...studentdetails}

console.log("alldetails:", alldetails)


console.log("all details length:", Object.keys(alldetails).length)