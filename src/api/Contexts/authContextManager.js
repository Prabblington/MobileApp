import { createContext, useEffect, useState, useMemo } from 'react';

import UseAsyncStorage from './asyncStorageContext';
import axiosCfg from '../axiosConfig';

const AuthContext = createContext({});
const baseURL = 'http://localhost:3333/api/1.0.0';

function AuthManager({ children }) {
  const [authorise, setAuthorise] = useState('');

  const setAuthState = async (authData) => {
    try {
      await UseAsyncStorage.setItem('authorisation', JSON.stringify(authData));

      axiosCfg.setAxiosConfig(baseURL, authData.token);
      setAuthorise(true);
    } catch (err) {
      Promise.reject(err);
    }
  };

  const getAuthState = async () => {
    try {
      const authData = await UseAsyncStorage.getItem('authorisation');

      axiosCfg.setAxiosConfig(baseURL, authData.token);
    } catch (err) {
      Promise.reject(err);
    }
  };

  useEffect(() => {
    getAuthState();
  }, []);

  const authValue = useMemo(
    () => ({ authorise, setAuthorise }),
    [authorise, setAuthorise]
  );

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export { AuthContext, AuthManager };
