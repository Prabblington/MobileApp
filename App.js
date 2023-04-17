/* eslint-disable react/style-prop-object */
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useContext, useState, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { AppStack, LoginStack } from './src/Navigation/stackNavigation';
import { AuthContext } from './src/Navigation/Context/authManager';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [isLoading, setIsLoading] = useState(true); // added loading state

  // useEffect(() => {
  //   const checkLoggedIn = async () => {
  //     const loggedInStatus = await AsyncStorage.getItem('isLoggedIn');

  //     setIsLoading(false);
  //   };
  //   checkLoggedIn();
  // }, []);

  // if (isLoading === true) { // render loading screen while checking logged in status
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <LoadingScreen />
  //       <StatusBar style="auto" />
  //     </SafeAreaView>
  //   );
  // }

  return (
    <SafeAreaView style={styles.container}>
      {isLoggedIn ? <AppStack /> : <LoginStack />}

      {/* <AppStack /> */}
      {/* <ApiTestComponent /> */}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
