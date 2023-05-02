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
import startNewChat from '../../api/Client/Chat Management/startNewChat';

import { getUserPhoto } from '../../api/Client/User/userPhoto';
import addContactToChat from '../../api/Client/Chat Management/addContactToChat';

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
  const { axiosConfig, axiosConfigMessage, axiosConfigImage } =
    useContext(AuthContext);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const checkExistingPfp = async () => {
      // const currentUser = contact.user_id;

      // Commented out because the requests are too much for my pc to handle, it
      // freezes the app

      // const currentPfp = await getUserPhoto(currentUser, axiosConfigImage);

      // if (currentUser && currentPfp) {
      //   const imageURI = `data:image/png;base64,${currentPfp}`;

      //   setImage(imageURI);
      // } else {
      setImage(placeholderPfp);
      // }
    };
    checkExistingPfp();
  }, []);

  const handleMessageInit = async () => {
    try {
      const firstName = contact.given_name
        ? contact.given_name
        : contact.first_name;
      const lastName = contact.family_name
        ? contact.family_name
        : contact.last_name;

      const nameString = {
        name: `${firstName} ${lastName}`,
      };

      const initChatResponse = await startNewChat(nameString, axiosConfig);

      const chatRoomDetails = {
        chat_id: initChatResponse.chat_id,
        user_id: await contact.user_id,
        nameString,
      };

      await addContactToChat(
        chatRoomDetails.chat_id,
        chatRoomDetails.user_id,
        axiosConfigMessage
      );

      return chatRoomDetails;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  return (
    <Pressable
      onPress={async () => {
        await deleteContactAsyncStorage();
        await storeContactAsyncStorage({ contact });
        await navigation.navigate('Contact Profile');
      }}
      style={styles.container}
    >
      <View key={contact.user_id} style={styles.container}>
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
              onPress={async () => {
                const chatRoom = await handleMessageInit();
                navigation.navigate('ChatUI', chatRoom);
              }}
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
