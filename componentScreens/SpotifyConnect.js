import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  WebView
} from 'react-native';

class SpotifyConnect extends Component {
  render() {
    return(
        <WebView
            source={{ html: '<head><script src="https://sdk.scdn.co/spotify-player.js"></script></head><body></body>' }}
        />
    );
  }
}

export default SpotifyConnect;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   }
});
