import { StyleSheet, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#0088FF',
    marginTop: 8,
    marginBottom: 2,
    alignSelf: 'center',
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 600,
  },
});

export default function CustButton({
  onPress,
  title,
  accessibilityLabel,
  buttonText,
}) {
  return (
    <Pressable
      style={styles.button}
      onPress={() => onPress()}
      title={title}
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={styles.buttonText}> {buttonText} </Text>
    </Pressable>
  );
}
