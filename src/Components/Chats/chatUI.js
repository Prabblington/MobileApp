import { useEffect, useState } from 'react';

import {
  FlatList,
  StyleSheet,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MessageUI from './messageUI';
import InputUI from '../Input/inputUI';

import backgroundImage from '../../images/background.png';
import { getLocalChatStorage } from '../../api/Client/Chat Management/getSingleChat';

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
  const navigation = useNavigation();
  const [chatData, setChatData] = useState({});

  const getChatData = async () => {
    const asyncChatData = await getLocalChatStorage();
    console.log(`ChatUI async: ${asyncChatData.name}`);
    console.log(`ChatUI chatData: ${JSON.stringify(chatData)}`);

    if (JSON.stringify(chatData) !== JSON.stringify(asyncChatData)) {
      navigation.setOptions({ title: asyncChatData.name });
      setChatData(asyncChatData);
    }
  };

  // allows for this to only be called once
  useEffect(() => {
    getChatData();
  }, [setChatData, navigation]);

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 90}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground source={backgroundImage} style={styles.background}>
        <FlatList
          style={styles.list}
          data={chatData.messages}
          renderItem={({ item }) => <MessageUI message={item} />}
          keyExtractor={(item) => item.message_id}
          // inverted
        />
        <InputUI onSend={getChatData} />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
