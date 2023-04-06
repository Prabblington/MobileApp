import { FlatList } from 'react-native-web';

import contacts from '../data/contacts.json';
import ContactListRenderer from '../Components/Contacts/ContactListRender';

const ContactScreen = () =>  {
  return (
    <FlatList
      data={contacts}
      renderItem={({ item }) => <ContactListRenderer chat={item} />}
      style={{ backgroundColor: 'whitesmoke' }}
    />
  );
}

export default ContactScreen;