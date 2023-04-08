/* eslint-disable react/style-prop-object */
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AppStack from './src/Navigation/stackNavivation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppStack />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
