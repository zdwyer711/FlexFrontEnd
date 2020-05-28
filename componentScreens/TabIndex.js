import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SettingsStackScreen from './SettingsStackScreen';
import StationsStackScreen from './StationsStackScreen';
import HomeStackScreen from './HomeStackScreen';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class TabIndex extends Component {
  render() {
    return(
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
            },
          }}
      >
           <Tab.Screen name="Home" component={HomeStackScreen} />
           <Tab.Screen name="Stations" component={StationsStackScreen} />
           <Tab.Screen name="Settings" component={SettingsStackScreen} />
      </Tab.Navigator>
    );
  }
}

export default TabIndex;

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
