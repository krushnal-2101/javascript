
function banana(price, callback)
{
    console.log(`sell of ₹${price} all fruits `)
    setTimeout(() =>{
        if(price > 0)
        {
            console.log(` ₹${price} banana sell`)
            callback(null, price)
        }else{
            callback("banana out of stock")
        }
    }, 1000)
}


function checkstock(price, callback)
{
    console.log("cheking of banana stock")
    setTimeout(() => {
        if(price <= 100)
        {
            console.log("valid banana stock")
            callback(null, price)
        }else{
            callback("invalid banana stock")
        }
    
    }, 1000)
}


function stock(price, callback)
{
    console.log("banana stock full")
    setTimeout(() => {
         console.log(`payment of ₹${price}  sell complete`) 
         callback(null, "stock done")
    }, 1000)
}       


banana (150, (err, price) =>
{
    if(err)
    {
        console.error(err)
    }else{
        checkstock( price, (err, status) => {
            if(err)
            {
                console.error(err)
            }else{
                stock(price, (err, result) => 
                {
                    if(err)
                    {
                        console.error(err)
                    }else{
                        console.log(result)
                    }
                })
            }
        })
    }
})