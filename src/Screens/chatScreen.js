import { FlatList } from 'react-native';
import { useContext, useEffect, useState } from 'react';

import ChatListRenderer from '../Components/Chats/chatListRender';
import getChatList from '../api/Client/Chat Management/getChatList';
import { AuthContext } from '../Navigation/Context/authManager';

export default function ChatScreen() {
  const { axiosConfig } = useContext(AuthContext);
  const [chatList, setChatList] = useState({});

  useEffect(() => {
    async function getChats() {
      const result = await getChatList(axiosConfig);
      console.log(result);
      setChatList(result);
      console.log(JSON.stringify(result));
    }
    getChats();
  }, []);

  return (
    <FlatList
      data={chatList}
      renderItem={({ item }) => <ChatListRenderer chat={item} />}
      style={{ backgroundColor: 'whitesmoke' }}
    />
  );
}
