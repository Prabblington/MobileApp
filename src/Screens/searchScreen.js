import { FlatList } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';

import ChatListRenderer from '../Components/Chats/chatListRender';
import chat from '../data/chats.json';

export default function ChatScreen() {
  return (
    <KeyboardAvoidingView>
      <CustInput
        titleText="Password"
        placeholder="e.g. password@123"
        value={password}
        setValue={setPassword}
        secureTextEntry
      />
      <FlatList
        data={chat}
        renderItem={({ item }) => <ChatListRenderer chat={item} />}
        style={{ backgroundColor: 'whitesmoke' }}
      />
    </KeyboardAvoidingView>
  );
}
