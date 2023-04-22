import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let userData = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
};

// DUMMY DATA
const loginUserData = {
  email: 'ashley.williams@mmu.ac.uk',
  password: 'Wr3xh4m!',
};
const user8 = {
  first_name: 'Lemmony',
  last_name: 'Snickett',
  email: 'Lemony.snickers@gmail.com',
  password: 'Gkls56@0',
};

// POST /login
export default function userLogin(email, password, cfg) {
  userData = { email, password };
  const loginData = { email, password };

  return axios
    .post('/login', loginData, cfg)
    .then(async (response) => {
      const loginResponse = await response.data;
      userData.id = await JSON.stringify(loginResponse.id);

      await AsyncStorage.setItem('isLoggedIn', true);
      await AsyncStorage.setItem('userData', JSON.stringify(userData));
      await AsyncStorage.setItem('X-Authorization', loginResponse.token);

      axios.defaults.headers.common['Content-Type'] = 'application/json';
      axios.defaults.headers.common['X-Authorization'] = loginResponse.token;

      return true;
    })
    .catch(async () => {
      await AsyncStorage.setItem('isLoggedIn', false);
      return false;
    });
}
