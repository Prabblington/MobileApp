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

// POST /user
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
// POST /login
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
// POST /logout
const logoutTest = async (isLoggedIn) => {
  let loggedOut;
  if (isLoggedIn === true) {
    loggedOut = false;
  } else {
    loggedOut = true;
  }

  return axios
    .post('/logout', config)
    .then(async (response) => {
      if (response.status === 200) {
        await AsyncStorage.removeItem('userData');
        await AsyncStorage.removeItem('X-Authorization');
        await AsyncStorage.setItem('isLoggedIn', false);
        axios.defaults.headers.common['X-Authorization'] = '';

        console.log('Signing out!');

        loggedOut = true;
      }
      return loggedOut;
    })
    .catch(async (error) => {
      loggedOut = false;
      return loggedOut;
    });
};

const getUserTest = async () => {
  const user = await AsyncStorage.getItem('userData');
  const parseUser = user !== null ? JSON.parse(user) : null;
  const userID = parseUser.id;

  return axios
    .get(`/user/${userID}`, config)
    .then((response) => true)
    .catch((error) => {
      console.warn(error);
      return false;
    });
};

export { createNewAccount, loginTest, logoutTest, getUserTest };
