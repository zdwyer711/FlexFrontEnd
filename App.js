//import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SpotifyAuth from './SpotifyAuth';
//import { creatAppContainer,createSwitchNavigator } from '@react-navigation/native';

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import * as SecureStore from 'expo-secure-store';
// import LoadingScreen from './componentScreens/LoadingScreen';
// import LoginScreen from './componentScreens/LoginScreen';
// import HomeDashboardScreen from './componentScreens/HomeDashboardScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsStackScreen from './componentScreens/SettingsStackScreen';
import StationsStackScreen from './componentScreens/StationsStackScreen';
import HomeStackScreen from './componentScreens/HomeStackScreen';

//const userLoginCheck = require('');
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//const userLoginCheck = false;
//const userLoginCheck = require('./client/user/userLoginCheck');

//const userData = getUserData();

export default function App() {
  //const userLoginCheck = await userLoginCheck();

  // if(userLoginCheck != true){
  //   return(
  //         <LoadingScreen />
  //   );
  // } else {
        return (
          <NavigationContainer>
          <Tab.Navigator
          screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
                  console.log(color);
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'ios-home'
                      : 'md-home';
                  } else if (route.name === 'Stations') {
                    iconName = focused ? 'ios-radio' : 'ios-radio';
                  } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-settings' : 'md-settings';
                  }

                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },

              })}
              tabBarOptions={{
                activeTintColor: '#a12213',
                inactiveTintColor: 'gray',
                style: {
                  backgroundColor: '#272829',
                }
              }}
          >
               <Tab.Screen name="Home" component={HomeStackScreen} />
               <Tab.Screen name="Stations" component={StationsStackScreen} />
               <Tab.Screen name="Settings" component={SettingsStackScreen} />
          </Tab.Navigator>
          </NavigationContainer>
        );
  //}

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
  miniPlayer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 36
  },
  text: {
    color: "white"
  },
  tabBackColor: {
    backgroundColor:'#000000',
  },
});
