import axios from "axios";
const instance = axios.create({
    baseURL: import.meta.env.VITE_BE_URL,
    timeout: 1000,
    
  });
  export default instance;