import { FlatList } from 'react-native';
import ChatListRenderer from './chatListRender';
import chat from '../data/chats.json';

const chatScreen = () => {
  return (
    <FlatList
      data={chat}
      renderItem={({ item }) => <ChatListRenderer chat={item} />}
      style={{ backgroundColor: 'whitesmoke' }}
    />
  );
}

export default chatScreen;