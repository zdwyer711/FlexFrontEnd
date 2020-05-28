import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class SpotifyAuthComponent extends Component {
  render() {
    return(
        <View style={styles.container}>
            <Text>SpotifyAuthComponent</Text>
        </View>
    );
  }
}

export default SpotifyAuthComponent;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   }
});
