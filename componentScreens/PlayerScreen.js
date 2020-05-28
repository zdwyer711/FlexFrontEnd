import React, { Component } from 'react';
import PlayerHeader from './PlayerHeader';
import AlbumArt from './AlbumArt';
import TrackDetails from './TrackDetails';
import SeekBar from './SeekBar';
import PlayerControls from './PlayerControls';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Audio } from 'expo-av';



//const window = new Window();
const SpotifyConnect = require('./SpotifyConnect');

class PlayerScreen extends Component {

  state = {
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
  };

  componentDidMount() {
    // console.log(spotifyConnect);
    // alert(spotifyConnect);
    // spotifyConnect.onSpotifyWebPlaybackSDKReady = () => {
    //   // You can now initialize Spotify.Player and use the SDK
    //   alert('onSpotifyWebPlaybackSDKReady!');

    // const script = window.document.createElement("script");
    // script.src = "https://sdk.scdn.co/spotify-player.js";
    // script.async = true;
    // script.onload = () => this.scriptLoaded();
    //
    // window.document.body.appendChild(script);
    // console.log(document);
     };
    //const spotify = require('https://sdk.scdn.co/spotify-player.js');
    // const script = document.createElement("script");
    // script.src = "https://sdk.scdn.co/spotify-player.js";
    // script.async = true;
    // script.onload = () => this.scriptLoaded();
    //
    // document.body.appendChild(script);
    // console.log(document);
    // alert(document);

  render() {
    const track = {
          title: 'Ballin\'(With Roddy Ricch)',
          artist:'Mustard,Roddy Ricch'
    }

    // const soundObject = new Audio.Sound();
    // try {
    //   soundObject.loadAsync({uri: 'spotify:track:3QzAOrNlsabgbMwlZt7TAY'});
    //   soundObject.playAsync();
    //   // Your sound is playing!
    // } catch (error) {
    //   // An error occurred!
    // }

    const { navigation } = this.props;
    return(
        <View style={styles.container}>
            <PlayerHeader message="Playing from Charts"
                nav={navigation}
            />
            <AlbumArt url={require('./img/Ballin-Album-Art.png')} />
            <TrackDetails title={track.title} artist={track.artist} />
            <PlayerControls/>
        </View>
    );
  }
}

export default PlayerScreen;

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     //alignItems: 'center',
     //justifyContent: 'center',
     backgroundColor: "#02071a",
   },
   albumArt: {
     height: imageSize,
     width: imageSize,
     paddingLeft: 24,
     paddingRight: 24,
     backgroundColor: '#fff'

   },
   text: {
     color: 'white'
   }
});

// const styles = StyleSheet.create({
//    container: {
//      flex: 1,
//      alignItems: 'center',
//      justifyContent: 'center',
//      backgroundColor: "#02071a",
//    },
//    albumContainer: {
//      flex:7,
//      alignItems:'center',
//      justifyContent:'center',
//      backgroundColor:'#fff',
//      height: imageSize,
//      width: imageSize,
//      marginTop: 60,
//      marginBottom: 20,
//      paddingLeft: 24,
//      paddingRight: 24
//    },
//    trackDetailsContainer: {
//      flex: 2,
//      alignItems:'center',
//      justifyContent:'center',
//      backgroundColor:'#fff',
//      height: 100,
//      width:320,
//      marginBottom: 150,
//    },
//    sliderContainer: {
//      flex: 1,
//      alignItems:'center',
//      justifyContent:'center',
//      backgroundColor:'#fff',
//      height: 80,
//      width:320,
//      marginBottom: 60,
//    },
//    text: {
//      color: 'white'
//    }
// });
