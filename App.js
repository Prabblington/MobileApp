import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Ionicons } from '@expo/vector-icons';

import ChatScreen from './src/Components/chatScreen';
import ChatUI from './src/Components/chatUI';

const TEMP_COMPONENT = () => {
  return (
    <View>
      <Text> IT'S GONNA SHOW LADS YEESSSS </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeTabNav = () => {
  return (
    <Tab.Navigator initialRouteName='Chats'
      screenOptions={{
        tabBarStyle: { backgroundColor: 'whitesmoke' },
        headerStyle: { backgroundColor: 'whitesmoke' }
      }}
    >
      <Tab.Screen name='Status' component={TEMP_COMPONENT}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='logo-whatsapp' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Calls' component={TEMP_COMPONENT}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='call-outline' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Camera' component={TEMP_COMPONENT}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='camera-outline' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Chats' component={ChatScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='newspaper-outline' size={size} color={color} />
          )
        }}
      />
      <Tab.Screen name='Settings' component={TEMP_COMPONENT}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-outline' size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Chat'
        screenOptions={{
          tabBarStyle: { backgroundColor: 'whitesmoke' },
          headerStyle: { backgroundColor: 'whitesmoke' }
        }}>
        <Stack.Screen name='Home' component={homeTabNav} options={{ headerShown: false }} />
        <Stack.Screen name='ChatUI' component={ChatUI} />
      </Stack.Navigator>
    </NavigationContainer>
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
