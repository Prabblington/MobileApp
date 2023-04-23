import { View, Image, Text, StyleSheet } from 'react-native';
import { useContext, useEffect, useState } from 'react';

import {
  chooseImage,
  getUserPhoto,
  uploadUserPhoto,
} from '../../api/Client/User/userPhoto';

import placeholderPfp from '../../images/placeholderPfp.png';

import CustButton from '../Input/custButton';
import { AuthContext } from '../../Navigation/Context/authManager';
import { returnCurrentUserID } from '../../api/Client/User/getUser';

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

export default function ProfilePage({ user }) {
  const { axiosConfigImage } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const checkExistingPfp = async () => {
      const currentUser = await returnCurrentUserID();
      const currentPfp = await getUserPhoto(currentUser, axiosConfigImage);

      if (currentUser && currentPfp) {
        const imageURI = `data:image/png;base64,${currentPfp}`;

        setImage(imageURI);
      } else {
        setImage(placeholderPfp);
      }
    };
    checkExistingPfp();
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
          <Text style={styles.header}> John Smith </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.subHeader}> Online: At work atm! </Text>
        </View>
        <View style={styles.userOptionsContainer}>
          <View style={styles.userOptions}>
            <Text> Icon 1 </Text>
            <Text> Icon 1 </Text>
            <Text> Icon 1 </Text>
          </View>
        </View>
        {/* <View style={styles.save}>
          <CustButton
            onPress={() => console.log('profile saved')}
            title="Save Profile changes"
            accessibilityLabel="Select a profile photo from your device's storage"
            buttonText="Save changes"
          />
        </View> */}
      </View>
    </View>
  );
}
