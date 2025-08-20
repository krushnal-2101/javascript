const studentdetails =
{
    name:"krushnal",
    age: "",

    set studentage(age)
{
    this.age = age;
}
}

studentdetails.studentage = 21

console.log("student age:", studentdetails.age)