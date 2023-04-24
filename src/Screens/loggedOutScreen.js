import { View, Text } from 'react-native-web';
import { useContext } from 'react';

import CustButton from '../Components/Input/custButton';
import UserLogout from '../api/Client/User/userLogout';

import { AuthContext } from '../Navigation/Context/authManager';

export default function LoggedOutScreen() {
  const { axiosConfig } = useContext(AuthContext);

  const handleLogOut = async () => {
    console.log('Log Out');

    try {
      const logOut = await UserLogout(axiosConfig);
    } catch (e) {
      console.log(e);
    }
  };

  const handleGoBackToHome = () => {
    console.log('Back to home');
  };

  return (
    <View>
      <Text> Are you sure you want to log out? </Text>
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
