import { useState, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { loginTest, logoutTest } from '../../api/Client/apiFunctionsTest';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [err, setErr] = useState('');

  const checkAuth = async () => {
    const auth = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(auth);
  };

  const handleLogin = async (email, password) => {
    try {
      const tryLogIn = await loginTest(email, password);

      if (tryLogIn === true) {
        setIsLoggedIn(true);
        await AsyncStorage.setItem('isLoggedIn', 'true');
      } else {
        setIsLoggedIn(false);
        await AsyncStorage.setItem('isLoggedIn', 'false');
      }

      setErr(null);
    } catch (e) {
      setErr(e);
      console.warn(err);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutTest();
    } catch (e) {
      setErr(e);
      console.warn(err);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const auth = useMemo(
    () => ({ isLoggedIn, handleLogin, handleLogout }),
    [isLoggedIn, handleLogin, handleLogout]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
