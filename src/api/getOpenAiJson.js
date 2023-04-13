import axios from 'axios';

const baseURL = 'http://localhost:3333/api/1.0.0';
const AUTH_TOKEN = 'cf1c6c64be48c22cfe8f90a08c1027a4';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['X-Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const addUser = async (user) => {
  try {
    const response = await axios.post('/user', user, {
      baseURL,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};

const signupData = {
  first_name: 'Ashley',
  last_name: 'Williams',
  email: 'ashley.williams@mmu.ac.uk',
  password: 'Wr3xh4m!',
};

const loginUserData = {
  email: 'ashley.williams@mmu.ac.uk',
  password: 'Wr3xh4m!',
};

const signupTest = () => {
  axios
    .post('/user', signupData)
    .then((response) => {
      const signup = response.data;
      console.log(signup);
    })
    .catch((error) => {
      console.error(error);
      // throw new Error(error);
    });
};

const loginTest = () => {
  axios
    .post('/login', loginUserData)
    .then((response) => {
      const loginResponse = response.data;
      console.log(loginResponse);
    })
    .catch((error) => {
      console.error(error);
      // throw new Error(error);
    });
};

const getUserTest = () => {
  axios
    .get('/user/6')
    .then((response) => {
      // const loginResponse = response.data;
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
      // throw new Error(error);
    });
};

export { signupTest, loginTest, getUserTest };
