

function two(a)
{
    console.log(a)
}

function one(callback)
{
    callback("i m krushnal bhatti")
}

one(two)




function pc(x)
{
    console.log(x)
}

function  laptop(callback)
{
   setTimeout(() =>
{
     callback("i m work for coding related")
}, 2000)
}

laptop(pc)
