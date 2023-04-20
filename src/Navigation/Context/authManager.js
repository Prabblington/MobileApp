import { useState, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [config, setAxiosConfig] = useState({});
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

  const updateAuth = async (islogin, t, cfg) => {
    setToken(t);
    setAxiosConfig(cfg);
    setIsLoggedIn(islogin);

    // Store the auth data in AsyncStorage
    try {
      await AsyncStorage.setItem('isLoggedIn', `${islogin}`);
      await AsyncStorage.setItem('X-Authorization', t);
    } catch (error) {
      console.error(error);
    }
  };

  const checkAuth = async () => {
    axios.defaults.baseURL = 'http://localhost:3333/api/1.0.0';
    // await AsyncStorage.removeItem('X-Authorization');

    try {
      const tokenPresent = await AsyncStorage.getItem('X-Authorization');

      if (tokenPresent) {
        console.log(`here's a token! ${tokenPresent}`);

        await setToken(JSON.stringify(tokenPresent));
        await setAxiosConfig({
          baseURL: 'http://localhost:3333/api/1.0.0',
          headers: {
            'Content-Type': 'application/json',
            'X-Authorization': `${token}`,
          },
        });
        setIsLoggedIn(true);
      } else {
        console.log('No token');

        resetAuth();
      }
    } catch (e) {
      setErr(e);
      console.warn(err);
      resetAuth();
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const auth = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      config,
      setAxiosConfig,
      user,
      setUser,
      token,
      setToken,
    }),
    [
      isLoggedIn,
      setIsLoggedIn,
      config,
      setAxiosConfig,
      user,
      setUser,
      token,
      setToken,
    ]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

// const axiosConfig = {
//   baseURL: 'http://localhost:3333/api/1.0.0',
//   headers: {
//     'Content-Type': 'application/json',
//     'X-Authorization': `${tempToken}`,
//   },
// };

export { AuthContext, AuthProvider };
