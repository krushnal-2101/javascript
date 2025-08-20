
    let personaldetails = {
        name : "krushnal",
        age : "21",
        job:"web devloper"
    }

    console.log("personadetails:",personaldetails)

    console.log("person name:", personaldetails.name)

    console.log("person job:", personaldetails["job"])

    
    personaldetails.name = "kb_02"

    personaldetails["name"] = "kb_02"

    console.log("person name:", personaldetails.name)


   

    personaldetails.email = "krushnal@gmail.com"

    console.log("person details object  with all changes:", personaldetails)


    personaldetails["software"] = "developing"

    console.log("person details object  with all changes:", personaldetails)

