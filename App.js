/* eslint-disable react/style-prop-object */
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { AppStack, LoginStack } from './src/Navigation/stackNavigation';

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
