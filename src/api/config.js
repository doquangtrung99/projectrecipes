import axios from 'axios'

const API = axios.create({
    baseURL: 'https://63e77b4bcbdc565873783d0d.mockapi.io/api/'
})

export default API
