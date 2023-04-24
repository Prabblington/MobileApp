import axios from 'axios';

export default async function getContacts(cfg) {
  try {
    return axios.get('./contacts', cfg).then((response) => {
      console.log(response.data);
      return response.data;
    });
  } catch (e) {
    console.log(e);
    return null;
  }
}
