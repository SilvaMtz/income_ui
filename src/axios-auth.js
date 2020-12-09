import axios from 'axios';

const instance = axios.create({
  baseUrl: 'https://localhost:3000/users'
})

export default instance;