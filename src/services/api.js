import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Ajuste a porta de acordo com sua API
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
