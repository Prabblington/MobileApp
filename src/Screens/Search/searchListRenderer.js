import { Text, ScrollView } from 'react-native';

import NEWContactListRenderer from '../../Components/Contacts/NEWContactListRenderer';

export default function SearchListRenderer({ result }) {
  if (!Array.isArray(result)) {
    return <Text>No results found</Text>;
  }

  return (
    <ScrollView>
      {result.map((item) => (
        <NEWContactListRenderer key={item.user_id} contact={item} />
      ))}
    </ScrollView>
  );
}
