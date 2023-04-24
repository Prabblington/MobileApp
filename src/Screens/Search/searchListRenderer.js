import { Text, ScrollView } from 'react-native';

import ContactListRenderer from '../../Components/Contacts/contactListRenderer';

export default function SearchListRenderer({ result }) {
  if (!Array.isArray(result)) {
    return <Text>No results found</Text>;
  }

  return (
    <ScrollView>
      {result.map((item) => (
        <ContactListRenderer key={item.user_id} contact={item} />
      ))}
    </ScrollView>
  );
}
