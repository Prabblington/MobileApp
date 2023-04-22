import { FlatList, View, StyleSheet } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';
import DropDownPicker from 'react-native-dropdown-picker';

import { useState } from 'react';

import CustInput from '../../Components/Input/custInput';
import CustButton from '../../Components/Input/custButton';
import searchUser from '../../api/Client/User/searchUser';
import ContactListRenderer from '../../Components/Contacts/contactListRender';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropDownContainer: {
    padding: 2,
    alignSelf: 'center',
    width: '25%',
    backgroundColor: '#fafafa',
    zIndex: 10,
    position: 'relative',
    margin: 10,
  },
});

export default function SearchOptionScreen() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Contacts', value: 'contacts' },
    { label: 'All', value: 'all' },
  ]);
  const [value, setValue] = useState('all');
  const [err, setErr] = useState(null);

  const result = async () => {
    try {
      const trySearch = await searchUser(query, value);
      console.log(query);
      setErr(null);
    } catch (e) {
      setErr(e);
      console.warn(err);
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
      <DropDownPicker
        style={styles.dropDownContainer}
        label="Search Location: all or contacts"
        open={open}
        items={items}
        value={value}
        setOpen={setOpen}
        setValue={setValue}
      />
      <CustButton
        onPress={result}
        title="Search Button"
        accessibilityLabel="press button to search for all users containing name"
        buttonText="Search"
      />
      <View>
        <FlatList
          data={result}
          renderItem={({ item }) => <ContactListRenderer contact={item} />}
          style={{ backgroundColor: 'whitesmoke' }}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
