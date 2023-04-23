import { FlatList, ScrollView } from 'react-native';

import NEWContactListRenderer from '../../Components/Contacts/NEWContactListRenderer';

export default function SearchListRenderer({ result }) {
  console.log('reached searchListRenderer');
  return (
    <ScrollView>
      <FlatList
        data={result}
        renderItem={({ item }) => <NEWContactListRenderer contact={item} />}
        style={{ backgroundColor: 'whitesmoke' }}
      />
    </ScrollView>
  );
}
