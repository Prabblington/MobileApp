import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
// import { useNavigation } from "@react-navigation/native";

require('../../images/logo2.png');
const contactPicture = require('../../images/logo2.png');

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

export default function ContactListRenderer({ contact }) {
  // const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        console.log('ContactsListRenderer: View contact interaction options');
      }}
      style={styles.container}
    >
      <View key={contact.user?.id} style={styles.container}>
        {/* This will be the users avatar */}
        <Image style={styles.image} source={contactPicture} />

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.text}>{contact.user?.username}</Text>
          </View>
          <Text style={styles.subHeader}>{contact.user?.status}</Text>
        </View>
      </View>
    </Pressable>
  );
}
