import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const returnCurrentUser = async () => {
  try {
    const user = await AsyncStorage.getItem('userData');
    const parseUser = user !== null ? await JSON.parse(user) : null;
    return parseUser;
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

const getUser = async (userID, cfg) => {
  try {
    axios
      .get(`/user/${userID}`, cfg)
      .then((response) => {
        const firstName = response.data.first_name;
        const lastName = response.data.last_name;
        const { email } = response.data;
        console.log(`User ${userID} data: ${firstName} ${lastName} ${email}`);
        return { firstName, lastName, email };
      })
      .catch((error) => {
        console.warn(error);
        return null;
      });
  } catch (e) {
    console.warn(e);
  }
};

export { returnCurrentUser, getUser };
