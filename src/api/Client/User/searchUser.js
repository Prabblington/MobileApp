import axios from 'axios';

// GET /search
export default async function searchUser(userQuery, searchInParam, cfg) {
  const queryParams = {
    q: `${userQuery}`,
    search_in: searchInParam,
    limit: 20,
    offset: 0,
  };

  const result = await axios
    .get('./search', queryParams, cfg)
    .then((response) => response.data)
    .catch(async (error) => {
      console.error(error);
    });

  return result;
}
