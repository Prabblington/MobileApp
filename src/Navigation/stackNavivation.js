import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChatUI from '../Components/Chats/chatUI';
import HomeTabNav from './tabNavigation';
import ContactScreen from '../Screens/ContactsScreen';

const Stack = createNativeStackNavigator();

const appStack = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Chat'
        screenOptions={{
          tabBarStyle: { backgroundColor: 'whitesmoke' },
          headerStyle: { backgroundColor: 'whitesmoke' }
        }}>
        <Stack.Screen name='Home' component={HomeTabNav} options={{ headerShown: false }} />
        <Stack.Screen name='ChatUI' component={ChatUI} />
        <Stack.Screen name='Contacts' component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default appStack;