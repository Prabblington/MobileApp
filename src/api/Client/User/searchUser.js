import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { config } from '../../AxiosConfig/axiosConfig';

// GET /search
export default function searchUser(query) {
  return axios
    .get('./search', query, config)
    .then(
      (response) =>
        // DO SOMETHING WITH THE RESPONSE
        true
    )
    .catch(
      async (error) =>
        // DO SOMETHING WHEN AN ERROR IS THROWN
        false
    );
}
