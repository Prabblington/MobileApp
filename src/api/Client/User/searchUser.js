import axios from 'axios';

import config from '../../../Navigation/Context/authManager';

// GET /search
export default function searchUser(userQuery, searchInParam) {
  const queryParams = {
    q: userQuery,
    filter: 'first_name, last_name, email',
    // limit: 20,
    // search_in: `${searchInParam}`,
    // offset: 0,
  };

  let result = {};

  axios
    .get('./search', userQuery, config)
    .then((response) => {
      result = response.data;
      // DO SOMETHING WITH THE RESPONSE
    })
    .catch(async (error) => {
      // DO SOMETHING WHEN AN ERROR IS THROWN
      console.error(error);
    });

  return result;
}
