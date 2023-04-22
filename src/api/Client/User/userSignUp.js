import axios from 'axios';

// POST /user
export default function userSignup(firstName, lastName, email, password, cfg) {
  const userData = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  };

  axios
    .post('/user', userData, cfg)
    .then(async (response) => {
      await response.data;

      return true;
    })
    .catch((error) => {
      console.warn(error);
      return false;
    });
}
