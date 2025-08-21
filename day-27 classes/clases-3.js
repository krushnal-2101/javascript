class person 
{
    constructor(name, age)
    {
        this.name = name,
        this.age = age
    }

job()
{
    let job = "devloper"

    return job
}
}


const person1 = new person("krushnal", 21)


console.log(
    "personal details:",
    "my name is:",
    person1.name +
    " " +
    "my age is " +
    person1.age +
    " " +
    " i m working " +
    person1.job()
)