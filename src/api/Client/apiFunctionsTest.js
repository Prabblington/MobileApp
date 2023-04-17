import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'http://localhost:3333/api/1.0.0';

axios.defaults.baseURL = baseURL;

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

const signupTest = () => {
  axios
    .post('/user', signupData)
    .then((response) => {
      const signup = response.data;
    })
    .catch((error) => {
      throw new Error(error);
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

// POST /user
const signupData = {
  first_name: 'Ashley',
  last_name: 'Williams',
  email: 'ashley.williams@mmu.ac.uk',
  password: 'Wr3xh4m!',
};

// POST /login
const loginUserData = {
  email: 'ashley.williams@mmu.ac.uk',
  password: 'Wr3xh4m!',
};

const loginTest = (email, password) => {
  const userData = { email, password, id: '' };
  const loginData = { email: userData.email, password: userData.password };

  axios
    .post('/login', loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(async (response) => {
      const loginResponse = await response.data;
      userData.id = await JSON.stringify(loginResponse.id);

      await AsyncStorage.setItem('userData', userData);
      await AsyncStorage.setItem('X-Authorization', loginResponse.token);

      axios.defaults.headers.common['X-Authorization'] = loginResponse.token;

      console.log(`X-Authorization: ${JSON.stringify(loginResponse.token)}`);
      console.log(`Logged in: ${JSON.stringify(loginResponse)}`);

      return true;
    })
    .catch((error) => {
      console.warn(error);
      return false;
    });
};

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

export { signupTest, loginTest, getUserTest };
