import { FlatList } from 'react-native-web';

import ContactListRenderer from '../Components/Contacts/contactListRender';
import contacts from '../data/contacts.json';

export default function ContactScreen() {
  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => <ContactListRenderer contact={item} />}
      style={{ backgroundColor: 'whitesmoke' }}
    />
  );
}
