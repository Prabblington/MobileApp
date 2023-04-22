import { useContext } from 'react';

import { AuthContext } from './Context/authManager';
import { AppStack, LoginStack } from './stackNavigation';

export default function MainNavigation() {
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isLoggedIn ? <AppStack /> : <LoginStack />}</>;
}
