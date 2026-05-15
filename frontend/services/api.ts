import axios from 'axios';

const api = axios.create({
  baseURL: process.env.PORT,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;