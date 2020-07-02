import React, { Component } from 'react';
import * as FileSystem from 'expo-file-system';
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
import * as MediaLibrary from 'expo-media-library';


//const window = new Window();
const SpotifyConnect = require('./SpotifyConnect');

class PlayerScreen extends Component {

  state = {
      totalLength: 1,
      currentPosition: 0,
      selectedTrack: 0,
      repeatOn: false,
      shuffleOn: false,
      source: null,
  };

  async componentDidMount() {
        // MediaLibrary.requestPermissionsAsync()
        // const uri = 'http://192.168.1.65:3000/getFlexTracks/api/flex-tracks/5dff97bec4d4ab1318e3d94d';
        // const asset = await MediaLibrary.createAssetAsync(uri);
        // console.log("<----------------->");
        // console.log(asset);
        // console.log("<----------------->");

        // console.log("<----------------->");
        // console.log(FileSystem.documentDirectory);
        // const filePath = FileSystem.documentDirectory + 'currentTrack/';
        // console.log("<----------------->");
        // const mkDir = FileSystem.makeDirectoryAsync(filePath);
        // console.log(mkDir);
        console.log("<----------------->");
        const remotePath = 'http://192.168.1.65:3000/getFlexTracks/api/flex-tracks/5dff97bec4d4ab1318e3d94d';
        //const remotePath = 'http://techslides.com/demos/sample-videos/small.mp4';
        //const trackCheck = await FileSystem.getInfoAsync(filePath);

        // console.log("<---TrackCheck--->")
        // console.log(trackCheck);
        //const currentTrack = await FileSystem.downloadAsync(remotePath,filePath);

        // const currentTrackUri = FileSystem.downloadAsync(
        //       remotePath,
        //       FileSystem.documentDirectory + 'track.wav'
        //       ).then(({ uri }) => {
        //         console.log('Finished downloading to ', uri);
        //         return uri;
        //       }).catch(error => {
        //         console.error(error);
        //         console.log("Audio File did not download");
        //         return error;
        //       });
        //
        // console.log("<--------currentTrack---------->");
        // console.log(currentTrackUri);
        // console.log("<------------------>");
        // const trackCheck = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'track.wav');
        // console.log(trackCheck);
        // console.log("<------------------>");
        // const soundObject = new Audio.Sound();
        // console.log(trackCheck.uri);
        // var track = trackCheck.uri;
        // console.log("<------------------>");
        //
        // // const playbackObject = await Audio.Sound.createAsync(
        // // //       { uri: trackCheck.uri },
        // // //       { shouldPlay: true }
        // // // );
        // // // console.log(playbackObject);
        // //
        // // await playbackObject.playAsync();
        // try {
        //   //await soundObject.loadAsync(track);
        //   await soundObject.loadAsync({ uri: FileSystem.documentDirectory + 'track.wav' });
        //   await soundObject.playAsync();
        //   // Your sound is playing!
        // } catch (error) {
        //   // An error occurred!
        // }
        // console.log(currentTrack.uri);
        // this.setState({
        //   source: {
        //     uri: currentTrack.uri
        //   }
        // });
  //       FileSystem.downloadAsync( remotePath, filePath);
  //     .then(({ uri }) => {
  //       Alert.alert(
  //         "App",
  //         uri
  //       );
  //     this.setState({uri: uri});
  // })
  // .catch(error => {
  //   Alert.alert(
  //     "App",
  //     error
  //   );
  //   console.error(error);
  // });

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
