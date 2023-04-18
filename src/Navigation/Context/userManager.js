import { useState, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [err, setErr] = useState('');

  const checkAuth = async () => {
    try {
      const userData = await AsyncStorage.getItem('user');
      if (userData !== null) {
        setUser(userData);
      }
    } catch (e) {
      setErr(e);
      console.warn(err);
      setUser({});
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const auth = useMemo(() => ({ user, setUser }), [user, setUser]);

  return <UserContext.Provider value={auth}>{children}</UserContext.Provider>;
}

export { UserContext, AuthProvider };
