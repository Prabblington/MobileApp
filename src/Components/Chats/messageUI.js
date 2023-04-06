import { KeyboardAvoidingView, StyleSheet, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import DayJs from 'dayjs';
// here we use relative time to tell the user how many days/weeks/months/years it's been since
// the message was sent
import RelativeTime from 'dayjs/plugin/relativeTime';
DayJs.extend(RelativeTime);

const messageUI = ({message}) => {
  let isUser = () => {
    return message.user.id === "u1";
  }

  return (    
    <KeyboardAvoidingView 
    style={[styles.container,
    {
      backgroundColor: isUser() ? 'azure' : 'darkcyan',
      alignSelf: isUser() ? 'flex-end' : 'flex-start'
    }]}
    >
        <Text style={[styles.text,
        {
          color: isUser() ? 'black' : 'white'
        }]}>{message.text}</Text>
        <Text style={[styles.dayTimeSent,
        {
          color: isUser() ? 'gray' : 'black'
        }]}>{DayJs(message.dayTimeSent).fromNow()}</Text>
      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

export default messageUI;

const styles = StyleSheet.create({
  container: {
    margin: '1%',
    padding: '2%',
    borderRadius: 12,
    maxWidth: '80%',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  dayTimeSent: {
    alignSelf: 'flex-end'
  },

  text: {
    flex: 1,
    fontWeight: 'bold',
  }
});