import { Pressable, StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

let { width } = Dimensions.get('window');

const ContactListRenderer = (props) =>  {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('Contacts',
      { id: props.contacts.user?.id, name: props.contacts.user?.username })}
      style={styles.container}
    >

      <View key={props.contacts.user?.id} style={styles.container}>
        {/* This will be the users avatar */}
        <Image style={styles.image} source={require('../../images/logo2.png')} />

        <View style={styles.content}>
          <View style={styles.row}>
            <Text style={styles.text}>
              {props.contacts.user?.username}
            </Text>
          </View>

        </View>
      </View>

      <StatusBar style="auto" />
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

  content: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "lightgray",
  },

  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },

  subHeader: {
    color: 'grey',
    maxWidth: '90%'
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