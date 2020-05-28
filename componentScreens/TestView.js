import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class TestView extends Component {
  render() {
    return(
        <View style={styles.container}>
            <Text>Test Boiler Plater View</Text>
        </View>
    );
  }
}

export default TestView;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   }
});
