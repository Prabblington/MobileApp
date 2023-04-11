import axios from 'axios';

const ApiConfig = axios.create({
  baseURL: 'http://localhost:3333/api/1.0.0',
  responseType: 'json',
  withCredentials: true,
});
