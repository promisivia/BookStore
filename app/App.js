/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from './src/screens/LoginScreen.js';
import HomeScreen from './src/screens/HomeScreen.js';
import CartScreen from './src/screens/CartScreen.js';
import DetailScreen from './src/screens/DetailScreen.js';
import ProfileScreen from './src/screens/ProfileScreen.js';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#607d8b',
    accent: '#f1c40f',
  },
};

const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'Home') {
            return (
              <Image
                source={require('./src/assets/icons/_home.png')}
                style={{width: 28, height: 28}}
              />
            );
          } else if (route.name === 'Cart') {
            return (
              <Image
                source={require('./src/assets/icons/_cart.png')}
                style={{width: 28, height: 28}}
              />
            );
          } else if (route.name === 'Profile') {
            return (
              <Image
                source={require('./src/assets/icons/_user.png')}
                style={{width: 28, height: 28}}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Main">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Main" component={TabScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
