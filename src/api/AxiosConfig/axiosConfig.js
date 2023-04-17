import axios from 'axios';

const setAxiosConfig = (baseURL, headerCommon) => {
  axios.defaults.baseURL = baseURL;
  axios.defaults.headers.common['X-Authorization'] = headerCommon;
  axios.defaults.headers.post['Content-Type'] = 'application.json';
};

export default setAxiosConfig;
