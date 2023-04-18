import axios from 'axios';
import { useEffect } from 'react';

const config = {
  baseURL: 'http://localhost:3333/api/1.0.0',
  headers: {
    'Content-Type': 'application/json',
  },
};

const ConfigSetUp = (token) =>
  useEffect(() => {
    axios.defaults.baseURL = 'http://localhost:3333/api/1.0.0';
    axios.defaults.headers.common['X-Authorization'] = token;
    axios.defaults.headers.post['Content-Type'] = 'application.json';
  });

const setAxiosConfig = (token) => {
  axios.defaults.baseURL = 'http://localhost:3333/api/1.0.0';
  axios.defaults.headers.common['X-Authorization'] = token;
  axios.defaults.headers.post['Content-Type'] = 'application.json';
};

export { ConfigSetUp, config };
