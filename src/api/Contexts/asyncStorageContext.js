import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const UseAsyncStorage = () => {
  const [data, setData] = useState(null);

  const setItem = (key, value) => {
    AsyncStorage.setItem(key, value);
    setData(value);
  };

  const getItem = (key) => {
    const value = AsyncStorage.getItem(key);
    setData(value);
    return value;
  };

  const removeItem = (key) => {
    localStorage.removeItem(key);
    setData(null);
  };

  return { data, setItem, getItem, removeItem };
};

export default UseAsyncStorage;
