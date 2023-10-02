import axios from "./config"

const createClient = async newUser => {
    try {
        const response = await axios.post('/clients', newUser)
        return console.log(response)
        // return console.log({
        //     user: await response.data
        // })
    } catch (error) {
        console.error(error.message)
    }
}

const authenticateClient = async ({email:password}) => {

}

const api = {
    createClient,
    authenticateClient,
    // logoutUser,
}

export default api