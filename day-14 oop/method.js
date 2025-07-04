class Object{
    constructor()
    {

    }

    print()
    {
        this.title,
        this.title,
        this.title
    }
}


let obj = new Object()


obj = {
    title: "honda",
    model:"splendor",
    millage:50,
    color:4,

    print:function()
    {
        console.log("title: " + this.title)
        console.log("model: " + this.model)
        console.log("millage: " + this.millage)
        console.log("color: " + this.color)
    }

}


let newprint  = obj.print.bind(obj)


newprint()



function print(title, model, millage, color)
{
        console.log("title: " + this.title)
        console.log("model: " + this.model)
        console.log("millage: " + this.millage)
        console.log("color: " + this.color)
}

print("herow", "splendor", 45, 4)



    


// let name = "val"


// console.log(typeof(name), typeof(Val))