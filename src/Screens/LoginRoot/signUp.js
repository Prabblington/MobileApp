import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useRef, useEffect } from 'react';

import PasswordChecklist from 'react-password-checklist';

import CustInput from '../../Components/Input/custInput';
import CustButton from '../../Components/Input/custButton';
import {
  EMAIL_VALIDATION,
  PASSWORD_VALIDATION,
} from './Validation/userValidation';

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
    height: '100%',
    marginTop: '1%',
    borderRadius: 22,
    backgroundColor: '#d4e0e7',
  },
});

export default function SignUp() {
  const navigation = useNavigation();

  const passwordChecklistRules = [
    'minLength',
    'maxLength',
    'specialChar',
    'number',
    'capital',
    'match',
    'notEmpty',
  ];

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passRetype, setPassRetype] = useState('');

  const createNewAccount = () => {
    console.log('create a new account');
  };
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.landingContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}> Create a new account </Text>
          <Text style={[styles.header2, { fontSize: 20, marginLeft: 0 }]}>
            Your details
          </Text>

          <View style={styles.infoBox}>
            <CustInput
              titleText="First Name"
              placeholder="e.g. John"
              value={firstName}
              setValue={setFirstName}
            />

            <CustInput
              titleText="Last Name"
              placeholder="e.g. Smith"
              value={lastName}
              setValue={setLastName}
            />

            <CustInput
              titleText="Email Address"
              placeholder="e.g. johnSmith@whatsThat.com"
              value={email}
              setValue={setEmail}
            />

            <CustInput
              titleText="Password"
              placeholder="e.g. Password@123"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />

            <CustInput
              titleText="Re-type password"
              placeholder="e.g. Password@123"
              value={passRetype}
              setValue={setPassRetype}
              secureTextEntry
            />

            <PasswordChecklist
              style={styles.subHeader}
              rules={passwordChecklistRules}
              minLength={8}
              maxLength={20}
              value={password}
              valueAgain={passRetype}
              onChange={() => {
                if (password === passRetype) {
                  console.log('passwords match');
                }
              }}
            />

            <Text style={[styles.subHeader, { paddingLeft: 16, fontSize: 14 }]}>
              Start using Whats That
            </Text>
            <CustButton
              onPress={createNewAccount}
              title="Submit details"
              accessibilityLabel="press this button to submit new account details"
              buttonText="Submit details and create new account"
            />

            <Text style={[styles.subHeader, { paddingLeft: 16, fontSize: 14 }]}>
              Already have an account?
            </Text>
            <CustButton
              onPress={goToLogin}
              title="Go back to Login page"
              accessibilityLabel="press this button to go back to login page"
              buttonText="Log in"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
