import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import AuthFlowIndex from './AuthFlowIndex';

class NewUserCheck extends Component {
  render() {
    return(
        <View style={styles.container}>
            <Text>New user check</Text>
        </View>
    );
  }
}

export default NewUserCheck;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center'
   }
});
