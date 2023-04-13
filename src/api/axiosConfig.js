import axios from 'axios';

// const baseURL = 'http://localhost:3333/api/1.0.0';
// let AUTH_TOKEN = 'cf1c6c64be48c22cfe8f90a08c1027a4';

const setAxiosConfig = (baseURL, headerCommon, headerPost) => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.common['X-Authorization'] = headerCommon;
  axios.defaults.headers.post['Content-Type'] = headerPost;
};

export default setAxiosConfig;
