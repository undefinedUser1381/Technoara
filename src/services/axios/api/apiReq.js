import axios from "axios";

const apiReq = axios.create({
    baseURL : "https://technoara.pythonanywhere.com"
})

export { apiReq };