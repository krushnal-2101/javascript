
const api = fetch("https://jsonplaceholder.typicode.com/users")

    async function  fetchData()
    {
        try
        {
            const res = await api

            const data = await res.json()

            console.log(data)

            console.log("it will wait")
        } catch(error)
        {
            console.log(error.massage)
        }
    }

    fetchData()


const data = async () => {};



