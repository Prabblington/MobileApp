import { useState, useEffect, useMemo } from 'react';
import { KeyboardAvoidingView, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SearchListRenderer from '../../Screens/Search/searchListRenderer';

export default function ContactsToAdd() {
  const [displayResult, setDispayResult] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        if (displayResult === false) {
          const sResult = await AsyncStorage.getItem('searchedContacts');

          setSearchResult(JSON.parse(sResult));
          setDispayResult(true);
        }
      } catch (e) {
        setDispayResult(false);
        console.warn(e);
      }
    };
    getAllUsers();
  }, []);

  const memoisedSearchListRenderer = useMemo(
    () => <SearchListRenderer result={searchResult} />,
    [searchResult]
  );

  useEffect(() => {
    if (searchResult) {
      setDispayResult(true);
    }
  }, [displayResult]);

  return (
    <KeyboardAvoidingView>
      <View>
        {displayResult ? (
          memoisedSearchListRenderer
        ) : (
          <View>
            <Text> there are no search results</Text>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
