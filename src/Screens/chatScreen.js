import { FlatList } from 'react-native';
// import { useContext, useEffect, useState } from 'react';

import ChatListRenderer from '../Components/Chats/chatListRender';
import chat from '../data/chats.json';
// import getChatList from '../api/Client/Chat Management/getChatList';
// import { AuthContext } from '../Navigation/Context/authManager';

export default function ChatScreen() {
  // const { axiosConfig } = useContext(AuthContext);
  // const [chatList, setChatList] = useState({});

  // const getChatsTest = async () => {
  //   await getChatList(axiosConfig);
  // };
  // console.log(getChatList);

  // useEffect(() => {
  //   async function getChats() {
  //     const result = await getChatList(axiosConfig);
  //     console.log(result.data);
  //     setChatList(result.data);
  //     console.log(JSON.stringify(result));
  //   }
  //   getChats();
  // }, [chatList]);

  return (
    <FlatList
      data={chat}
      renderItem={({ item }) => <ChatListRenderer chat={item} />}
      style={{ backgroundColor: 'whitesmoke' }}
    />
  );
}
