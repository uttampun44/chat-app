import Axios from "axios"

const axiosInstance = Axios.create({
  baseURL : "https://chatbox-api.herokuapp.com/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  },
})

export default axiosInstance;