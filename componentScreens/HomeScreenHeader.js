import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
class HomeScreenHeader extends Component {


  render() {
    const props = this.props;
    return(
      <View style={styles.container}>
        <Image style={styles.button}
        source={require('./img/ic_keyboard_arrow_down_white.png')} />
      <View style={styles.centerSpaceContainer} />
      <TouchableOpacity
           onPress={() => props.nav.navigate('Search')}
      >
      <Image style={styles.button}
      source={ require('./../assets/icon-search.png')} />
      </TouchableOpacity>
      </View>
    );
  }
}

export default HomeScreenHeader;

const styles = StyleSheet.create({
  centerSpaceContainer: {
    flex: 1,
  },
  container: {
    height: 72,
    paddingTop: 27,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
  },
  button: {
    opacity: 0.72
  }
});
