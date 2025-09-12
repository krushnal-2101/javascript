let counter = document.querySelector(".counter");
let stop = document.querySelector(".stop");


let alert = setTimeout(timeout, 4000)
function timeout(){
   
}

let count = 1

let timer = setInterval(function(){
     count++;
    counter.textContent = count;
}, 1000);


stop.onclick = function(){
    clearInterval(timer)
    clearTimeout(alert)
}




let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")


setInterval(function(){
    let d = new Date();
    hour.textContent = d.getHours()
    minute.textContent = d.getMinute()
    second.textContent = d.getSecond()
}, 1000)


setInterval(function()
{
   minute.classList += "minuteAnim";

}, 6000)



let timenumber = document.querySelector(".timenumber")
let aud = document.querySelector("#aud")
let clock = document.querySelector("#clock")



function startTimer(){
     setTimeout(function(){
            aud.play();
            clock.classList += " shake"

     }, timenumber.value*1000)
}