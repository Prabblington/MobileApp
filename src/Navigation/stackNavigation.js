import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatUI from '../Components/Chats/chatUI';
import HomeTabNav from './tabNavigation';
import ContactScreen from '../Screens/contactScreen';
import Login from '../Screens/loginScreen';
import SignUp from '../Screens/signUpScreen';
import SearchOptionScreen from '../Screens/Search/searchOptionScreen';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Chat"
        screenOptions={{
          tabBarStyle: { backgroundColor: 'whitesmoke' },
          headerStyle: { backgroundColor: 'whitesmoke' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ChatUI" component={ChatUI} />
        <Stack.Screen name="Contacts" component={ContactScreen} />
        <Stack.Screen
          name="Search for contacts"
          component={SearchOptionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LoginStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export { AppStack, LoginStack };
