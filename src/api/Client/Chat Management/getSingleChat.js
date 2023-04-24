import axios from 'axios';

export default async function getSingleChat(chatID, cfg) {
  const query = {
    chat_id: `${chatID}`,
    limit: 20,
    offset: 0,
  };

  try {
    return axios
      .get(`./chat/${chatID}`, query, cfg)
      .then((response) => response.data);
  } catch (e) {
    console.log(e);
    return null;
  }
}
