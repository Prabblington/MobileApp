import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { createContext, useState } from 'react';

import axiosCfg from '../axiosConfig';

const AuthContext = createContext({});
const baseURL = 'http://localhost:3333/api/1.0.0';
const postDataType = 'application.json';

const AuthorisationContext = ({ children }) => {
  const [authorise, setAuthorise] = useState(false);

  const getAuthState = async () => {
    try {
      const AUTH_TOKEN = await AsyncStorage.getItem('AUTH_TOKEN');

      axiosCfg.setAxiosConfig(baseURL, AUTH_TOKEN, postDataType);
    } catch (err) {
      throw new Error(err);
    }
  };
};
