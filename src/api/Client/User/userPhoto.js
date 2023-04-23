import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

import { getUser } from './getUser';

function getUserPhoto(userID, cfg) {
  return axios
    .get(`/user/${userID}/photo`, cfg)
    .then(async (response) => response.data.message)
    .catch(async (error) => {
      console.log(error);
    });
}

const chooseImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: 1,
    quality: 1,
  });

  if (!result.canceled) {
    console.log(result);
    return result;
  }
  alert('you did not select an image');
  return null;
};

const uploadUserPhoto = async (cfg) => {
  const currentUser = await getUser();
  const userID = currentUser.id;

  return axios
    .post(`/user/${userID}/photo`, cfg)
    .then(async (response) => {
      console.log('Uploaded a photo!');
      console.log(response.status);
    })
    .catch(async (error) => {
      console.log(error);
    });
};

export { getUserPhoto, uploadUserPhoto, chooseImage };
