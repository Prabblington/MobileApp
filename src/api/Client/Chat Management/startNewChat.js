import axios from 'axios';

import addContactToChat from './addContactToChat';

export default async function startNewChat(userID, name, cfg) {
  try {
    const initChat = await axios.post('./chat', name, cfg);

    if (initChat === 200) {
      try {
        const result = await addContactToChat(initChat.chat_id, userID, cfg);
        return result;
      } catch (e) {
        console.log(e);
      }
    }
    return null;
  } catch (e) {
    console.log(e);
    return null;
  }
}
