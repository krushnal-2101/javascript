let str = "Red and white skill eduation"

// let newStr = str.replace("and", "&")

// let newStr = str.replaceAll(" ", "--")
// console.log(newStr)

// let newStr = str.toLocaleUpperCase()


// for(let s of str){
//     console.log(s)
// }

// console.log(newStr)

let obj ={
  "id": 1,
  "first_name": "Ansley",
  "last_name": "Bernholt",
  "email": "abernholt0@linkedin.com",
  "gender": "Female",
  "phone": "716-648-0918",
  "Car": "Buick",
  "counrtry": "Malaysia"
}

for(let key in obj){
    console.log(key + " : " + obj[key])
}
