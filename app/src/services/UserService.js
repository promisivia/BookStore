import axios from 'axios';
import qs from 'qs';
import UserStorage from '../utils/StorageUtils';

export const login = async (username, password, showMessage, navigation) => {
  axios
    .post(
      'http://10.0.2.2:8814/login',
      qs.stringify({username: username, password: password}),
    )
    .then(response => {
      if (response.data.status !== 200) {
        showMessage({
          message: response.data.message,
          type: 'danger',
        });
      } else {
        UserStorage.save(response.data.data);
        navigation.navigate('Main');
        showMessage({
          message: 'successful login',
          type: 'success',
        });
      }
    })
    .catch(error => console.log(error));
};
