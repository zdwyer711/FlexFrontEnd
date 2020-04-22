import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

class PlayerHeader extends Component {


  render() {
    const props = this.props;
    return(
      <View style={styles.container}>
      <TouchableOpacity
           style={styles.miniPlayerButton}
           onPress={() => props.nav.navigate('Home')}
      >
        <Image style={styles.button}
        source={require('./img/ic_keyboard_arrow_down_white.png')} />
      </TouchableOpacity>
      <Text onPress={props.onMessagePress}
      style={styles.message}>{props.message.toUpperCase()}</Text>
      <Image style={styles.button}
      source={require('./img/ic_queue_music_white.png')} />
      </View>
    );
  }
}

export default PlayerHeader;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  message: {
    flex: 1,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 10,
  },
  button: {
    opacity: 0.72
  }
});
