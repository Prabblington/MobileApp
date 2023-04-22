import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../Navigation/Context/authManager';
import CustInput from '../Components/Input/custInput';
import CustButton from '../Components/Input/custButton';
import userLogin from '../api/Client/User/userLogin';

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
    height: '90%',
    marginTop: '7%',
    paddingTop: 30,
    borderRadius: 22,
    backgroundColor: '#d4e0e7',
  },
});

export default function Login() {
  const navigation = useNavigation();
  const { setIsLoggedIn, axiosConfig, setAxiosConfig, setUser } =
    useContext(AuthContext);

  // const { setIsLoggedIn, axiosConfig } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const [token, setToken] = useState(null);
  const [isLoggedInLocal, setIsLoggedInLocal] = useState(false);
  const [localUser, setLocalUser] = useState({});
  const [localAxiosConfig, setLocalAxiosConfig] = useState({});

  const logIn = async () => {
    try {
      const tryLogIn = await userLogin(email, password, axiosConfig);

      if (tryLogIn === true) {
        setLocalUser(await AsyncStorage.getItem('userData'));
        await setToken(await AsyncStorage.getItem('X-Authorization'));
        await setLocalAxiosConfig({
          baseURL: 'http://localhost:3333/api/1.0.0',
          headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${token}`,
          },
        });
        // store it in the auth later
        setIsLoggedInLocal(true);
      }
      setErr(null);
    } catch (e) {
      setLocalUser(null);
      setToken(null);
      setLocalAxiosConfig(null);
      setIsLoggedInLocal(false);
      setErr(e);
      console.warn(err);
    }
  };

  useEffect(() => {
    setUser(localUser);
    setAxiosConfig(localAxiosConfig);
    setIsLoggedIn(isLoggedInLocal);
  });

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };
  const forgotPassword = () => {
    console.log('password forgotten');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.landingContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}> Welcome to WhatsThat! </Text>
          <Text style={styles.header2}> Already have an account? </Text>
          <Text style={[styles.subHeader, { paddingLeft: 0 }]}> Log in </Text>

          <View style={styles.infoBox}>
            <CustInput
              titleText="Email Address"
              placeholder="e.g. johnSmith@whatsThat.com"
              value={email}
              setValue={setEmail}
            />
            <CustInput
              titleText="Password"
              placeholder="e.g. password@123"
              value={password}
              setValue={setPassword}
              secureTextEntry
            />

            <CustButton
              onPress={logIn}
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

            <CustButton
              onPress={forgotPassword}
              title="password reset"
              accessibilityLabel="button to reset your password"
              buttonText="forgot password?"
              type="Secondary"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
