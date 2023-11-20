import axios from "./config"

const createClient = async newUser => {
    try {
        await axios.post('/clients', newUser)
    } catch (error) {
        console.error(error.message)
    }
}

const authenticateClient = async ({email, password}) => {
    try {
        const response = await axios.post('/auth/login', {email,password})
        return response.data
    } catch (error) {
        console.error(error.message + ': ' + error.response.data.message)
    }
}

const api = {
    createClient,
    authenticateClient,
    // logoutUser,
}

export default api