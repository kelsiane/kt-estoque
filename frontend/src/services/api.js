import axios from 'axios';

const token = localStorage.getItem('token');

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://api-devweb.herokuapp.com/',

  headers: {
    "x-access-token": token,

  }
})

export default api;