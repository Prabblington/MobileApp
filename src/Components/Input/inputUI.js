import { useState } from 'react';
import { StyleSheet, TextInput, SafeAreaView } from 'react-native';

import { AntDesign, MaterialIcons } from '@expo/vector-icons';

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
  // state data
  const [newText, setNewText] = useState('');

  // check if the send button is working
  const onSend = () => {
    console.warn('Sending a new message:', newText);
    setNewText('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />

      <TextInput
        value={newText}
        style={styles.input}
        onChangeText={setNewText}
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
