import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import { loginTest, signupTest, getUserTest } from './getOpenAiJson';

function apiTestComponent() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleGetUser = async () => {
    try {
      // const data = await getUser(2); // call the getUser function with a specific user ID
      // setUserData(data);
      getUserTest();
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <View>
      <Button onPress={handleGetUser} title="Get User" />
      {userData && <Text>{JSON.stringify(userData)}</Text>}
      {error && <Text>{error}</Text>}
    </View>
  );
}

export default apiTestComponent;
