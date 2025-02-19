import axios from 'axios'

const backend = import.meta.env.VITE_BACKEND_URL

export const login = async (data) => {
    try {
        return axios.post(`${backend}/auth/login`,data,{
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

export const requestWithdrawl = async (data) => {
    try {
        return axios.post(`${backend}/api/withdrawal/request`,data,{
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => response)
    } catch (error) {
        return error
    }
}

export const getUserDownline = async (data) => {
    try {
        return axios.get(`${backend}/users/downline/${data}`).then(response => response)
    } catch (error) {
        return error
    }
}
