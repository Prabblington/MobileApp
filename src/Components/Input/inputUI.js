import { useContext, useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { sendMessage } from '../../api/Client/Chat Management/messages';
import { AuthContext } from '../../Navigation/Context/authManager';
import { getLocalChatID } from '../../api/Client/Chat Management/getSingleChat';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'whitesmoke',
    padding: '2%',
    paddingHorizontal: '4%',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    backgroundColor: 'white',
    padding: '2%',
    paddingHorizontal: '4%',
    marginHorizontal: '4%',

    borderRadius: 50,
    borderColor: 'lightgray',
    borderWidth: StyleSheet.hairlineWidth,

    fontSize: 15,
  },

  send: {
    backgroundColor: 'royalblue',
    padding: '3%',
    borderRadius: 15,
    overflow: 'hidden',
  },
});

export default function InputUI() {
  const { axiosConfig } = useContext(AuthContext);
  const [message, setNewMessage] = useState('');

  // check if the send button is working
  const onSend = async () => {
    const chatID = await getLocalChatID();
    const messageData = {
      message,
    };

    const result = await sendMessage(chatID, messageData, axiosConfig);

    if (result.status === 200) {
      console.log('message sent!');
    } else if (result.status === 500) {
      console.warn('Server error');
    }
    setNewMessage('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />

      <TextInput
        value={message}
        style={styles.input}
        onChangeText={setNewMessage}
        placeholder="type your message"
      />

      <MaterialIcons
        onPress={onSend}
        style={styles.send}
        name="send"
        size={16}
        color="white"
      />
    </SafeAreaView>
  );
}
