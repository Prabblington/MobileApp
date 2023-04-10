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
  const createNewAccount = () => {
    console.log('create a new account');
  };
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
            <CustInput
              placeholder="e.g. John"
              value={firstName}
              setValue={setFirstName}
            />

            <Text style={styles.subHeader}> Last Name </Text>
            <CustInput
              placeholder="e.g. Smith"
              value={lastName}
              setValue={setLastName}
            />

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
