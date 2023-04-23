import { StyleSheet, Text, View, Image, Button } from 'react-native';
import contactPicture from '../../images/logo2.png';
import CustButton from '../Input/custButton';

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
  save: {
    marginTop: 22,
  },
});

export default function ContactOptions() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userImage}>
          <Image source={contactPicture} style={styles.userImage} />
          {/* {image && <Image source={{ uri: image }} style={styles.userImage} />} */}
        </View>
        <View style={styles.nameBox}>
          <Text style={styles.header}> John Smith </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.subHeader}> Online: At work atm! </Text>
        </View>
        <View style={styles.userOptionsContainer}>
          <View style={styles.userOptions}>
            <CustButton
              onPress={() => console.log('button 1 pressed')}
              title="Add Contact"
              accessibilityLabel="Add this user to your list"
              buttonText="Add Contact"
              type="Tertiary"
            />
            <CustButton
              onPress={() => console.log('button 2 pressed')}
              title="Remove Contact"
              accessibilityLabel="Remove this user from your list"
              buttonText="Remove Contact"
              type="Tertiary"
            />
            <CustButton
              onPress={() => console.log('button 3 pressed')}
              title="Block Contact"
              accessibilityLabel="Block this user from contacting you"
              buttonText="Block Contact"
              type="Tertiary"
            />
          </View>
        </View>
        {/* <View style={styles.save}>
          <CustButton
            onPress={() => console.log('profile saved')}
            title="Save Profile changes"
            accessibilityLabel="Select a profile photo from your device's storage"
            buttonText="Save changes"
          />
        </View> */}
      </View>
    </View>
  );
}
