import { View, SafeAreaView } from 'react-native';
import { useContext } from 'react';

import {
  addContact,
  removeContact,
} from './Client/Contact Management/addedContactOptions';
import {
  blockContact,
  unblockContact,
  getBlockedContacts,
} from './Client/Contact Management/blockContactOptions';
import CustButton from '../Components/Input/custButton';
import { AuthContext } from '../Navigation/Context/authManager';

async function handleAddPress(userid, cfg) {
  try {
    await addContact(userid, cfg);
  } catch (e) {
    console.warn(e);
  }
}

async function handleRemovePress(userid, cfg) {
  try {
    await removeContact(userid, cfg);
  } catch (e) {
    console.warn(e);
  }
}

async function handleBlockContact(userid, cfg) {
  try {
    await blockContact(userid, cfg);
  } catch (e) {
    console.warn(e);
  }
}

async function handleUnblockContact(userid, cfg) {
  try {
    await unblockContact(userid, cfg);
  } catch (e) {
    console.warn(e);
  }
}

async function handleGetBlockedContacts() {
  try {
    const result = await getBlockedContacts();
    console.log(result);
    return result;
  } catch (e) {
    console.warn(e);
  }
  return null;
}

export default function TestComponent() {
  const { axiosConfig } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <View>
        <CustButton
          onPress={() => handleAddPress(3, axiosConfig)}
          buttonText="Add user to contacts"
        />
        <CustButton
          onPress={() => handleRemovePress(3, axiosConfig)}
          buttonText="remove user from contacts"
        />
        <CustButton
          onPress={() => handleBlockContact(3, axiosConfig)}
          buttonText="block contact"
        />
        <CustButton
          onPress={() => handleUnblockContact(3, axiosConfig)}
          buttonText="unblock contact"
        />
        <CustButton
          onPress={() => handleGetBlockedContacts()}
          buttonText="get Blocked Contacts"
        />
      </View>
    </SafeAreaView>
  );
}
