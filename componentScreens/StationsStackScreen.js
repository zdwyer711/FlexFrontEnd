import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class StationsStackScreen extends Component {
  render() {
    return(
        <View style={styles.container}>
            <Text>Stations</Text>
        </View>
    );
  }
}

export default StationsStackScreen;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   }
});
