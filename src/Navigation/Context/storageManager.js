import { useState, useMemo, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncSContext = createContext({});

export default function AsyncSProvider({ children }) {
  const [data, setData] = useState(false);
  const [err, setErr] = useState('');

  const setItem = async (key, v) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(v));
      setData(v);
    } catch (e) {
      setErr(e);
      console.warn(err);
    }
  };

  const getItem = async (key) => {
    try {
      const v = await AsyncStorage.getItem(key);
      setData(v);
      return v;
    } catch (e) {
      setErr(e);
      console.warn(err);
      return null;
    }
  };

  const removeItem = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      setData(null);
    } catch (e) {
      setErr(e);
      console.warn(err);
    }
  };

  const auth = useMemo(
    () => ({ data, setItem, getItem, removeItem }),
    [data, setData]
  );

  return (
    <AsyncSContext.Provider value={auth}>{children}</AsyncSContext.Provider>
  );
}

export { AsyncSContext, AsyncSProvider };
