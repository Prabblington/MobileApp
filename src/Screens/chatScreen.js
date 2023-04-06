import { FlatList } from 'react-native';

import ChatListRenderer from '../Components/Chats/chatListRender';
import chat from '../data/chats.json';

const ChatScreen = () => {
  return (
    <FlatList
      data={chat}
      renderItem={({ item }) => <ChatListRenderer chat={item} />}
      style={{ backgroundColor: 'whitesmoke' }}
    />
  );
}

export default ChatScreen;