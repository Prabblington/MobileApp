import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

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
    marginTop: '10%',
    width: '100%',
    alignItems: 'center',
  },

  header: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subHeader: {
    marginTop: '5%',
    marginLeft: '8%',
    fontSize: 30,
  },

  infoBox: {
    width: '75%',
    height: '70%',
    marginTop: '7%',
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
    marginTop: '5%',
    width: '91%',
  },
});

export default function SignUp() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.landingContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Create a new account</Text>
          <Text style={styles.subHeader}>Fill in your details here</Text>

          <View style={styles.infoBox}>
            <Text
              style={[styles.subHeader, { fontSize: 16, marginLeft: '0%' }]}
            >
              First Name
            </Text>
            <TextInput
              placeholder="Example: John"
              editable
              maxLength={80}
              style={styles.input}
            />

            <Text
              style={[styles.subHeader, { fontSize: 16, marginLeft: '0%' }]}
            >
              Last Name
            </Text>
            <TextInput
              placeholder="Example: Smith"
              editable
              maxLength={80}
              style={styles.input}
            />

            <Text
              style={[styles.subHeader, { fontSize: 16, marginLeft: '0%' }]}
            >
              Email Address
            </Text>
            <TextInput
              placeholder="Example: John.Smith@WhatsThat.com"
              editable
              maxLength={80}
              style={styles.input}
            />
            <Text
              style={[styles.subHeader, { fontSize: 16, marginLeft: '0%' }]}
            >
              Password
            </Text>
            <TextInput
              placeholder="Example: Password@123"
              editable
              maxLength={80}
              style={styles.input}
            />

            <Text
              style={[styles.subHeader, { fontSize: 16, marginLeft: '0%' }]}
            >
              Start using Whats That
            </Text>
            <Button
              style={styles.loginButton}
              onPress={console.log('Create Account')}
              title="Submit details to create new account"
              accessibilityLabel="press this button to submit new account details"
            />

            <Text
              style={[styles.subHeader, { fontSize: 16, marginLeft: '0%' }]}
            >
              Already have an account?
            </Text>
            <Button
              style={styles.loginButton}
              onPress={console.log('Back to Login page')}
              title="Go back to Login page"
              accessibilityLabel="press this button to go back to login page"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
