

const api = fetch("https://jsonplaceholder.typicode.com/users")


const users = new Promise((resolve, reject) =>{
    if(api.length === 0)
    {
        reject("no data found")
    }
     else{
        setTimeout(() =>{
            resolve(api)
        }, 5000)
     }
})


users 
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err))


console.log("it will print immediately");
















