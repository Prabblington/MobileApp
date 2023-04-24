import AsyncStorage from '@react-native-async-storage/async-storage';

async function storeContactAsyncStorage({ contact }) {
  try {
    console.log('Contact Stored');
    console.log(`store ${JSON.stringify(contact)}`);
    await AsyncStorage.setItem('viewContactDetails', JSON.stringify(contact));
  } catch (e) {
    console.log(e);
  }
}

async function getContactAsyncStorage() {
  try {
    const contactObject = await AsyncStorage.getItem('viewContactDetails');
    return JSON.parse(contactObject);
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function deleteContactAsyncStorage() {
  try {
    console.log('Contact Deleted');
    await AsyncStorage.removeItem('viewContactDetails');
  } catch (e) {
    console.log(e);
  }
}

export {
  storeContactAsyncStorage,
  deleteContactAsyncStorage,
  getContactAsyncStorage,
};
