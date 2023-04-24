import axios from 'axios';

export default async function getChatList(cfg) {
  try {
    const chats = await axios.get('./chat', cfg).then((response) => {
      console.log(response.data);
      console.log(response.status);
    });
  } catch (e) {
    console.log(e);
  }
}
