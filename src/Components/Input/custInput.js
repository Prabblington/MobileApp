import { StyleSheet, View, Text, TextInput } from 'react-native';

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

  subHeader: {
    marginTop: '1%',
    paddingLeft: 10,
    fontSize: 16,
    textAlign: 'left',
  },
});

export default function CustInput({
  titleText,
  value,
  setValue,
  placeholder,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.button}>
      <Text style={styles.subHeader}> {titleText} </Text>
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
