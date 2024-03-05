import axios from 'axios';
import history from './utils/history';


axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.headers.authorization = "Bearer " + localStorage.getItem("loginToken"); 

axios.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('loginToken')}`;
    return config;
})

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("krusts");
      history.push('/login');
    }
    return Promise.reject(error);
  }
);

export default axios;