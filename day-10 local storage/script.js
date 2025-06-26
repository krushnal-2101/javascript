

let data = JSON.parse(localStorage.getItem("data")) || []

let pic = document.querySelector("#pic");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone= document.querySelector("#phone");
let submit = document.querySelector("#submit");
let users = document.querySelector("#users")


submit.addEventListener("click", function(){

    let obj = 
    {
        pic: pic.value,
        name: name.value,
        email: email.value,
        phone: phone.value
    }
    data.push(obj)

    let strdata = JSON.stringify(data)
    localStorage.setItem("data", strdata)

    showUsers()
})


function showUsers(){
     
    let strdata = localStorage.getItem("data")
    let data = JSON.parse(strdata)


    users.innerHTML ="";
    data.map((ele) => {
        users.innerHTML += `
                        <div class="shadow-md rounded-lg p-3 flex flex-col gap-3 items-center border bg-slate-300">
                            <img class="w-[60%] rounded-full shadow p-1"  src="${ele.pic}" alt="">
                            <h4>${ele.name}</h4>  
                            <h4>${ele.email}</h4>  
                            <h4>${ele.phone}</h4> 
                            <button id="submit" class="p-1 bg-slate-500 hover:bg-slate-600 text-white mx-auto shadow rounded-md w-[200px]">Follow</button>
                        </div>
                        `;
    })
}

showUsers()