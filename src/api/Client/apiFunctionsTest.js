import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://localhost:3333/api/1.0.0';

axios.defaults.baseURL = baseURL;

// POST /user
const signupData = {
  first_name: 'Ashley',
  last_name: 'Williams',
  email: 'ashley.williams@mmu.ac.uk',
  password: 'Wr3xh4m!',
};

const testData = {
  first_name: 'Lemmony',
  last_name: 'Snickett',
  email: 'Lemony.snickers@gmail.com',
  password: 'Gkls56@0',
};

let userData = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const createNewAccount = (firstName, lastName, email, password) => {
  userData = { firstName, lastName, email, password };
  const accData = { firstName, lastName, email, password };

  axios
    .post('/user', accData, config)
    .then(async (response) => {
      const newAccResponse = await response.data;

      console.log(JSON.stringify(newAccResponse));
      return true;
    })
    .catch((error) => {
      console.warn(error);
      return false;
    });
};

// POST /login
const loginUserData = {
  email: 'ashley.williams@mmu.ac.uk',
  password: 'Wr3xh4m!',
};

const loginTest = (email, password) => {
  userData = { email, password };
  const loginData = { email, password };

  axios
    .post('/login', loginData, config)
    .then(async (response) => {
      const loginResponse = await response.data;
      userData.id = await JSON.stringify(loginResponse.id);

      await AsyncStorage.setItem('userData', userData);
      await AsyncStorage.setItem('X-Authorization', loginResponse.token);

      axios.defaults.headers.common['X-Authorization'] = loginResponse.token;

      console.log(`X-Authorization: ${JSON.stringify(loginResponse.token)}`);
      console.log(`Logged in: ${JSON.stringify(loginResponse)}`);
      console.log(`User: ${JSON.stringify(userData)}`);

      return true;
    })
    .catch((error) => {
      console.warn(error);
      return false;
    });
};

// const loginTest = () => {
//   axios
//     .post('/login', loginUserData)
//     .then((response) => {
//       const loginResponse = response.data;
//       const userToken = response.data.token;
//       AUTH_TOKEN = userToken;
//       console.log(`X-Authorization: ${AUTH_TOKEN}`);
//       console.log(`Logged in: ${JSON.stringify(loginResponse)}`);
//     })
//     .catch((error) => {
//       throw new Error(error);
//     });
// };

const getUserTest = (user) => {
  axios
    .get(`/user/${user}`)
    .then((response) => {
      const firstName = response.data.first_name;
      const lastName = response.data.last_name;
      const { email } = response.data;
      console.log(`User ${user} data: ${firstName} ${lastName} ${email}`);
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export { createNewAccount, loginTest, getUserTest };
