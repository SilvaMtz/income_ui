import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://localhost:3000/auth'
})

export default instance;