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

import contactPfp from '../../images/logo2.png';

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
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('ChatUI', {
          id: chat.chat_id,
          name: chat.name,
        })
      }
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
            {chat.lastMessage?.text}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
