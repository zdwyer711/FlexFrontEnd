import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Easing
} from 'react-native';
//import MiniPlayer from "./MiniPlayer";
import PlayerScreen from "./PlayerScreen";
import HomeScreen from "./HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators} from '@react-navigation/stack';

const getUserData = require('../client/user/getUserData');
const userRefreshToken = require('../client/user/userRefreshToken');
const clearLocalUserData = require('../client/user/clearLocalUserData');

class HomeStackScreen extends Component {
  render() {
    const HomeStack = createStackNavigator();
    return(
      <HomeStack.Navigator>
          <HomeStack.Screen name="Home" component={HomeScreen}
              options={{
                  headerStyle: {
                    backgroundColor: '#272829',
                  },
                  transitionSpec: {
                    open: config,
                    close: closeConfig
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                  headerTintColor: 'white',
                  headerTransparent: true
              }}
          />
          <HomeStack.Screen name="Player" component={PlayerScreen}
              options={{
                  headerStyle: {
                    backgroundColor: '#272829',
                  },
                  transitionSpec: {
                    open: config,
                    close: closeConfig
                  },
                  cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
                  headerTintColor: 'white',
                  headerShown: false,
                  headerTransparent: true
              }}
          />
      </HomeStack.Navigator>
    );
  }
}

export default HomeStackScreen;

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 500,
    easing:Easing.cubic
  }
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 300,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.02
  }
};
