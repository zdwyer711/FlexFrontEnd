import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import MiniPlayer from "./MiniPlayer";

const MINIMIZED_PLAYER_HEIGHT = 42;
const getUserData = require('../client/user/getUserData');
const userRefreshToken = require('../client/user/userRefreshToken');
const clearLocalUserData = require('../client/user/clearLocalUserData');

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
    return(
        <View style={styles.container}>
            <ActivityIndicator size='large' />
            <View style={styles.miniPlayerContainer}>
              <MiniPlayer />
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
   }
});
