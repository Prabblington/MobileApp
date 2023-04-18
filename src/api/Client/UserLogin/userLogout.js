import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { config } from '../../AxiosConfig/axiosConfig';

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
      console.warn(error);
      loggedOut = false;
      return loggedOut;
    });
};
