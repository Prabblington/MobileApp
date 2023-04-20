import { FlatList } from 'react-native';

import ChatListRenderer from '../../Components/Chats/chatListRender';

export default function SearchScreen() {
  return (
    <FlatList
      // data={result}
      renderItem={({ item }) => <ChatListRenderer chat={item} />}
      style={{ backgroundColor: 'whitesmoke' }}
    />
  );
}
