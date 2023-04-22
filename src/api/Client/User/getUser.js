import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const getUserTest = async (cfg) => {
  const user = await AsyncStorage.getItem('userData');
  const parseUser = user !== null ? JSON.parse(user) : null;
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
};
