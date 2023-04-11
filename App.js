/* eslint-disable react/style-prop-object */
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';

import { AppStack, LoginStack } from './src/Navigation/stackNavigation';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/1.0.0',
});

const createNewUser = {
  firstName: 'abbie',
  lastName: 'lang',
  email: 'abs.lang@email.com',
  password: 'password',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <SafeAreaView style={styles.container}>
      <LoginStack />
      {/* <AppStack /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
