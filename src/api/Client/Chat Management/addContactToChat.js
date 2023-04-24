import axios from 'axios';

export default async function addContactToChat(chatID, userID, cfg) {
  try {
    return axios
      .post(`/chat/${chatID}/user/${userID}`, cfg)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}
