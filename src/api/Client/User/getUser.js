import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const returnCurrentUser = async (cfg) => {
  try {
    const user = await AsyncStorage.getItem('userData');
    const parseUser = user !== null ? await JSON.parse(user) : null;

    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};

const getUser = async (cfg) => {
  try {
    const user = await AsyncStorage.getItem('userData');
    const parseUser = user !== null ? await JSON.parse(user) : null;
    const userID = parseUser.id;

    axios
      .get(`/user/${userID}`, cfg)
      .then((response) => {
        const firstName = response.data.first_name;
        const lastName = response.data.last_name;
        const { email } = response.data;
        console.log(`User ${user} data: ${firstName} ${lastName} ${email}`);
      })
      .catch((error) => {
        console.log(error);
        throw new Error(error);
      });
  } catch (e) {
    console.log(e);
  }
};

export { returnCurrentUser, getUser };
