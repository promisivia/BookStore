import React from 'react';
import {View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import FlashMessage, {
  showMessage
} from 'react-native-flash-message';
import {login} from '../services/UserService';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  let _onChangeName = text => setUsername(text);

  let _onChangePassword = text => setPassword(text);

  let _onSubmit = () => {
    login(username, password, showMessage, navigation);
  };

  return (
    <View className="login" style={{padding: '10%'}}>
      <TextInput
        style={{padding: '2%'}}
        mode="outlined"
        label="Username"
        value={username}
        onChangeText={_onChangeName}
      />
      <TextInput
        style={{padding: '2%'}}
        mode="outlined"
        label="Password"
        value={password}
        onChangeText={_onChangePassword}
        secureTextEntry={true}
      />
      <Button style={{margin: '2%'}} mode="contained" onPress={_onSubmit}>
        Submit
      </Button>
      <FlashMessage position="top" />
    </View>
  );
}
