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

const user8 = {
  first_name: 'Lemmony',
  last_name: 'Snickett',
  email: 'Lemony.snickers@gmail.com',
  password: 'Gkls56@0',
};

let userData = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

const createNewAccount = (firstName, lastName, email, password) => {
  userData = { first_name: firstName, last_name: lastName, email, password };

  axios
    .post('/user', userData, config)
    .then(async (response) => {
      await response.data;

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

  return axios
    .post('/login', loginData, config)
    .then(async (response) => {
      const loginResponse = await response.data;
      userData.id = await JSON.stringify(loginResponse.id);

      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      await AsyncStorage.setItem(
        'X-Authorization',
        JSON.stringify(loginResponse.token)
      );
      await AsyncStorage.setItem('isLoggedIn', true);

      axios.defaults.headers.common['X-Authorization'] = loginResponse.token;

      console.log(`X-Authorization: ${JSON.stringify(loginResponse.token)}`);
      console.log(`Logged in: ${JSON.stringify(loginResponse)}`);
      console.log(`User: ${JSON.stringify(userData)}`);

      return true;
    })
    .catch(async (error) => {
      console.warn(error);
      await AsyncStorage.setItem('isLoggedIn', false);
      return false;
    });
};

const logoutTest = async () => {
  await AsyncStorage.removeItem('userData');
  await AsyncStorage.removeItem('X-Authorization');
  await AsyncStorage.setItem('isLoggedIn', false);
  axios.defaults.headers.common['X-Authorization'] = '';

  console.log('Signed out!');
};

const getUserTest = async () => {
  const user = await AsyncStorage.getItem('userData');
  const parseUser = user !== null ? JSON.parse(user) : null;
  const userID = parseUser.id;

  axios
    .get(`/user/${userID}`)
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

export { createNewAccount, loginTest, logoutTest, getUserTest };
