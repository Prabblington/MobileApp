import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  landingContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'whitesmoke',
  },

  headerContainer: {
    marginTop: '25%',
    width: '100%',
    alignItems: 'center',
  },

  header: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  header2: {
    marginTop: '5%',
    marginLeft: '8%',
    paddingLeft: 10,
    fontSize: 20,
    textAlign: 'center',
  },

  subHeader: {
    marginTop: '2%',
    paddingLeft: 10,
    fontSize: 16,
    textAlign: 'left',
  },

  infoBox: {
    width: '80%',
    height: '70%',
    marginTop: '1%',
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
  },

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

  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#0088FF',
    marginTop: 2,
    marginBottom: 2,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 600,
  },
});

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.landingContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}> Create a new account </Text>
          <Text style={[styles.header2, { fontSize: 20, marginLeft: 0 }]}>
            Your details
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.subHeader}> First Name </Text>
            <TextInput
              placeholder="Example: John"
              editable
              maxLength={80}
              style={styles.input}
            />

            <Text style={styles.subHeader}> Last Name </Text>
            <TextInput
              placeholder="Example: Smith"
              editable
              maxLength={80}
              style={styles.input}
            />

            <Text style={styles.subHeader}> Email Address </Text>
            <TextInput
              placeholder="Example: John.Smith@WhatsThat.com"
              editable
              maxLength={80}
              style={styles.input}
            />
            <Text style={styles.subHeader}> Password </Text>
            <TextInput
              placeholder="Example: Password@123"
              editable
              maxLength={80}
              style={styles.input}
            />

            <Text style={[styles.subHeader, { paddingLeft: 0, fontSize: 14 }]}>
              Start using Whats That
            </Text>
            <Pressable
              style={styles.button}
              onPress={console.log('Create Account')}
              title="Submit details to create new account"
              accessibilityLabel="press this button to submit new account details"
            >
              <Text style={styles.buttonText}>
                Submit details and create new account
              </Text>
            </Pressable>

            <Text style={[styles.subHeader, { paddingLeft: 0, fontSize: 14 }]}>
              Already have an account?
            </Text>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
              title="Go back to Login page"
              accessibilityLabel="press this button to go back to login page"
            >
              <Text style={styles.buttonText}> Login </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
