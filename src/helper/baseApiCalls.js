import axios from 'axios'

const backend = import.meta.env.VITE_BACKEND_URL

export const login = async (data) => {
    try {
        return axios.post(`${backend}/login`,data,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => response)
    } catch (error) {
        return error
    }
}

export const register = async (data) => {
    try {
        return axios.post(`${backend}/register`,data,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => response)
    } catch (error) {
        return error
    }
}