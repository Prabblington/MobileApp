import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function getUserPhoto(userID, cfg) {
  const result = await axios
    .get(`/user/${userID}/photo`, cfg)
    .then(async (response) => {
      const imageData = response.data.assets[0].uri;

      // use this one for contacts maybe? still getting error
      // const imageData = response.data;

      const imageRawImageData = imageData.split(',')[1];
      await AsyncStorage.setItem('userPhoto', imageRawImageData);
      return imageRawImageData;
    })
    .catch(async (error) => {
      console.log(error);
      return null;
    });

  return result;
}

async function chooseImage() {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    return result;
  }
  alert('you did not select an image');
  return null;
}

async function uploadUserPhoto(userID, photo, cfg) {
  await axios
    .post(`/user/${userID}/photo`, photo, cfg)
    .then(async (response) => {
      console.log(response.status);
      return true;
    })
    .catch(async (error) => {
      console.log(error);
      return false;
    });
}

export { getUserPhoto, uploadUserPhoto, chooseImage };
