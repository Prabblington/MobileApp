import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function returnCurrentUserID() {
  try {
    const user = await AsyncStorage.getItem('userData');
    const parsedUser = user !== null ? await JSON.parse(user) : null;
    console.log(parsedUser.id);
    return parsedUser.id;
  } catch (e) {
    console.log('ReturnCurrentUserID ERROR');
    console.warn(e);
    return null;
  }
}

async function getUser(userID, cfg) {
  try {
    return axios.get(`/user/${userID}`, cfg).then((response) => response.data);
  } catch (e) {
    console.warn(e);
    return null;
  }
}

export { returnCurrentUserID, getUser };
