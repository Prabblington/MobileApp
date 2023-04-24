import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import placeholderPfp from '../../images/placeholderPfp.png';

import {
  storeContactAsyncStorage,
  deleteContactAsyncStorage,
} from './contactAsyncStorage';
import CustButton from '../Input/custButton';
import { AuthContext } from '../../Navigation/Context/authManager';
import startNewChat from '../../api/Client/Chat Management/Chat Options/startNewChat';

import { getUserPhoto } from '../../api/Client/User/userPhoto';
import getSingleChat from '../../api/Client/Chat Management/getSingleChat';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    width: width - 30,
    height: 80,
  },

  content: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  subHeader: {
    color: 'grey',
    maxWidth: '90%',
  },

  text: {
    // flex: 1,
    fontWeight: 'bold',
  },

  image: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },

  button: {
    flex: 1,
    marginLeft: '65%',
  },
});

export default function ContactListRenderer({ contact }) {
  const navigation = useNavigation();
  const { axiosConfigImage, axiosConfig } = useContext(AuthContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const checkExistingPfp = async () => {
      const currentUser = contact.user_id;
      console.log(`userID = ${currentUser}`);
      // const currentPfp = await getUserPhoto(currentUser, axiosConfigImage);

      // if (currentUser && currentPfp) {
      //   const imageURI = `data:image/png;base64,${currentPfp}`;

      //   setImage(imageURI);
      // } else {
      setImage(placeholderPfp);
      // }
    };
    checkExistingPfp();
  }, [image]);

  const handleSendMessage = async () => {
    try {
      const initChatResponse = await startNewChat(axiosConfig);

      const chatRoom = await getSingleChat(
        initChatResponse.chat_id,
        axiosConfig
      );

      return chatRoom;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  return (
    <Pressable
      onPress={() => {
        deleteContactAsyncStorage();
        storeContactAsyncStorage({ contact });
        navigation.navigate('Contact Profile');
      }}
      style={styles.container}
    >
      <View key={contact.user_id} style={styles.container}>
        {/* This will be the users avatar */}
        <View style={styles.image}>
          {image && <Image source={{ uri: image }} style={styles.userImage} />}
        </View>

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.text}>
              {contact.given_name ? contact.given_name : contact.first_name}
            </Text>
            <Text> </Text>
            <Text style={styles.text}>
              {contact.family_name ? contact.family_name : contact.last_name}
            </Text>
          </View>
          <Text style={styles.subHeader}>{contact.email}</Text>
          <View style={styles.button}>
            <CustButton
              onPress={() => console.log('send new message')}
              title="Send message"
              accessibilityLabel="press this button to go to, or start a chat with this person"
              buttonText="Send message"
              type="Tertiary"
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
}
