

    const payment = new Promise((resolve, reject) => {
        let paymentInitiate = true  

        if(paymentInitiate){
            console.log("paymentInitiate")

            setTimeout(() => {
                console.log("cheking payment details....!")
                let payment = true;

                if(payment) 
                {
                    resolve("payment successfully completed")
                }else{
                    reject("payment failed")
                }
            }, 2000 )
        }else{
            reject("payment initiation failed")
        }
    });

    payment
        .then((checkPayment)=> {
            return  new Promise((resolve) => {
                setTimeout(() => {
                    console.log("success:", checkPayment)
                    resolve()
                }, 2000) 
            })
        })
        .then(() => {
            return new Promise((resolve) =>{
                setTimeout(() =>{
                    console.log("fetching balance after payment deduction")
                    resolve()
                }, 2000)
            })
        })
        .then(() => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log("balance is: ", " xxx amount left")
                    resolve()
                }, 2000)
            })
        })
        .catch((err) => {
            console.log("error:", err)
        })
        .finally(() => {
            setTimeout(() => {
                console.log("do you want to explore more?")
            }, 2000)
        })