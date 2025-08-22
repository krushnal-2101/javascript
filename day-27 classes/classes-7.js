
class person
{
    constructor(name, age)
    {
        this.name = name,
        this.age = age
    }
}

const person1 = new person("krushnal", 21)

class persondetails extends person
{
    constructor(name, age, job)
    {
        super(name, age);
        this.job = job
    }
}

const person2 = new persondetails(
    person1.name,
    person1.age,
    "software debloper"
);


console.log(
    "personal details:",
    "my name is:"+
    " " +
    person2.name +
    " "+
    "and my age is"+
    " "+
    person2.age+
    " "+
    "and i m working as a"+
    person2.job
)