import { useContext, useEffect } from 'react';

import { AuthContext } from './Context/authManager';
import { AppStack, LoginStack } from './stackNavigation';

export default function MainNavigation() {
  const { isLoggedIn } = useContext(AuthContext);

  // useEffect(() => {
  //   console.log(`${isLoggedIn}, token: ${token}, user: ${user}`);
  // }, [isLoggedIn, token, user]);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isLoggedIn ? <AppStack /> : <LoginStack />}</>;
}
