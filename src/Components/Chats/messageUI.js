import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import DayJs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

import { returnCurrentUserID } from '../../api/Client/User/getUser';

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

export default function MessageUI({ chatData }) {
  async function checkIsUser() {
    const currentUser = await returnCurrentUserID();
    const isUser = () => chatData.user_id === currentUser;
    return isUser();
  }

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {
          backgroundColor: checkIsUser() ? 'azure' : 'darkcyan',
          alignSelf: checkIsUser() ? 'flex-end' : 'flex-start',
        },
      ]}
    >
      <Text
        style={[
          styles.text,
          {
            color: checkIsUser() ? 'black' : 'white',
          },
        ]}
      >
        {chatData.messages.message}
      </Text>
      <Text
        style={[
          styles.dayTimeSent,
          {
            color: checkIsUser() ? 'gray' : 'black',
          },
        ]}
      >
        {DayJs(chatData.messages.timestamp).fromNow()}
      </Text>
    </KeyboardAvoidingView>
  );
}
