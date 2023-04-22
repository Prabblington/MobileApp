import { useState, useEffect, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const resetAuth = async () => {
    // Remove auth data from AsyncStorage
    await AsyncStorage.removeItem('X-Authorization');
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('userData');

    // setIsLoggedIn(false);
    // setUser(null);
    // setToken(null);
    // setAxiosConfig({
    //   baseURL: 'http://localhost:3333/api/1.0.0',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
  };

  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState();
  const [axiosConfig, setAxiosConfig] = useState({
    baseURL: 'http://localhost:3333/api/1.0.0',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const [token, setToken] = useState(null);
  const [err, setErr] = useState('');

  useEffect(() => {
    console.log('useEffect: checkAuth()');

    const checkAuth = async () => {
      // resetAuth();
      axios.defaults.baseURL = 'http://localhost:3333/api/1.0.0';
      // await AsyncStorage.removeItem('X-Authorization');

      try {
        const checkToken = await AsyncStorage.getItem('X-Authorization');
        const checkLoggedIn = await AsyncStorage.getItem('isLoggedIn');
        const checkUser = JSON.stringify(
          await AsyncStorage.getItem('userData')
        );

        console.log(
          `Token: ${checkToken}, isLoggedIn: ${checkLoggedIn}, user: ${checkUser}`
        );

        if (checkToken && checkLoggedIn) {
          console.log('if reached');
          axios.defaults.headers.common['Content-Type'] = 'application/json';
          axios.defaults.headers.common['X-Authorization'] = checkToken;

          const config = {
            baseURL: 'http://localhost:3333/api/1.0.0',
            headers: {
              'Content-Type': 'application/json',
              'X-Authorization': `${token}`,
            },
          };

          console.log(`Reached initialState token&&loggedIn`);

          setIsLoggedIn(JSON.parse(checkLoggedIn));
          setUser(JSON.stringify(user));
          setToken(JSON.stringify(token));
          setAxiosConfig(config);

          console.log(
            `initState values: 
            \ntoken: ${checkToken}, 
            \nuser: ${checkUser}, 
            \nisLoggedIn: ${JSON.stringify(checkLoggedIn)}, 
            \nconfig: ${JSON.stringify(axiosConfig)}`
          );
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
  }, [setIsLoggedIn, setUser, setAxiosConfig, setToken]);

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
