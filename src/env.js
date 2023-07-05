import axios from 'axios';

const backend = 'https://storkini-service.onrender.com'
const local = 'http://localhost:5005'


const api = axios.create({
    baseURL: backend
  });

  export default api;