import {
  Button,
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
  },

  infoBox: {
    width: '75%',
    height: '58%',
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
    margin: 10,
    marginTop: '5%',
    width: '91%',
  },

  // ------------------------------ not used ----------------------------------
  loginButton: {
    backgroundColor: '#C8FF24',
  },
  // ------------------------------ not used ----------------------------------
  signUpButton: {
    backgroundColor: '#C8FF24',
  },
});

export default function Login() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.landingContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome to WhatsThat!</Text>
          <Text style={[styles.subHeader, { fontSize: 16, marginLeft: '0%' }]}>
            Do you already have an account with us?
          </Text>
          <Text style={[styles.subHeader, { fontSize: 16, marginLeft: '0%' }]}>
            Log in
          </Text>

          <View style={styles.infoBox}>
            <Text style={[styles.subHeader, { fontSize: 15, marginTop: '5%' }]}>
              Email Address
            </Text>

            <TextInput
              placeholder="Example: user@user.com"
              editable
              maxLength={80}
              style={styles.input}
            />

            <Text style={[styles.subHeader, { fontSize: 15, marginTop: '5%' }]}>
              Password
            </Text>

            <TextInput
              placeholder="Example: Password@123"
              editable
              maxLength={80}
              style={styles.input}
            />

            <Button
              style={styles.loginButton}
              onPress={console.log('Login Submitted')}
              title="submit login details"
              accessibilityLabel="press this button to log in with provided details"
            />
            <Button
              style={styles.signUpButton}
              onPress={() => navigation.navigate('SignUp')}
              title="Create a new account"
              accessibilityLabel="press this button to log in with provided details"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
