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
    backgroundColor: '#d2c3fa',
    alignItems: 'center',
    justifyContent: 'center',
  },

  landingContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fac5ee',
  },

  headerContainer: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  header: {
    fontSize: 42,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  subHeader: {
    marginTop: '8%',
    marginLeft: '8%',
    fontSize: 30,
    color: '#31053b',
  },

  infoBox: {
    width: '75%',
    height: '58%',
    marginTop: '7%',
    borderRadius: 22,
    backgroundColor: '#e8daf0',
  },

  input: {
    borderWidth: 1,
    borderColor: 'purple',
    backgroundColor: '#f8edff',
    borderRadius: 22,
    padding: 10,
    margin: 10,
    marginTop: '5%',
    width: '91%',
  },
});

function SignUp() {
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

export default SignUp;
