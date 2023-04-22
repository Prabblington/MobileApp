import { useState, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({});
  const [axiosConfig, setAxiosConfig] = useState({
    baseURL: 'http://localhost:3333/api/1.0.0',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const [token, setToken] = useState(null);
  const [err, setErr] = useState('');

  const resetAuth = async () => {
    // Remove auth data from AsyncStorage
    await AsyncStorage.removeItem('X-Authorization');
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('userData');

    setIsLoggedIn(false);
    setUser(null);
    setToken(null);
    setAxiosConfig({
      baseURL: 'http://localhost:3333/api/1.0.0',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  useEffect(() => {
    const checkAuth = async () => {
      // resetAuth();
      axios.defaults.baseURL = 'http://localhost:3333/api/1.0.0';

      try {
        const checkToken = JSON.stringify(
          await AsyncStorage.getItem('X-Authorization')
        );
        const checkLoggedIn = JSON.parse(
          await AsyncStorage.getItem('isLoggedIn')
        );
        const checkUser = JSON.parse(await AsyncStorage.getItem('userData'));

        if (checkToken && checkLoggedIn) {
          // console.log('if reached');
          axios.defaults.headers.common['Content-Type'] = 'application/json';
          axios.defaults.headers.common['X-Authorization'] = checkToken;

          const config = {
            baseURL: 'http://localhost:3333/api/1.0.0',
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': `${checkToken}`,
            },
          };

          setUser(checkUser);
          setToken(checkToken);
          setAxiosConfig(config);
          setIsLoggedIn(true);
        } else {
          const config = {
            baseURL: 'http://localhost:3333/api/1.0.0',
            headers: {
              'Content-Type': 'application/json',
            },
          };
          console.log('else reached??');
          setIsLoggedIn(false);
          setAxiosConfig(JSON.stringify(config));
        }
      } catch (e) {
        setErr(e);
        console.warn(err);
        resetAuth();
      }
    };
    checkAuth();
  }, [
    isLoggedIn,
    user,
    token,
    axiosConfig,
    setIsLoggedIn,
    setUser,
    setAxiosConfig,
    setToken,
  ]);

  const auth = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      axiosConfig,
      setAxiosConfig,
      user,
      setUser,
      token,
      setToken,
    }),
    [
      isLoggedIn,
      setIsLoggedIn,
      axiosConfig,
      setAxiosConfig,
      user,
      setUser,
      token,
      setToken,
    ]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
