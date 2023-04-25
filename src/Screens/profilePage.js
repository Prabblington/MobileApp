import { View, Image, Text, StyleSheet } from 'react-native';
import { useContext, useEffect, useState } from 'react';

import {
  chooseImage,
  getUserPhoto,
  uploadUserPhoto,
  checkIfPhotoExists,
} from '../api/Client/User/userPhoto';

import placeholderPfp from '../images/placeholderPfp.png';

import CustButton from '../Components/Input/custButton';
import { AuthContext } from '../Navigation/Context/authManager';
import {
  checkIfCurrentUserExistsLocally,
  getUser,
  returnCurrentUserID,
} from '../api/Client/User/getUser';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: '30%',
    justifyContent: 'centre',
  },
  userImage: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 120,
    height: 120,
    aspectRatio: 1,
    borderRadius: 20,
  },
  nameBox: {
    flex: 1,
    marginVertical: 8,
  },
  status: {
    marginVertical: 1,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    color: 'grey',
    maxWidth: '90%',
    textAlign: 'center',
  },
  userOptionsContainer: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  userOptions: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 8,
    padding: 4,

    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 12,
  },
  save: {
    marginTop: 22,
  },
});

export default function ProfilePage() {
  const { axiosConfigImage } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const checkExistingData = async () => {
      const imageExists = await checkIfPhotoExists();
      const userExists = await checkIfCurrentUserExistsLocally();

      if (userExists) {
        console.log(JSON.stringify(userExists));
        setUserData(userExists);
      } else if (!userExists) {
        setUserData({});
        console.log('something wrong with userStorage on login');
      }

      if (imageExists) {
        const imageURI = `data:image/png;base64,${imageExists}`;
        console.log(JSON.stringify(imageExists));
        setImage(imageURI);
      } else if (!imageExists) {
        setImage(placeholderPfp);
      } else {
        console.log('image logic is wrong somewhere');
      }

      //   const currentUser = await returnCurrentUserID();
      //   const uData = await getUser(currentUser, axiosConfig);
      //   const currentPfp = await getUserPhoto(currentUser, axiosConfigImage);

      //   if (currentUser && currentPfp) {
      //     const imageURI = `data:image/png;base64,${currentPfp}`;
      //     console.log('hmmm 1');
      //     setImage(imageURI);
      //   } else {
      //     setImage(placeholderPfp);
      //   }
      //   setUserData(uData);
    };
    console.log('hmmm 2');
    checkExistingData();
  }, [image]);

  const handlePhotoUpload = async () => {
    const newImage = await chooseImage();
    const currentUser = await returnCurrentUserID();

    if (newImage !== null) {
      try {
        await uploadUserPhoto(currentUser, newImage, axiosConfigImage);
        setImage(newImage);
      } catch (e) {
        console.warn('there was a problem uploading');
        console.error(e);
      }
    } else {
      console.log("you haven't selected a picture");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userImage}>
          {image && <Image source={{ uri: image }} style={styles.userImage} />}
        </View>
        <View>
          <CustButton
            onPress={handlePhotoUpload}
            title="Choose Image"
            accessibilityLabel="Select a profile photo from your device's storage"
            buttonText="Choose Image"
          />
        </View>
        <View style={styles.nameBox}>
          <Text style={styles.header}>
            {`${userData.first_name} ${userData.last_name}`}
          </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.subHeader}> Online: At work atm! </Text>
        </View>
        {/* <View style={styles.userOptionsContainer}>
          <View style={styles.userOptions}>
            <Text> Icon 1 </Text>
            <Text> Icon 1 </Text>
            <Text> Icon 1 </Text>
          </View>
        </View> */}
      </View>
    </View>
  );
}
