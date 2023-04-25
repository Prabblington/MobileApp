import { View, Text, StyleSheet } from 'react-native-web';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import CustButton from '../Components/Input/custButton';
import UserLogout from '../api/Client/User/userLogout';

import { AuthContext } from '../Navigation/Context/authManager';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    color: 'grey',
    maxWidth: '90%',
    textAlign: 'center',
  },
  optionsContainer: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  options: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 8,
    padding: 4,

    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 12,
  },
});

export default function LoggedOutScreen() {
  const navigation = useNavigation();
  const { axiosConfig, resetAuth } = useContext(AuthContext);

  const handleLogOut = async () => {
    console.log('Log Out');

    try {
      await UserLogout(axiosConfig);
    } catch (e) {
      console.log(e);
    }
  };

  const handleGoBackToHome = () => {
    navigation.navigate('Chats');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Are you sure you want to log out? </Text>
      <CustButton
        onPress={handleLogOut}
        title="Log out of account"
        accessibilityLabel="Press to log out of your account"
        buttonText="Yes"
      />
      <CustButton
        onPress={handleGoBackToHome}
        title="Stay logged into account"
        accessibilityLabel="Press to stay logged in and go back to home page"
        buttonText="No"
      />
    </View>
  );
}
