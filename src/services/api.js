// Creating the mobile's API connection
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.15.32:3333'
});

export default api;