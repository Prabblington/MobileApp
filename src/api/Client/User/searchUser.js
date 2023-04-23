import axios from 'axios';

// GET /search
export default async function searchUser(userQuery, searchInParam, cfg) {
  const queryParams = {
    q: `${userQuery}`,
    search_in: searchInParam,
    limit: 20,
    offset: 0,
  };

  // let result = {};

  const result = await axios
    .get('./search', queryParams, cfg)
    .then((response) => {
      console.log(response.data);

      // DO SOMETHING WITH THE RESPONSE
      return JSON.stringify(response.data);
    })
    .catch(async (error) => {
      // DO SOMETHING WHEN AN ERROR IS THROWN
      console.log(cfg);
      console.error(error);
    });

  return result;
}
