import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  SafeAreaView
} from 'react-native';
import MiniPlayer from "./MiniPlayer";
import HomeScreenHeader from "./HomeScreenHeader";
import { useNavigation } from '@react-navigation/native';
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { Icon } from "react-native-elements";

// const getUserData = require('../client/user/getUserData');
// const userRefreshToken = require('../client/user/userRefreshToken');
// const clearLocalUserData = require('../client/user/clearLocalUserData');

const MINIMIZED_PLAYER_HEIGHT = 42;
const SNAP_TOP = 0;

class HomeScreen extends Component {

  // state = {
  //       accessTokenAvailable: []
  // };

  async componentDidMount() {
    // await clearLocalUserData('expirationTime');
    // const tokenExpirationTime = await getUserData('expirationTime');
    // console.log("======Token Expiration Time=========");
    // console.log(tokenExpirationTime);
    //
    // if (!tokenExpirationTime || new Date().getTime() > tokenExpirationTime) {
    //   await userRefreshToken();
    //   // alert('RefreshToken() has been reached and refreshed!');
    // } else {
    //   this.setState({ accessTokenAvailable: true });
    //   alert('Access Token is Available!');
    // }
   //  React.useLayoutEffect(() => {
   //   navigation.setOptions({
   //     headerRight: () => (
   //       <View style={styles.iconContainer}>
   //              <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
   //              <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-heart" : "md-heart"} />
   //              <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-more" : "md-more"} />
   //       </View>
   //     ),
   //   });
   // }, navigation);
  }

  // static navigationOptions = {
  //    title: "Title",
  //    headerLeft: (
  //      <Icon
  //        containerStyle={styles.icon}
  //        type="ionicon"
  //        name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
  //      />
  //    ),
  //    headerRight: (
  //      <View style={styles.iconContainer}>
  //        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-search" : "md-search"} />
  //        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-heart" : "md-heart"} />
  //        <Icon type="ionicon" name={Platform.OS === "ios" ? "ios-more" : "md-more"} />
  //      </View>
  //    )
  //  };
  //
  // React.useLayoutEffect(() => {
  //      navigation.setOptions({
  //        headerRight: () => (
  //          <Button onPress={() => setCount(c => c + 1)} title="Update count" />
  //        ),
  //      });
  //  }, [navigation, setCount]);


render() {
   // Get it from props
   const { navigation } = this.props;

   return(
          <View style={styles.container}>
             <HomeScreenHeader nav={navigation}/>
             <ActivityIndicator size='large' />
             <View style={styles.miniPlayerContainer}>
             <TouchableOpacity
                  style={styles.miniPlayerButton}
                  onPress={() => navigation.navigate('Player')}
             >
              <MiniPlayer />
             </TouchableOpacity>
            </View>
         </View>
       );
    }
}

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#02071a'
   },
   headerContainer: {
              position:"absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 50
   },
   miniPlayerContainer: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: MINIMIZED_PLAYER_HEIGHT
   },
   miniPlayerButton: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: MINIMIZED_PLAYER_HEIGHT,
   },
   icon: {
    paddingLeft: 10
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120
  }
});
