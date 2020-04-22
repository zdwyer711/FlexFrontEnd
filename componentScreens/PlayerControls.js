import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

class PlayerControls extends Component {


  render() {
    const props = this.props;
    return(
      <View style={styles.container}>
        <Image style={styles.button}
        source={require('./img/ic_keyboard_arrow_down_white.png')} />
        <Image style={styles.playPauseButton}
        source={require('./img/play-button.png')}/>
      <Image style={styles.button}
      source={require('./img/ic_queue_music_white.png')} />
      </View>
    );
  }
}

export default PlayerControls;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  playPauseButton: {
    opacity: 0.72
  },
  button: {
    opacity: 0.72
  }
});
