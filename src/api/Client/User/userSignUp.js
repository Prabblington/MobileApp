import axios from 'axios';
// Password@123
// POST /user
export default async function userSignup(
  firstName,
  lastName,
  email,
  password,
  cfg
) {
  const userData = {
    first_name: firstName,
    last_name: lastName,
    email,
    password,
  };

  const result = await axios
    .post('/user', userData, cfg)
    .then(async (response) => {
      console.log(response.data);

      return response.status;
    })
    .catch((error) => {
      console.warn(error);
      return false;
    });
}
