import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

const UseAsyncStorage = async () => {
  const [data, setData] = useState(null);

  const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);

      setData(value);
    } catch (err) {
      console.warn(`Failed to set ${key} to ${value}`);
      throw new Error(err);
    }
  };

  const getItem = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setData(value);
        return value;
      }
    } catch (err) {
      console.warn(`Failed to get ${key}`);
      throw new Error(err);
    }
    return null;
  };

  const removeItem = async (key) => {
    try {
      await localStorage.removeItem(key);
      setData(null);
    } catch (err) {
      throw new Error(err);
    }
  };

  return { data, setItem, getItem, removeItem };
};

export default UseAsyncStorage;
