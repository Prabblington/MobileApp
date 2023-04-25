import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function returnCurrentUserID() {
  try {
    const user = await AsyncStorage.getItem('userPublicData');
    const parsedUser = user !== null ? await JSON.parse(user) : null;
    console.log(parsedUser.id);
    return parsedUser.id;
  } catch (e) {
    console.log('ReturnCurrentUserID ERROR');
    console.warn(e);
    return null;
  }
}

async function checkIfCurrentUserExistsLocally() {
  try {
    const result = await AsyncStorage.getItem('userPublicData');
    const parsedResult = result !== null ? await JSON.parse(result) : null;
    return parsedResult;
  } catch (e) {
    console.warn(e);
  }
  return false;
}

async function getUser(userID, cfg) {
  try {
    const result = await axios
      .get(`/user/${userID}`, cfg)
      .then((response) => response.data);
    await AsyncStorage.setItem('userPublicData', JSON.stringify(result));
    return result;
  } catch (e) {
    console.warn(e);
  }
  return null;
}

export { returnCurrentUserID, getUser, checkIfCurrentUserExistsLocally };
