import axios from 'axios';

export default async function getChatList(cfg) {
  try {
    const chats = await axios.get('./chat', cfg).then((response) => {
      console.log(response.data);
      console.log(response.status);
    });
    return chats;
  } catch (e) {
    console.log(e);
    return null;
  }
}
