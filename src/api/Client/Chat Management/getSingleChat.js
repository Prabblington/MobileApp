import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getLocalChatID() {
  const result = await AsyncStorage.getItem('chatID');
  if (result) {
    return JSON.parse(result);
  }
  return null;
}

export default async function getSingleChat(chatID, cfg) {
  try {
    const result = async () =>
      axios.get(`/chat/${chatID}`, cfg).then((response) => response.data);
    if (await AsyncStorage.getItem('chatData')) {
      await AsyncStorage.removeItem('chatData');
      await AsyncStorage.removeItem('chatID');
    }

    await AsyncStorage.setItem('chatID', JSON.stringify(chatID));

    const chatData = await result();
    await AsyncStorage.setItem('chatData', JSON.stringify(chatData));

    return chatData;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function getLocalChatStorage() {
  const result = await AsyncStorage.getItem('chatData');
  if (result) {
    return JSON.parse(result);
  }
  return null;
}

export { getSingleChat, getLocalChatStorage, getLocalChatID };
