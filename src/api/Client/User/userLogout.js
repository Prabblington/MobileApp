import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// POST /logout
export default function UserLogout(cfg) {
  return axios
    .post('/logout', cfg)
    .then(async (response) => {
      if (response.status === 200) {
        await AsyncStorage.removeItem('userData');
        await AsyncStorage.removeItem('X-Authorization');
        await AsyncStorage.setItem('isLoggedIn', false);
        axios.defaults.headers.common['X-Authorization'] = '';

        console.log('Signing out!');
      }
      return true;
    })
    .catch(async (error) => {
      console.warn(error);
      return false;
    });
}
