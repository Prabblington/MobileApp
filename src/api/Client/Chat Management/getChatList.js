import axios from 'axios';

export default async function getChatList(cfg) {
  try {
    const chats = await axios.get('./chat', cfg).then((response) => {
      console.log(`response.data: ${response.data}`);
      console.log(response.status);
      return response.data;
    });
    return chats;
  } catch (e) {
    console.log(e);
    return null;
  }
}
