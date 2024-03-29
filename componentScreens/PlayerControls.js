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
    const props = {
      onPressShuffle: true,
    }
    const shuffleOn = true;
    const paused = true;
    return(
      <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.0} onPress={props.onPressShuffle}>
      <Image style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
        source={require('./img/ic_shuffle_white.png')}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity onPress={props.onBack}>
      <Image source={require('./img/ic_skip_previous_white_36pt.png')}/>
    </TouchableOpacity>
    <View style={{width: 20}} />
    {!paused ?
      <TouchableOpacity onPress={props.onPressPause}>
        <View style={styles.playButton}>
          <Image source={require('./img/ic_pause_white_48pt.png')}/>
        </View>
      </TouchableOpacity> :
      <TouchableOpacity onPress={props.onPressPlay}>
        <View style={styles.playButton}>
          <Image source={require('./img/ic_play_arrow_white_48pt.png')}/>
        </View>
      </TouchableOpacity>
    }
    <View style={{width: 20}} />
    <TouchableOpacity onPress={props.onForward}
      disabled={props.forwardDisabled}>
      <Image style={[props.forwardDisabled && {opacity: 0.3}]}
        source={require('./img/ic_skip_next_white_36pt.png')}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity activeOpacity={0.0} onPress={props.onPressRepeat}>
      <Image style={[styles.secondaryControl, props.repeatOn ? [] : styles.off]}
        source={require('./img/ic_repeat_white.png')}/>
    </TouchableOpacity>
  </View>
    );
  }
}

export default PlayerControls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 8,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.30,
  }
});
