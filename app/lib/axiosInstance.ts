import AsyncStorage from "@react-native-async-storage/async-storage";
import Axios from "axios"

const axiosInstance = Axios.create({
  baseURL : "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
  },
})

axiosInstance.interceptors.request.use(
  async (config) => {
  
      const token = await AsyncStorage.getItem('token');
      
    
      if (token) {
          config.headers.Authorization = `Bearer ${token}`;
      }
      
      return config;
  },
  (error) => {
      return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => {
      return response;
  },
  async (error) => {
      if (error.response && error.response.status === 401) {
          await AsyncStorage.removeItem('token');
      }
      
      return Promise.reject(error);
  }
);

export default axiosInstance;