import axios from 'axios';

async function sendMessage(chatID, message, cfg) {
  try {
    return axios
      .post(`/chat/${chatID}/message`, message, cfg)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        return response;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function updateMessage(chatID, messageID, message, cfg) {
  try {
    return axios
      .patch(`/chat/${chatID}/message/${messageID}`, message, cfg)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        return response.data;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function deleteMessage(chatID, messageID, cfg) {
  try {
    return axios
      .delete(`/chat/${chatID}/message/${messageID}`, chatID, messageID, cfg)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
        return response.data;
      });
  } catch (e) {
    console.log(e);
    return null;
  }
}

export { sendMessage, updateMessage, deleteMessage };
