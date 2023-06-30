import axios from "axios"

const instance = axios.create({
    // baseURL : "https://harvest-ministries-backend.herokuapp.com/api/"
    baseURL:"https://harvestbackend.onrender.com/api"
});
export default instance;