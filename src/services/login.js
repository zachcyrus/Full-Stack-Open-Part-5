import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/login'

const login = async (credentials) => {
    let response = await axios.post(baseUrl, credentials)
    return response.data
}

export default {login}