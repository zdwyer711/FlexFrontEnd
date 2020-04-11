//import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpotifyAuth from './SpotifyAuth';
//import { creatAppContainer,createSwitchNavigator } from '@react-navigation/native';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import * as SecureStore from 'expo-secure-store';
import LoadingScreen from './componentScreens/LoadingScreen';
import LoginScreen from './componentScreens/LoginScreen';
import HomeDashboardScreen from './componentScreens/HomeDashboardScreen';

const Stack = createStackNavigator();
const userLoginCheck = false;
//const userLoginCheck = require('./client/user/userLoginCheck');

//const userData = getUserData();

export default function App() {

  if(userLoginCheck != true){
    return(
          <LoadingScreen />
    );
  } else {
        return (
          // <SpotifyAuth />
          // <AppNavigator />
          <NavigationContainer>
          <Stack.Navigator>

          <Stack.Screen name="Sign In" component={LoginScreen} />
          </Stack.Navigator>
          </NavigationContainer>
        );
  }

}

// const AppSwitchNavigator = createSwitchNavigator({
//   LoadingScreen: LoadingScreen,
//   LoginScreen: LoginScreen,
//   HomeDashboardScreen: HomeDashboardScreen
// });
//
// const AppNavigator = creatAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
