import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function AppSettings() {
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Contacts Settings" component={contactSettings} />
    <Drawer.Screen name="General Settings" component={generalSettings} />
    <Drawer.Screen name="Group Settings" component={groupSettings} />
  </Drawer.Navigator>;
}

export default AppSettings;
