import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CustInput from '../../Components/Input/custInput';

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
    paddingBottom: 22,
    fontSize: 20,
    textAlign: 'center',
  },

  subHeader: {
    marginTop: '1%',
    paddingLeft: 10,
    fontSize: 16,
    textAlign: 'left',
  },

  infoBox: {
    width: '75%',
    height: '70%',
    marginTop: '7%',
    borderRadius: 22,
    backgroundColor: '#f0f0f0',
  },

  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 5,
    textAlign: 'center',
    backgroundColor: '#0088FF',
    marginTop: 15,
    marginBottom: 2,
  },

  buttonText: {
    textAlign: 'center',
    fontWeight: 600,
  },
});

export default function Login() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.landingContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}> Welcome to WhatsThat! </Text>
          <Text style={styles.header2}> Already have an account? </Text>
          <Text style={[styles.subHeader, { paddingLeft: 0 }]}> Log in </Text>

          <View style={styles.infoBox}>
            <Text style={styles.subHeader}> Email Address </Text>
            <CustInput placeholder="e.g. johnSmith@whatsThat.com" />

            <Text style={styles.subHeader}> Password </Text>
            <CustInput placeholder="e.g. password@123" />

            <Pressable
              style={styles.button}
              onPress={console.log('Login Submitted')}
              title="submit login details"
              accessibilityLabel="press this button to log in with provided details"
            >
              <Text style={styles.buttonText}> Submit Login details </Text>
            </Pressable>

            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate('SignUp')}
              title="Create a new account"
              accessibilityLabel="press this button to create a new account"
            >
              <Text style={styles.buttonText}> Create a new account </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
