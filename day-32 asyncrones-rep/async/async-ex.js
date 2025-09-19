
const checkPayment = () => {
    return new Promise ((resolve, reject) => {
        let payment = true;

        setTimeout(() => {
            if(payment) {
                console.log("payment done successfully:")
                resolve()
            }else{
                reject("payment failed")
            }
        }, 5000)
    })
}

const checkBalance  = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("xxxxx amount available")
            resolve()
        }, 6000)
    })
}

const payment = async () => {
    try{
        await checkPayment();
        console.log("fetching account balance...!")
        await checkBalance()
    }catch(error){
        console.log(error)
    }
    finally{
        console.log("Do you want to explore more?")
    }
}

payment()