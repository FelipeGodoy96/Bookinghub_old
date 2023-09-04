import axios from "./config"

const createClient = async newUser => {
    try {
        const response = await axios.post('/clients', newUser)
        return {
            user: await response.data
        }
    } catch (error) {
        console.error(error.message)
    }
}

const api = {
    createClient,
    // loginUser,
    // logoutUser,
}

export default api