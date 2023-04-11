/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
import { useState } from 'react';
import axios from 'axios';
import { Button, View, Text } from 'react-native';

import userList from '../../data/users.json';

const authorisationToken = 'access';
const baseUrl = 'http://localhost:3333/api/1.0.0';

const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-Authorization': `apiKey ${authorisationToken}`,
  },
});

export default function ApiTest() {
  const [err, setErr] = useState(null);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': `apiKey ${authorisationToken}`,
    },
  };

  const first_name = 'ags';
  const last_name = 'asdf';
  const email = 'ags.f@test.com';
  const password = 'Password@123';

  // const addUsers = async () => {
  //   try {
  //     const response = await api.post('/user', {
  //       first_name,
  //       last_name,
  //       email,
  //       password,
  //     });

  //     // Handle successful response here
  //     console.log(response.data);
  //   } catch (error) {
  //     // Handle error response here
  //     console.error(error);
  //     setErr('Failed to add users');
  //   }
  // };

  const getUsers = async () => {
    try {
      const response = await api.get('/user/14', config);
      // Handle successful response here
      console.log(response.data);
    } catch (error) {
      // Handle error response here
      console.log(api.defaults.headers);
      console.error(error);
      setErr('Failed to get user');
    }
  };

  return (
    <View>
      {/* <Button onPress={addUsers} title="Add Users" /> */}

      <Button onPress={getUsers} title="Get Users" />
      {err && <Text>{err}</Text>}
    </View>
  );
}
