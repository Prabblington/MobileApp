import { useEffect } from 'react';

import { FlatList, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import MessageUI from './messageUI';
import InputUI from './inputUI';

import backgroundImage from '../images/background.png';
import messages from '../data/messages.json';

// make the background image take up the full screen
let { height, width } = Dimensions.get('window');

const chatUI = () => {

  // get data from the chatListProp to match user to messages and correctly
  // display from the right person/group
  const route = useRoute();
  const navigation = useNavigation();

  //allows for this to only be called once
  useEffect(() => {
    navigation.setOptions({ title: route.params.name });
  }, [route.params.name]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <FlatList
          style={styles.list}
          data={messages}
          renderItem={({ item }) => <MessageUI message={item} />}
        />
        <InputUI />
      </ImageBackground>

      <StatusBar style="auto" />
    </KeyboardAvoidingView>
  );
}

export default chatUI;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
  },

  background: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: 'cover',
    justifyContent: 'center',
  },

  list: {
    padding: "0.2%",
  },
});