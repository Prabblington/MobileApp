import axios from 'axios';

const setAxiosConfig = (token) => {
  axios.defaults.baseURL = 'http://localhost:3333/api/1.0.0';
  axios.defaults.headers.common['X-Authorization'] = token;
  axios.defaults.headers.post['Content-Type'] = 'application.json';
};

export default setAxiosConfig;
