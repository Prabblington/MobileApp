import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import CustInput from '../../Components/Input/custInput';
import CustButton from '../../Components/Input/custButton';

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
    height: '80%',
    marginTop: '7%',
    paddingTop: 30,
    borderRadius: 22,
    backgroundColor: '#d4e0e7',
  },
});

export default function Login() {
  const navigation = useNavigation();
  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const onPressTest = () => {
    console.log('onPress working');
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.landingContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}> Welcome to WhatsThat! </Text>
          <Text style={styles.header2}> Already have an account? </Text>
          <Text style={[styles.subHeader, { paddingLeft: 0 }]}> Log in </Text>

          <View style={styles.infoBox}>
            <Text style={styles.subHeader}> Email Address </Text>
            <CustInput
              placeholder="e.g. johnSmith@whatsThat.com"
              value={email}
              setValue={setEmail}
            />

            <Text style={styles.subHeader}> Password </Text>
            <CustInput
              placeholder="e.g. password@123"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />

            <CustButton
              onPress={onPressTest}
              title="submit login details"
              accessibilityLabel="press this button to log in with provided details"
              buttonText="Submit Login details"
            />

            <CustButton
              onPress={goToSignUp}
              title="Create a new account"
              accessibilityLabel="press this button to create a new account"
              buttonText="Create a new account"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
