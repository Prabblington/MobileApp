import axios from 'axios';

// GET /search
export default function searchUser(userQuery, searchInParam, cfg) {
  const queryParams = {
    q: `${userQuery}`,
    // filter: 'first_name, last_name, email',
    // limit: 20,
    // search_in: `${searchInParam}`,
    // offset: 0,
  };

  // let result = {};

  axios
    .get('./search', queryParams, cfg)
    .then((response) => {
      console.log(response.data);
      // DO SOMETHING WITH THE RESPONSE
    })
    .catch(async (error) => {
      // DO SOMETHING WHEN AN ERROR IS THROWN
      console.log(cfg);
      console.error(error);
    });

  // return result;
}
