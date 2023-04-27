import { useEffect, useState, useContext } from 'react';

import {
  FlatList,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MessageUI from './messageUI';
import InputUI from '../Input/inputUI';

import backgroundImage from '../../images/background.png';
// import messages from '../../data/messages.json';
import getSingleChat from '../../api/Client/Chat Management/getSingleChat';
import { AuthContext } from '../../Navigation/Context/authManager';

// make the background image take up the full screen
const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height,
    justifyContent: 'center',
  },

  background: {
    flex: 1,
    width,
    height,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  list: {
    padding: '0.5%',
  },
});

export default function ChatUI() {
  // get data from the chatListProp to match user to messages and correctly
  // display from the right person/group
  const { axiosConfig } = useContext(AuthContext);
  const route = useRoute();
  const navigation = useNavigation();
  const [messages, setMessages] = useState({});
  const [chatData, setChatData] = useState({});

  // allows for this to only be called once
  useEffect(() => {
    async function getChatData() {
      const asyncChatData = await AsyncStorage.getItem('chatData');
      if (chatData !== asyncChatData) {
        console.log(asyncChatData);
        console.log('loading messages...');

        navigation.setOptions({ title: asyncChatData.name });

        setChatData(asyncChatData);
        setMessages(asyncChatData.messages);
      }
    }
    getChatData();
  }, []);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground source={backgroundImage} style={styles.background}>
        <FlatList
          style={styles.list}
          data={messages}
          renderItem={({ item }) => <MessageUI message={item} />}
        />
        <InputUI />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
