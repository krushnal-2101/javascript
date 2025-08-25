


function checkage()
{
    const age = 18
    try {
        if(age >= 18)
        {
            console.log("you are aligible for licences")
        }else(age <= 18)
        {
            throw new Error("you are not aligible for licences")
        }
    }
    catch (error)
    {
        console.log(error.massage)
    }
}

checkage()


const isStundentpasses = () =>
{
    let marks = 50

    try
    {
        if(marks >= 35)
        {
            console.log("you have passed this examition")
        }else if(marks < 35)
        {
            throw new error("you have failed this examiation")
        }
    }catch(error)
    {
        console.log("this will  execute regardless of result")
    }
};

isStundentpasses()