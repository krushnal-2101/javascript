class Big{

    constructor(name, age, role)
    {
        this.name = name
        this.age = age
        this.role = role
    }
    updateProfile(name)
    {
        this.name = name
    }



getProfile()
{
    console.log("Name: " + this.name)
    console.log("age: " + this.age)
    console.log("role: " + this.role)
}

}

class Small extends Big{

    constructor()
    {
        super()
        this.cource = "fsd"
        this.duration = 15
    }
    getAlldetails()
    {
        console.log("cource: " + this.cource)
        console.log("duration: " + this.duration)
    }

    updateProfile(cource)
    {
        this.cource = cource;
    }

    getAlldetails(time, batch)
    {
        console.log(time, batch)
    }
}

let b1 =  new Big("yash", 18, "fronted")
let b2 = new Big("krishna", 20, "full stack")


b1.updateProfile("amit")
b2.getProfile()

console.log("--------------")


b2.getProfile()

console.log("--------------")


let s1 = new Small()
s1.getAlldetails()



s1.getAlldetails(20, "fsd2")

    console.log(b1)
