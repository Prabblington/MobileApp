import { useContext, useMemo } from 'react';
// import { View } from 'react-native-web';
import { AuthContext } from './Context/authManager';
import { AppStack, LoginStack } from './stackNavigation';

// import TestComponent from '../api/testComponent';

// abslang@gmail.com

// function MainNavigation() {
//   return (
//     <View>
//       <TestComponent />
//     </View>
//   );
// }

const MainNavigation = () => {
  const { isLoggedIn } = useContext(AuthContext);

  const mainNavigation = useMemo(() => {
    console.log(isLoggedIn);
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{isLoggedIn ? <AppStack /> : <LoginStack />}</>;
  }, [isLoggedIn]);

  return mainNavigation;
};

export default MainNavigation;
