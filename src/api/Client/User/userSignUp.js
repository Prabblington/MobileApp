import axios from 'axios';

import config from '../../../Navigation/Context/authManager';

// POST /user
export default function userSignup(firstName, lastName, email, password) {
  const userData = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  };

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
}
