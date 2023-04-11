import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import getUser from './getOpenAiJson'; // import the getUser function from another file

function apiTestComponent() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleGetUser = async () => {
    try {
      const data = await getUser(2); // call the getUser function with a specific user ID
      setUserData(data);
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
