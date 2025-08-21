

const person =
{
    name : "krushnal",
    surname : "bhatti"
}

console.log("person details before: ", person)

person.age = 21

console.log("person details after: ", person)



class car 
{
    constructor(brand, name)
    {
        this.brand = brand,
        this.name = name
    }
}


const carOne = new car("toyota", "fortuner")

console.log("car details before:", carOne)


carOne.color = "black"

console.log("carone  detils after", carOne)