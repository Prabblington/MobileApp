import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'whitesmoke',
    borderRadius: 22,
    padding: 10,
    paddingBottom: 10,
    margin: 10,
    marginTop: '2%',
    width: '91%',
  },
});

export default function CustInput({ value, setValue, placeholder }) {
  return (
    <View style={styles.button}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        editable
        maxLength={80}
        style={styles.input}
      />
    </View>
  );
}
