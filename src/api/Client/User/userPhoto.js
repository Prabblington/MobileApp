import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

async function getUserPhoto(userID, cfg) {
  const result = await axios
    .get(`/user/${userID}/photo`, cfg)
    .then(async (response) => {
      const imageData = response.data.assets[0].uri;

      // use this one for contacts maybe? still getting error
      // const imageData = response.data;

      const imageRawImageData = imageData.split(',')[1];
      console.log(JSON.stringify(imageRawImageData));

      return imageRawImageData;
    })
    .catch(async (error) => {
      console.log(error);
      return null;
    });

  return result;
}

async function checkIfImageExists(imagePath) {
  try {
    const image = await FileSystem.readAsStringAsync(imagePath, {
      encoding: FileSystem.EncodingType.Base64,
    });
    return image;
  } catch (e) {
    console.log(e);
  }
  return null;
}

async function onImageSelected(selected) {
  const imagePath = selected.uri;
  const imageContents = await FileSystem.readAsStringAsync(imagePath, {
    encoding: FileSystem.EncodingType.Base64,
  });

  const fileName = 'userPfp.png'; // change the file name to your liking
  const userImagesPath = `${FileSystem.documentDirectory}images/${fileName}`;

  if (checkIfImageExists) {
    await FileSystem.deleteAsync(userImagesPath);
  }

  await FileSystem.writeAsStringAsync(userImagesPath, imageContents, {
    encoding: FileSystem.EncodingType.Base64,
  });
}

async function chooseImage() {
  const image = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!image.canceled) {
    try {
      const imagePath = await onImageSelected(image);
      return imagePath;
    } catch (e) {
      console.log(e);
    }
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

export { getUserPhoto, uploadUserPhoto, chooseImage, checkIfImageExists };
