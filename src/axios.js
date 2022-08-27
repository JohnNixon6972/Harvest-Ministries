import axios from "axios"

const instance = axios.create({
    basURL : "https://harvest-ministries-backend.herokuapp.com/api/"
});
export default instance;