import { useContext, useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

import { sendMessage } from '../../api/Client/Chat Management/messages';
import { AuthContext } from '../../Navigation/Context/authManager';

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
  const { axiosConfig, user } = useContext(AuthContext);
  const [message, setNewMessage] = useState('');

  // check if the send button is working
  const onSend = async () => {
    // write sendMessage here
    const result = sendMessage(user.id, message, axiosConfig);
    if (result.status === 200) {
      console.log('message sent!');
      console.log(result.data);
    } else if (result.status === 500) {
      console.warn('Server error');
    }

    console.warn('Sending a new message:', setNewMessage);
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
