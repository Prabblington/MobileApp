import { Text, View } from 'react-native-web';
import { useContext, useEffect, useState, useMemo } from 'react';

import getContacts from '../api/Client/Contact Management/getContacts';
import { AuthContext } from '../Navigation/Context/authManager';
import SearchListRenderer from './Search/searchListRenderer';

export default function ContactScreen() {
  const { axiosConfig } = useContext(AuthContext);
  const [contacts, setContacts] = useState({});
  const [displayResult, setDisplayResult] = useState(false);
  const [err, setErr] = useState(null);

  const memoisedContactsRenderer = useMemo(
    () => <SearchListRenderer result={contacts} />,
    [contacts]
  );

  useEffect(() => {
    const handleGetContacts = async () => {
      try {
        const result = await getContacts(axiosConfig);
        setContacts(result);
        setDisplayResult(true);
      } catch (e) {
        setContacts([]);
        setErr(e);
        console.warn('error in handleContactList');
        console.warn(err);
      }
    };

    handleGetContacts();
  }, [displayResult]);

  if (!Array.isArray(contacts)) {
    return (
      <Text>
        You do not have any contacts yet! Search for a contact and add someone
        to get started
      </Text>
    );
  }

  return (
    <View>
      {displayResult ? (
        memoisedContactsRenderer
      ) : (
        <View>
          <Text> there are no search results</Text>
        </View>
      )}
    </View>
  );
}
