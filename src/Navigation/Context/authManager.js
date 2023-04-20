import { useState, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const AuthContext = createContext({});

const axiosConfig = {
  baseURL: 'http://localhost:3333/api/1.0.0',
  headers: {
    'Content-Type': 'application/json',
  },
};

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [err, setErr] = useState('');

  const checkAuth = async () => {
    try {
      const tokenPresent = await AsyncStorage.getItem('X-Authorization');
      console.log(`here's a token! ${tokenPresent}`);

      if (tokenPresent) {
        setToken(JSON.parse(tokenPresent));
        axios.defaults.headers.common['X-Authorization'] = `${tokenPresent}`;
        setIsLoggedIn(true);
      }
      // setToken('');
      // setIsLoggedIn(false);
      // console.log('oh dear');
      // } else if (tokenPresent !== null) {
      //   setToken(JSON.parse(tokenPresent));
      //   axios.defaults.headers.common['X-Authorization'] = `${tokenPresent}`;
      //   setIsLoggedIn(true);
      //   console.log('else if');
      // }
    } catch (e) {
      setErr(e);
      console.warn(err);
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const auth = useMemo(
    () => ({ isLoggedIn, setIsLoggedIn }),
    [isLoggedIn, setIsLoggedIn]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider, axiosConfig };
