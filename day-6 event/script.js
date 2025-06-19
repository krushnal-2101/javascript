let email = document.querySelector("#email")
let password = document.querySelector("#password")
let submit = document.querySelector("#submit")
let passkey = document.querySelector("#passkey")




submit.addEventListener("click", function(){

    if(email.value != "krushnal@gmail.com" && password.value != "krush123")
    {
        window.alert("⚠️ wrong crediential...!")
        email.classList  += "border border-danger"
        password.classListlist += "border border-danger"
    }
    else if(email.value != "krushnal@gmail.com")
    {
        window.alert("wrong email")
         email.classList  += "border border-danger"
    }
    else if(password.value != "krush123")
    {
        window.alert("wrong password")
        password.classListlist += "border border-danger"
    }
    else
    {
        window.alert("login succseccfull.....!")
        window.location.href="https://github.com/krushnal-2101"
    }
})


passkey.onclick = function()
{
    if(password.type=="password")
    {
        password.type="text"
        passkey.children[0].className = "bi bi-eye-slash"
    }
    else{
        password.type="password"
        passkey.children[0].className = "bi bi-eye"
    }
}