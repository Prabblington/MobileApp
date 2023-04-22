import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  profileContainer: {},
  userImage: {
    margin: 15,
    width: 60,
    height: 60,
  },
  nameBox: {},
  status: {},
  userOptions: {},
});

export default function ProfilePage(user) {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text> Image </Text>
        <Text> Name </Text>
        <Text> Status </Text>
      </View>
    </View>
  );
}
