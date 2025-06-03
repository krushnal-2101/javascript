    function rec(num, name)
    {
        console.log(name + "got" + num + "rs")
            
            return{
                name: name,
                rupee:num
            }
            return [name, num]
    }


    let num = 200;
    let name = "jhgdjb"


    console.log(rec(num, name))

    function rec(n){
        if(n <= 1)
        {
            return
        }
        console.log(n)
        return n*rec(n-1)
    }