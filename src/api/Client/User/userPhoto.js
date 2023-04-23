import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

async function getUserPhoto(userID, cfg) {
  const result = await axios
    .get(`/user/${userID}/photo`, cfg)
    .then(async (response) => {
      const imageData = response.data.assets[0].uri;
      const imageRawImageData = imageData.split(',')[1];
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

  console.log(result.base64);

  if (!result.canceled) {
    return result;
  }
  alert('you did not select an image');
  return null;
}

async function uploadUserPhoto(userID, photo, cfg) {
  const result = await axios
    .post(`/user/${userID}/photo`, photo, cfg)
    .then(async (response) => {
      console.log('Uploaded a photo!');
      console.log(response.status);
    })
    .catch(async (error) => {
      console.log(error);
    });
}

export { getUserPhoto, uploadUserPhoto, chooseImage };
