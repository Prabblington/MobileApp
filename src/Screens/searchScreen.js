import { FlatList, View } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';
import { Dropdown } from 'react-native-dropdown-picker';

import { useState } from 'react';

import CustInput from '../Components/Input/custInput';
import CustButton from '../Components/Input/custButton';
import ChatListRenderer from '../Components/Chats/chatListRender';
import searchUser from '../api/Client/User/searchUser';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('all');
  const [err, setErr] = useState(null);

  const searchLocationOptions = ['contacts', 'all'];
  const handleSearchLocation = (v) => {
    setValue(v);
  };

  const result = async () => {
    try {
      const trySearch = await searchUser(query, value);
      setErr(null);
    } catch (e) {
      setErr(e);
      console.warn(e);
    }
  };

  return (
    <KeyboardAvoidingView>
      <CustInput
        titleText="Search for a contact or user"
        accessibilityLabel="Type in this box to search for a contact"
        placeholder="e.g. John Smith"
        value={query}
        setValue={setQuery}
      />
      <CustButton
        onPress={result}
        title="Search Button"
        accessibilityLabel="press button to search for all users containing name"
        buttonText="Search"
      />
      <Dropdown
        label="Search Location: all or contacts"
        open={open}
        items={searchLocationOptions}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
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
