import { StyleSheet, Text, View, Image } from 'react-native';
import { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Navigation/Context/authManager';
import contactPicture from '../../images/logo2.png';
import CustButton from '../Input/custButton';
import {
  addContact,
  removeContact,
} from '../../api/Client/Contact Management/addedContactOptions';
import { blockContact } from '../../api/Client/Contact Management/blockContactOptions';
import { getContactAsyncStorage } from './contactAsyncStorage';

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
  const [viewedContact, setViewedContact] = useState({});

  useEffect(() => {
    const getViewedContact = async () => {
      const c = await getContactAsyncStorage();
      if (viewedContact !== c) {
        setViewedContact(c);
      }
      console.log('is it looping?');
    };
    getViewedContact();
  }, []);

  async function handleAddContact(userID, cfg) {
    try {
      const result = await addContact(userID, cfg);

      if (result === 200) {
        alert('Added new friend!');
      }
      if (result === 400) {
        alert('You cannot add yourself!');
      }
      if (result === 404) {
        alert('User not found');
      }
    } catch (e) {
      alert('Something went wrong, please try again later');
    }
  }

  async function handleRemoveContact(userID, cfg) {
    try {
      const result = await removeContact(userID, cfg);

      if (result === 200) {
        alert('Removed contact!');
      }
      if (result === 400) {
        alert('You cannot delete yourself as a contact!');
      }
      if (result === 404) {
        alert('User not found');
      }
    } catch (e) {
      alert('Something went wrong, please try again later');
    }
  }
  async function handleBlockContact(userID, cfg) {
    try {
      const result = await blockContact(userID, cfg);

      if (result === 200) {
        alert('Blocked contact!');
      }
      if (result === 400) {
        alert('You cannot block yourself as a contact!');
      }
      if (result === 404) {
        alert('User not found');
      }
    } catch (e) {
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
            {viewedContact.given_name
              ? viewedContact.given_name
              : viewedContact.first_name}{' '}
            {viewedContact.family_name
              ? viewedContact.family_name
              : viewedContact.last_name}
          </Text>
          <Text style={styles.header}> </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.subHeader}> Online </Text>
        </View>
        <View style={styles.userOptionsContainer}>
          <View style={styles.userOptions}>
            <CustButton
              onPress={() =>
                handleAddContact(viewedContact.user_id, axiosConfig)
              }
              title="Add Contact"
              accessibilityLabel="Add this user to your list"
              buttonText="Add Contact"
              type="Tertiary"
            />
            <CustButton
              onPress={() =>
                handleRemoveContact(viewedContact.user_id, axiosConfig)
              }
              title="Remove Contact"
              accessibilityLabel="Remove this user from your list"
              buttonText="Remove Contact"
              type="Tertiary"
            />
            <CustButton
              onPress={() =>
                handleBlockContact(viewedContact.user_id, axiosConfig)
              }
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
