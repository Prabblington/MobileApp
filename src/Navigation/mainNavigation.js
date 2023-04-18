import { useContext } from 'react';

import { AuthContext } from './Context/authManager';
import { AppStack, LoginStack } from './stackNavigation';

export default function MainNavigation() {
  console.log(AuthContext);
  const { isLoggedIn } = useContext(AuthContext);
  console.log(`isLoggedIn, MainNavigation() = ${isLoggedIn}`);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isLoggedIn ? <AppStack /> : <LoginStack />}</>;
}
