

function personadetails(name, age, job)
{
    this.name = name,
    this.age = age,
    this.job = job
}

const person = new personadetails("krushnal" , 21, "software devloper")

console.log("person object created:", person)


personadetails.prototype.email = "krushnal@gmail.com"

console.log("person  object with new email property added:", person.email)

delete person.job

console.log("after job object deleted:", person)



console.log("checking if a property exists:", person.hasOwnProperty("job"))

console.log("checking if a property exists:", person.hasOwnProperty("name"))


for (let key in person) {
  console.log("person details", key + ":" + person[key]);
}