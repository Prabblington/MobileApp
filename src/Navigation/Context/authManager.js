import { useState, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkAuth = async () => {
    const auth = await AsyncStorage.getItem('isLoggedIn');
    setIsLoggedIn(auth);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const auth = useMemo(() => ({ isLoggedIn }), [isLoggedIn]);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
