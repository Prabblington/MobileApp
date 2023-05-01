import axios from 'axios';

async function sendMessage(userID, message, cfg) {
  try {
    return axios
      .post(`/chat/${userID}/message`, message, cfg)
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

async function updateMessage(userID, messageID, message, cfg) {
  try {
    return axios
      .patch(`/chat/${userID}/message/${messageID}`, message, cfg)
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

async function deleteMessage(userID, messageID, cfg) {
  try {
    return axios
      .delete(`/chat/${userID}/message/${messageID}`, userID, messageID, cfg)
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
