import React from 'react';
import {View, Text} from 'react-native';
import UserStorage from '../utils/StorageUtils';

export default function ProfileScreen() {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
      UserStorage.get().then(data => setUser(data));
  }, []);

  return (
    <View>
      <Text>Profile</Text>
      <Text>{user.username}</Text>
    </View>
  );
}
