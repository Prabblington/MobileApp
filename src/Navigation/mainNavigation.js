import { useContext, useMemo } from 'react';
import { AuthContext } from './Context/authManager';
import { AppStack, LoginStack } from './stackNavigation';

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
