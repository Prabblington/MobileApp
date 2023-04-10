import { StyleSheet, View, TextInput } from 'react-native';

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

export default function CustInput({
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.button}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        editable
        maxLength={80}
        style={styles.input}
      />
    </View>
  );
}
