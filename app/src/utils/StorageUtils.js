import AsyncStorage from '@react-native-community/async-storage';

const USER_KEY = 'user';

export default class UserStorage {
  static get() {
    return AsyncStorage.getItem(USER_KEY).then(value => {
      return JSON.parse(value);
    });
  }

  static getId() {
    return AsyncStorage.getItem(USER_KEY).then(value => {
      return JSON.parse(value).userId;
    });
  }

  static save(value) {
    return AsyncStorage.setItem(USER_KEY, JSON.stringify(value));
  }

  static update(value) {
    return UserStorage.get(USER_KEY).then(item => {
      value =
        typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }
  static delete() {
    return AsyncStorage.removeItem(USER_KEY);
  }
}
