import axios from 'axios';

export default async function getSingleChat(chatID, cfg) {
  const query = {
    q: `${chatID}`,
    limit: 20,
    offset: 0,
  };

  try {
    return axios
      .get(`./chat/${chatID}`, query, cfg)
      .then((response) => response);
  } catch (e) {
    console.log(e);
    return null;
  }
}
