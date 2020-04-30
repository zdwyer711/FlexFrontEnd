import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Easing
} from 'react-native';
import { createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//import TabIndex from './TabIndex';
import TestView from './TestView';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import IndexScreen from './IndexScreen';

class AuthFlowIndex extends Component {
  render() {
          const AuthStack = createStackNavigator();
          return(
            <NavigationContainer>
              <AuthStack.Navigator>
                  <AuthStack.Screen name="Index" component={IndexScreen}
                      options={{
                          headerStyle: {
                            backgroundColor: '#272829',
                          },
                          transitionSpec: {
                            open: config,
                            close: closeConfig
                          },
                          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                          headerTintColor: 'white',
                          headerTransparent: true
                      }}
                  />
                  <AuthStack.Screen name="Login" component={LoginScreen}
                      options={{
                          headerStyle: {
                            backgroundColor: '#272829',
                          },
                          transitionSpec: {
                            open: config,
                            close: closeConfig
                          },
                          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                          headerTintColor: 'white',
                          headerTransparent: true
                      }}
                  />
                  <AuthStack.Screen name="Sign Up" component={SignUpScreen}
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
              </AuthStack.Navigator>
            </NavigationContainer>
          );
  }
}

export default AuthFlowIndex;

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
