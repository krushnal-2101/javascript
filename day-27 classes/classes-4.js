
class person
{
    constructor(name, age)
    {
        this.name = name;
        this.age = age
    }

    job(jobname)
    {
        return jobname;
    }
}

const person1 = new person("krushnal", 21)


console.log(
    "persondetails:",
    "my name is:",
    person1.name +
    " "+
    "my age is" +
    person1.age +
    " "+
    "i m working:" +
    person1.job("devloper")

)




class bikedetails
{
    constructor(brand, name, year)
    {
        this.brand = brand,
        this.name = name,
        this.year = year
    }

    bikeyear(year)
    {   
        return this.year - year
    }
}

const bike1 = new bikedetails ("royal enfield", "bullet", 2025)

console.log(
    "bikedetails:",
    "my brand is:",
    bike1.brand+
    " "+
    "my name is :"+
    bike1.name+
    " "+
    "manufactring year :" +
    bike1.year,
)