import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function getSingleChat(chatID, cfg) {
  try {
    const result = async () =>
      axios.get(`/chat/${chatID}`, cfg).then((response) => response.data);
    if (await AsyncStorage.getItem('chatData')) {
      await AsyncStorage.removeItem('chatData');
    }
    const chatData = await result();
    await AsyncStorage.setItem('chatData', JSON.stringify(chatData));
    console.log('returning');
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

export { getSingleChat, getLocalChatStorage };
