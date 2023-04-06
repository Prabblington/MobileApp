import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let { width } = Dimensions.get('window');

const ContactListRenderer = ({contact}) =>  {
  const navigation = useNavigation();
  console.log(contact);

  return (
    <Pressable onPress={() => navigation.navigate('Contacts',
      { id: contact.user?.id, name: contact.user?.username })}
      style={styles.container}
    >

      <View key={contact.user?.id} style={styles.container}>
        {/* This will be the users avatar */}
        <Image style={styles.image} source={require('../../images/logo2.png')} />

            <Text style={styles.text}>
              {contact.user?.username}
            </Text>

      </View>

    </Pressable>
  );
}

export default ContactListRenderer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 5,
    width: width-30,
    height: 70,
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