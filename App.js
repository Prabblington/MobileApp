/* eslint-disable react/style-prop-object */
import { StyleSheet, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MainNavigation from './src/Navigation/mainNavigation';
import { AuthProvider } from './src/Navigation/Context/authManager';
import ProfilePage from './src/Components/Settings/profilePage';

import TestComponent from './src/api/TestApiFunctions/testComponent';

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
      <ProfilePage />
      <AuthProvider>
        {/* <TestComponent /> */}
        {/* <MainNavigation /> */}
      </AuthProvider>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
// const [isLoading, setIsLoading] = useState(true); // added loading state

// useEffect(() => {
//   const checkLoggedIn = async () => {
//     const loggedInStatus = await AsyncStorage.getItem('isLoggedIn');

//     setIsLoading(false);
//   };
//   checkLoggedIn();
// }, []);

// if (isLoading === true) { // render loading screen while checking logged in status
//   return (
//     <SafeAreaView style={styles.container}>
//       <LoadingScreen />
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }
// }
