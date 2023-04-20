import axios from 'axios';

import { axiosConfig } from '../../../Navigation/Context/authManager';

// GET /search
export default function searchUser(userQuery, searchInParam) {
  const queryParams = {
    q: `${userQuery}`,
    // filter: 'first_name, last_name, email',
    // limit: 20,
    // search_in: `${searchInParam}`,
    // offset: 0,
  };

  // let result = {};

  axios
    .get('./search', queryParams, axiosConfig)
    .then((response) => {
      console.log(response.data);
      // DO SOMETHING WITH THE RESPONSE
    })
    .catch(async (error) => {
      // DO SOMETHING WHEN AN ERROR IS THROWN
      console.log(axiosConfig);
      console.error(error);
    });

  // return result;
}
