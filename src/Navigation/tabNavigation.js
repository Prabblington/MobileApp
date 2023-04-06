
import { View, Text } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Ionicons } from '@expo/vector-icons';

import ChatScreen from '../Screens/chatScreen';

const TEMP_COMPONENT = () => {
  return (
    <View>
      <Text> IT'S GONNA SHOW LADS YEESSSS </Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const HomeTabNav = () => {
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
        options={({ navigation }) => (
          {
            tabBarIcon: ({ color, size }) => (
              <Ionicons name='newspaper-outline' size={size} color={color} />
            ),
            headerRight: () => (
              <Entypo
                onPress={() => navigation.navigate('Contacts')}
                name='new-message' size={18} color={'royalblue'}
                style={{ marginRight: 15 }} />
            )
          })}
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

export default HomeTabNav;