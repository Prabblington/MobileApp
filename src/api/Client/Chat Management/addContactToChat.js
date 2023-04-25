import axios from 'axios';

export default async function addContactToChat(chatID, userID, cfg) {
  try {
    console.log(
      `addContactToChat: chatid: ${chatID} userid: ${JSON.stringify(userID)}`
    );
    return axios
      .post(`/chat/${chatID}/user/${JSON.stringify(userID)}`, cfg)
      .then((response) => {
        console.log(`response data: ${response.data}`);
        console.log(`response status: ${response.status}`);
        return response.status;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}
