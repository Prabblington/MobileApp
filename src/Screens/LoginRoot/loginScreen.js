import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

const logo = require('../../images/logo1.png');

const styles = StyleSheet.create({
  container: {},
});

function LoginScreen() {
  return (
    <View>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
}

export default LoginScreen;
