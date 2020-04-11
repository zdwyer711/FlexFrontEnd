import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator
} from 'react-native';

const getUserData = require('../client/user/getUserData');
const userRefreshToken = require('../client/user/userRefreshToken');
const clearLocalUserData = require('../client/user/clearLocalUserData');

class LoadingScreen extends Component {

  state = {
        accessTokenAvailable: []
  };

  async componentDidMount() {
    await clearLocalUserData('expirationTime');
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
        </View>
    );
  }
}

export default LoadingScreen;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   }
});
