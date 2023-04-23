import { StyleSheet, Text, View, Image, Button } from 'react-native';

import contactPicture from '../../images/logo2.png';
import CustButton from '../Input/custButton';
import {
  addContact,
  removeContact,
} from '../../api/Client/Contact Management/addedContactOptions';
import { blockContact } from '../../api/Client/Contact Management/blockContactOptions';
import { useContext } from 'react';
import { AuthContext } from '../../Navigation/Context/authManager';

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
  const { axiosConfig } = useContext(AuthContext);

  async function handleAddContact(userID, cfg) {
    const result = await addContact(userID, cfg);

    if (result === 200) {
      alert('Added new friend!');
    }
    if (result === 400) {
      alert('You cannot add yourself!');
    }
    if (result === 404) {
      alert('User not found');
    } else {
      alert('Something went wrong, please try again later');
    }
  }

  async function handleRemoveContact(userID, cfg) {
    const result = await removeContact(userID, cfg);

    if (result === 200) {
      alert('Removed contact!');
    }
    if (result === 400) {
      alert('You cannot delete yourself as a contact!');
    }
    if (result === 404) {
      alert('User not found');
    } else {
      alert('Something went wrong, please try again later');
    }
  }
  async function handleBlockContact(userID, cfg) {
    const result = await blockContact(userID, cfg);

    if (result === 200) {
      alert('Blocked contact!');
    }
    if (result === 400) {
      alert('You cannot block yourself as a contact!');
    }
    if (result === 404) {
      alert('User not found');
    } else {
      alert('Something went wrong, please try again later');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.userImage}>
          <Image source={contactPicture} style={styles.userImage} />
          {/* {image && <Image source={{ uri: image }} style={styles.userImage} />} */}
        </View>
        <View style={styles.nameBox}>
          <Text style={styles.header}>
            {/* {' '}
            {contact.given_name + contact.family_name}{' '} */}
            John Smith
          </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.subHeader}> Online </Text>
        </View>
        <View style={styles.userOptionsContainer}>
          <View style={styles.userOptions}>
            <CustButton
              onPress={() => handleAddContact()}
              title="Add Contact"
              accessibilityLabel="Add this user to your list"
              buttonText="Add Contact"
              type="Tertiary"
            />
            <CustButton
              onPress={() => handleRemoveContact()}
              title="Remove Contact"
              accessibilityLabel="Remove this user from your list"
              buttonText="Remove Contact"
              type="Tertiary"
            />
            <CustButton
              onPress={() => handleBlockContact}
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
