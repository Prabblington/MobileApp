import { useState, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({});
  const [axiosConfigImage, setAxiosConfigImage] = useState({
    baseURL: 'http://localhost:3333/api/1.0.0',
    headers: {
      'Content-Type': 'image/png',
    },
  });
  const [axiosConfig, setAxiosConfig] = useState({
    baseURL: 'http://localhost:3333/api/1.0.0',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const [axiosConfigMessages, setAxiosConfigMessages] = useState({
    baseURL: 'http://localhost:3333/api/1.0.0',
    headers: {
      'Content-Type': 'text/plain; charset=utf-8 ',
    },
  });
  const [token, setToken] = useState(null);
  const [err, setErr] = useState('');

  const resetAuth = async () => {
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
    setAxiosConfigImage({
      baseURL: 'http://localhost:3333/api/1.0.0',
      headers: {
        'Content-Type': 'image/png',
      },
    });
    setAxiosConfigMessages({
      baseURL: 'http://localhost:3333/api/1.0.0',
      headers: {
        'Content-Type': 'text/plain; charset=utf-8 ',
      },
    });
  };

  useEffect(() => {
    const checkAuth = async () => {
      // resetAuth();
      axios.defaults.baseURL = 'http://localhost:3333/api/1.0.0';

      try {
        const checkToken = await AsyncStorage.getItem('X-Authorization');
        const checkLoggedIn = JSON.parse(
          await AsyncStorage.getItem('isLoggedIn')
        );
        const checkUser = JSON.parse(await AsyncStorage.getItem('userData'));

        if (checkToken && checkLoggedIn) {
          axios.defaults.headers.common['Content-Type'] = 'application/json';
          axios.defaults.headers.common['X-Authorization'] = checkToken;

          const config = {
            baseURL: 'http://localhost:3333/api/1.0.0',
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': `${checkToken}`,
            },
          };

          const configImages = {
            baseURL: 'http://localhost:3333/api/1.0.0',
            headers: {
              'Content-Type': 'image/png',
              'X-Authorization': `${checkToken}`,
            },
          };

          setUser(checkUser);
          setToken(checkToken);
          setAxiosConfig(config);
          setAxiosConfigImage(configImages);
          setIsLoggedIn(true);
        } else {
          const config = {
            baseURL: 'http://localhost:3333/api/1.0.0',
            headers: {
              'Content-Type': 'application/json',
            },
          };
          setIsLoggedIn(false);
          setAxiosConfig(config);
        }
      } catch (e) {
        setErr(e);
        console.warn(err);
        resetAuth();
      }
    };
    checkAuth();
  }, [isLoggedIn, user, token, setIsLoggedIn, setUser, setToken]);

  const auth = useMemo(
    () => ({
      isLoggedIn,
      setIsLoggedIn,
      axiosConfig,
      setAxiosConfig,
      axiosConfigImage,
      setAxiosConfigImage,
      user,
      setUser,
      token,
      setToken,
      axiosConfigMessages,
      setAxiosConfigMessages,
    }),
    [
      isLoggedIn,
      setIsLoggedIn,
      axiosConfig,
      setAxiosConfig,
      axiosConfigImage,
      setAxiosConfigImage,
      user,
      setUser,
      token,
      setToken,
      axiosConfigMessages,
      setAxiosConfigMessages,
    ]
  );

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
