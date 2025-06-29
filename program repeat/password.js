let prevdpass = "kunal@123" 
let oldpass = document.getElementById("oldpass")
let newpass = document.getElementById("newpass")
let conpass = document.getElementById("conpass")
let alert = document.getElementById("alert")


function changePassword(){
    let message = ""
    let color = "danger"
    if(oldpass.value == newpass.value){
        message = "same password as old"

    }
    else if(newpass.value != conpass.value)
    {
        message = "new password comfirm lpassword are not same"
    }
    else{
        message = "password changed...!"
        color="success"
    }

    alertBox(message, color)
}




function alertBox(m, color){
    alert.innerText = m;
    alert.className = "text-"+ color + " w-50 bg-"+color+"-subtle p-3"
}
