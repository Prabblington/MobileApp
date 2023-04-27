import { Text, View, StyleSheet } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';
import DropDownPicker from 'react-native-dropdown-picker';

import { useContext, useEffect, useState, useMemo } from 'react';

import CustInput from '../../Components/Input/custInput';
import CustButton from '../../Components/Input/custButton';
import searchUser from '../../api/Client/User/searchUser';
import SearchListRenderer from './searchListRenderer';
import { AuthContext } from '../../Navigation/Context/authManager';

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
  const { axiosConfig } = useContext(AuthContext);

  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Contacts', value: 'contacts' },
    { label: 'All', value: 'all' },
  ]);
  const [value, setValue] = useState('all');
  const [err, setErr] = useState(null);

  const [displayResult, setDispayResult] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const handleSearchResult = async () => {
    if (query.length === 0) {
      setSearchResult('');
      setDispayResult(false);
      return;
    }
    try {
      const sResult = await searchUser(query, value, axiosConfig);

      setSearchResult(sResult);
      setDispayResult(true);
      setErr(null);
    } catch (e) {
      setDispayResult(false);
      setErr(e);
      console.warn(err);
    }
  };

  const memoisedSearchListRenderer = useMemo(
    () => <SearchListRenderer result={searchResult} />,
    [searchResult]
  );

  useEffect(() => {
    if (searchResult) {
      setDispayResult(true);
    }
  }, [searchResult, displayResult]);

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
        onPress={handleSearchResult}
        title="Search Button"
        accessibilityLabel="press button to search for all users containing name"
        buttonText="Search"
      />
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
