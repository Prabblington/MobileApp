import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DayJs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';
import { useContext } from 'react';

import contactPfp from '../../images/placeholderPfp.png';
import { getSingleChat } from '../../api/Client/Chat Management/getSingleChat';
import { AuthContext } from '../../Navigation/Context/authManager';

DayJs.extend(RelativeTime);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    width: width - 30,
    height: 70,
  },
  content: {
    flex: 1,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  subHeader: {
    color: 'grey',
    maxWidth: '90%',
  },
  text: {
    flex: 1,
    fontWeight: 'bold',
  },
  image: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    borderRadius: 30,
    marginRight: 10,
  },
});

export default function ChatListRenderer({ chat }) {
  const navigation = useNavigation();
  const { axiosConfig } = useContext(AuthContext);

  async function getChatToRender(chatID) {
    try {
      const result = await getSingleChat(chatID, axiosConfig);

      return result;
    } catch (e) {
      console.warn(e);
    }
    return null;
  }

  return (
    <Pressable
      onPress={async () => {
        const result = await getChatToRender(chat.chat_id, axiosConfig);
        if (result !== null) {
          console.log(JSON.stringify(result));
          navigation.navigate('ChatUI', result);
        } else {
          console.warn('something went wrong');
        }
      }}
      style={styles.container}
    >
      <View key={chat.chat_id} style={styles.container}>
        {/* This will be the users avatar */}
        <Image style={styles.image} source={contactPfp} />

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.text}>{chat.name}</Text>
            <Text style={styles.subHeader}>
              {DayJs(chat.lastMessage?.timestamp).fromNow()}
            </Text>
          </View>

          <Text style={styles.subHeader} numberOfLines={2}>
            {chat.lastMessage?.message}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
