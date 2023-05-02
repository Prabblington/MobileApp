import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import DayJs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

import { returnCurrentUserID } from '../../api/Client/User/getUser';
import { useEffect, useState } from 'react';

DayJs.extend(RelativeTime);

const styles = StyleSheet.create({
  container: {
    margin: '1%',
    padding: '2%',
    borderRadius: 12,
    maxWidth: '80%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  dayTimeSent: {
    alignSelf: 'flex-end',
  },

  text: {
    flex: 1,
    fontWeight: 'bold',
  },
});

export default function MessageUI({ message }) {
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const checkIsUser = async () => {
      const currentUser = await returnCurrentUserID();
      const otherUser = await JSON.stringify(message.author.user_id);
      setIsUser(currentUser === otherUser);
    };
    checkIsUser();
  }, [message]);

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {
          backgroundColor: isUser ? 'azure' : 'darkcyan',
          alignSelf: isUser ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: isUser ? 'black' : 'white',
          },
        ]}
      >
        {message.message}
      </Text>
      <Text
        style={[
          styles.dayTimeSent,
          {
            color: isUser ? 'gray' : 'black',
          },
        ]}
      >
        {DayJs(message.message.timestamp).fromNow()}
      </Text>
    </KeyboardAvoidingView>
  );
}
