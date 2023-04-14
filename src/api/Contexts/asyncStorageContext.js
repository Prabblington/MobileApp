import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const UseAsyncStorage = async () => {
  const [data, setData] = useState(null);

  const setItem = async (key, value) => {
    await AsyncStorage.setItem(key, value);
    setData(value);
  };

  const getItem = async (key) => {
    const value = await AsyncStorage.getItem(key);
    setData(value);
  };

  const removeItem = async (key) => {
    await localStorage.removeItem(key);
    setData(null);
  };

  return { data, setItem, getItem, removeItem };
};

export default UseAsyncStorage;
