// local scope 
// global scope
// function scope 

function big (){

     let num = 10;

     function small(){
        return num;
     }

    return small()  // lexical scope 
}

let val = big()
console.log(val)