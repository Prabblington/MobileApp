import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function returnCurrentUserID() {
  try {
    const user = await AsyncStorage.getItem('userData');
    const parsedUser = user !== null ? await JSON.parse(user) : null;
    return parsedUser.id;
  } catch (e) {
    console.warn(e);
    return null;
  }
}

async function getUser(userID, cfg) {
  try {
    const result = await axios.get(`/user/${userID}`, cfg).then((response) => {
      if (result.message === 'Network Error') {
        return returnCurrentUserID();
      }
      if (result.status === 200) {
        return result.data;
      }
    });

    return result;
  } catch (e) {
    console.warn(e);
    return null;
  }
}

export { returnCurrentUserID, getUser };
