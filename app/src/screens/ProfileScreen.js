import React from 'react';
import {View, Text} from 'react-native';
import {Avatar} from 'react-native-paper';
import UserStorage from '../utils/StorageUtils';

export default function ProfileScreen() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    UserStorage.get().then(data => setUser(data));
  }, []);

  return (
    <View>
      <Text>{user.username}</Text>
      <Avatar.Image size={24} source={user.image} />
    </View>
  );
}
