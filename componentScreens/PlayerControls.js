import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

class PlayerControls extends Component {

  constructor(props) {
    super(props);
    this.state = {
      paused: false,

    };
  }

  render() {
    // const props = {
    //   onPressShuffle: true,
    //   paused: false
    // }

    const shuffleOn = true;
    //const paused = null;

    // onPressPlay = async() => {
    //   const soundObject = new Audio.Sound();
    //   console.log("<--Paused?->");
    //   //console.log(props.paused);
    //   console.log("<---------->");
    //   try {
    //     await soundObject.loadAsync({ uri: FileSystem.documentDirectory + 'track.wav' });
    //     await soundObject.playAsync();
    //     //props.paused = false;
    //     // Your sound is playing!
    //   } catch (error) {
    //     // An error occurred!
    //   }
    // }
    //
    // onPressPause = async() => {
    //   const soundObject = new Audio.Sound();
    //   try {
    //     await soundObject.loadAsync({ uri: FileSystem.documentDirectory + 'track.wav' });
    //     await soundObject.pauseAsync();
    //     //props.paused =
    //     // Your sound is paused!
    //   } catch (error) {
    //     // An error occurred!
    //   }
    // }

     _onPressPlay = async () => {
       const soundObject = new Audio.Sound();
       console.log("Made it to a onPess function!");
       console.log(FileSystem.documentDirectory + 'track.wav');
       try {
         await soundObject.loadAsync({ uri: FileSystem.documentDirectory + 'track.wav' });
         await soundObject.playAsync();
         this.setState({ paused: false});
         //props.paused =
         // Your sound is paused!
       } catch (error) {
         // An error occurred!
       }
     }

     _onPressPause = async () => {
       const soundObject = new Audio.Sound();
       console.log("Made it to a onPess function!");
       console.log(FileSystem.documentDirectory + 'track.wav');
       try {
         await soundObject.loadAsync({ uri: FileSystem.documentDirectory + 'track.wav' });
         await soundObject.pausedAync();
         this.setState({ paused:true});
         //props.paused = false;
         // Your sound is playing!
       } catch (error) {
         // An error occurred!
       }
     }

    // _onPressButton() {
    //   alert('You tapped the button!')
    // }


    return(
      <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.0} onPress={async() => {
        console.log("OnPressShuffle has been pressed!");
    }}>
      <Image style={[styles.secondaryControl, shuffleOn ? [] : styles.off]}
        source={require('./img/ic_shuffle_white.png')}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity onPress={this.state.onBack}>
      <Image source={require('./img/ic_skip_previous_white_36pt.png')}/>
    </TouchableOpacity>
    <View style={{width: 20}} />
    {!this.state.paused ?
      <TouchableOpacity onPres={() => this._onPressPlay()}>
        <View style={styles.playButton}>
          <Image source={require('./img/ic_pause_white_48pt.png')}/>
        </View>
      </TouchableOpacity> :
      <TouchableOpacity onPress={() => this._onOressPause()}>
        <View style={styles.playButton}>
          <Image source={require('./img/ic_play_arrow_white_48pt.png')}/>
        </View>
      </TouchableOpacity>
    }
    <View style={{width: 20}} />
    <TouchableOpacity onPress={this.onForward}
      disabled={this.forwardDisabled}>
      <Image style={[this.forwardDisabled && {opacity: 0.3}]}
        source={require('./img/ic_skip_next_white_36pt.png')}/>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity activeOpacity={0.0} onPress={this.onPressRepeat}>
      <Image style={[styles.secondaryControl, this.repeatOn ? [] : styles.off]}
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
