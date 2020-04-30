import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class HomeDashboardScreen extends Component {
  render() {
    return(
        <View style={styles.container}>
            <Text>HomeDashboardScreen</Text>
        </View>
    );
  }
}

export default HomeDashboardScreen;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   }
});
