import { StyleSheet, Pressable, Text } from 'react-native';

const styles = StyleSheet.create({
  buttonMain: {
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

  buttonSecondary: {
    marginTop: '5%',
    borderWidth: 0,
    backgroundColor: 'clear',
  },

  buttonTertiary: {
    justifyContent: 'center',
    marginTop: '5%',
    marginHorizontal: 2,
    marginVertical: 5,
    backgroundColor: 'clear',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 2,
    textAlign: 'center',
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
  type = `Main`,
}) {
  return (
    <Pressable
      style={[styles[`button${type}`], styles[`button${type}`]]}
      onPress={() => onPress()}
      title={title}
      accessibilityLabel={accessibilityLabel}
    >
      <Text style={styles.buttonText}> {buttonText} </Text>
    </Pressable>
  );
}
