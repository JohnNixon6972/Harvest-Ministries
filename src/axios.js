import axios from "axios"

const instance = axios.create({
    // baseURL : "https://harvest-ministries-backend.herokuapp.com/api/"
    baseURL:"http://localhost:9000/api"
});
export default instance;