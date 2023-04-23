import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import contactPicture from '../../images/logo2.png';
import { useNavigation } from '@react-navigation/native';

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

export default function NEWContactListRenderer({ contact }) {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => {
        console.log('ContactsListRenderer: View contact interaction options');
        navigation.navigate('ContactProfile');
      }}
      style={styles.container}
    >
      <View key={contact.user_id} style={styles.container}>
        {/* This will be the users avatar */}
        <Image style={styles.image} source={contactPicture} />

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.text}>{contact.given_name}</Text>
            <Text style={styles.text}>{contact.family_name}</Text>
          </View>
          <Text style={styles.subHeader}>{contact.email}</Text>
        </View>
      </View>
    </Pressable>
  );
}
