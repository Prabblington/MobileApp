/* eslint-disable react/style-prop-object */
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createContext, useState } from 'react';

import { AppStack, LoginStack } from './src/Navigation/stackNavigation';
import ApiTestComponent from './src/api/Client/apiTestComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});

// const authContext = createContext({
//   authState: {
//     id: '',
//     email: '',
//     password: '',
//     loggedIn: false,
//   },
//   setAuthState: () => {},
// });

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginStack />
      {/* <AppStack /> */}
      {/* <ApiTestComponent /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
