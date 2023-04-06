import { StyleSheet } from 'react-native';
import AppStack from './src/Navigation/stackNavivation';

export default function App() {
  return (
    <AppStack />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: 'center'
  }
});
