


function massage(){
    for(let i=0; i<10000000; i++){}
    console.log("hello two")
}



function first(){
    console.log("hellow first")
}

function two(){
    setTimeout(function(){
        console.log("hellow two")
    },1000)
}

function third(){
    console.log("hellow third")
}

function fourth(){
    setTimeout(function(){
        console.log("hellow fourth")
    }, 4000)
}

function fifth(){
    console.log("hellow fifth")
}

function sixth(){
    console.log("hellow sixth")
}

function seventh(){
    console.log("hellow seventh")
}

function eight(){
   setTimeout(function(){
        console.log("hellow eight")
    }, 2000)
}


first()
two() //
third() 
fourth() //
fifth()
sixth()
seventh()
eight() //


