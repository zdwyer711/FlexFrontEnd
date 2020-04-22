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
  Dimensions
} from 'react-native';

class PlayerScreen extends Component {
  render() {
    const track = {
          title: 'Ballin\'(With Roddy Ricch)',
          artist:'Mustard,Roddy Ricch'
    }
    const { navigation } = this.props;
    return(
        <View style={styles.container}>
            <PlayerHeader message="Playing from Charts"
                nav={navigation}
            />
            <AlbumArt url={require('./img/Ballin-Album-Art.png')} />
            <TrackDetails title={track.title} artist={track.artist} />
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
