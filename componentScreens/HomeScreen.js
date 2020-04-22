import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from 'react-native';
import MiniPlayer from "./MiniPlayer";
import { useNavigation } from '@react-navigation/native';
import Animated from "react-native-reanimated";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { clamp, onGestureEvent, timing, withSpring } from "react-native-redash";
import { getBottomSpace } from "react-native-iphone-x-helper";

const getUserData = require('../client/user/getUserData');
const userRefreshToken = require('../client/user/userRefreshToken');
const clearLocalUserData = require('../client/user/clearLocalUserData');

const MINIMIZED_PLAYER_HEIGHT = 42;
const SNAP_TOP = 0;

// const config = {
//   damping: 15,
//   mass: 1,
//   stiffness: 150,
//   overshootClamping: false,
//   restSpeedThreshold: 0.1,
//   restDisplacementThreshold: 0.1
// };
// const {
//   Clock,
//   Value,
//   cond,
//   useCode,
//   set,
//   block,
//   not,
//   clockRunning,
//   interpolate,
//   diffClamp,
//   Extrapolate
// } = Animated;

class HomeStackScreen extends Component {

  state = {
        accessTokenAvailable: []
  };

  async componentDidMount() {
    //await clearLocalUserData('expirationTime');
    const tokenExpirationTime = await getUserData('expirationTime');
    console.log("======Token Expiration Time=========");
    console.log(tokenExpirationTime);

    if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
      await userRefreshToken();
      // alert('RefreshToken() has been reached and refreshed!');
    } else {
      this.setState({ accessTokenAvailable: true });
      alert('Access Token is Available!');
    }
  }

  render() {
   // Get it from props
   const { navigation } = this.props;

   return(
         <View style={styles.container}>
             <ActivityIndicator size='large' />
             <View style={styles.miniPlayerContainer}>
             <TouchableOpacity
                  style={styles.miniPlayerButton}
                  onPress={() => navigation.navigate('Player')}
             >
               <MiniPlayer />
               </TouchableOpacity>
             </View>
         </View>
       );
    }
}

export default HomeStackScreen;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#02071a'
   },
   miniPlayerContainer: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: MINIMIZED_PLAYER_HEIGHT
   },
   miniPlayerButton: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: MINIMIZED_PLAYER_HEIGHT,
   }
});
