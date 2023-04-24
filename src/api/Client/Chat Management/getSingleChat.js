import axios from 'axios';

export default async function getSingleChat(chatID, cfg) {
  try {
    return axios.get(`./chat/${chatID}`, cfg).then((response) => response.data);
  } catch (e) {
    console.log(e);
    return null;
  }
}
