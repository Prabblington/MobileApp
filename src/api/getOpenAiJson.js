import axios from 'axios';

const baseURL = 'http://localhost:3333/api/1.0.0';
let AUTH_TOKEN = 'cf1c6c64be48c22cfe8f90a08c1027a4';

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
      const userToken = response.data.token;
      AUTH_TOKEN = userToken;
      console.log(`X-Authorization: ${AUTH_TOKEN}`);
      console.log(`Logged in: ${JSON.stringify(loginResponse)}`);
    })
    .catch((error) => {
      throw new Error(error);
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
