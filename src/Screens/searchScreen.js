import { FlatList, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';

import { useState } from 'react';
import CustInput from '../Components/Input/custInput';
import ChatListRenderer from '../Components/Chats/chatListRender';
import searchUser from '../api/Client/User/searchUser';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [err, setErr] = useState(null);

  const result = async () => {
    try {
      const trySearch = await searchUser(query);
      setErr(null);
    } catch (e) {
      setErr(e);
      console.warn(e);
    }
  };

  return (
    <KeyboardAvoidingView>
      <CustInput
        titleText="Type a name here"
        placeholder="e.g. John Smith"
        value={query}
        setValue={setQuery}
        secureTextEntry
      />
      <View>
        <FlatList
          data={result}
          renderItem={({ item }) => <ChatListRenderer chat={item} />}
          style={{ backgroundColor: 'whitesmoke' }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
