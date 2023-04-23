import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

async function getUserPhoto(userID, cfg) {
  try {
    const response = await axios.get(`/user/${userID}/photo`, cfg);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}

async function chooseImage() {
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  console.log(result);

  if (!result.canceled) {
    return result;
  }
  alert('you did not select an image');
  return null;
}

async function uploadUserPhoto(userID, photo, cfg) {
  axios
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
