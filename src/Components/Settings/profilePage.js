import { View, Image, Text, StyleSheet } from 'react-native';

import contactpfp from '../../images/logo2.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  profileContainer: {
    marginTop: '30%',
    justifyContent: 'centre',
  },
  userImage: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: 120,
    height: 120,
    aspectRatio: 1,
    borderRadius: 20,
  },
  nameBox: {
    flex: 1,
    marginVertical: 8,
  },
  status: {
    marginVertical: 1,
  },
  header: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeader: {
    color: 'grey',
    maxWidth: '90%',
    textAlign: 'center',
  },
  userOptionsContainer: {
    flex: 1,

    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'lightgray',
  },
  userOptions: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 8,
    padding: 4,

    borderWidth: 10,
    borderColor: 'red',
    borderRadius: 12,
  },
});

export default function ProfilePage({ user }) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userImage}>
          <Image
            style={styles.image}
            // source={user.profile.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.nameBox}>
          <Text style={styles.header}> John Smith </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.subHeader}> Online: At work atm! </Text>
        </View>
        <View style={styles.userOptionsContainer}>
          <View style={styles.userOptions}>
            <Text> Icon 1 </Text>
            <Text> Icon 1 </Text>
            <Text> Icon 1 </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
