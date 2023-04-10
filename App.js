/* eslint-disable react/style-prop-object */
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { AppStack, LoginStack } from './src/Navigation/stackNavivation';

import SignUp from './src/Screens/LoginRoot/signUp';

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
      {/* <AppStack /> */}
      {/* <LoginStack /> */}
      <SignUp />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
