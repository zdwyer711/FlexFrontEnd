import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

class PlayerHeader extends Component {


  render() {
    const props = this.props;
    return(
      <View style={styles.container}>
        <TouchableOpacity onPress={props.onPress}>
          <Image
           style={styles.image}
           source={require('./img/Ballin-Album-Art.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default PlayerHeader;

const { width, height } = Dimensions.get('window');
const imageSize = width - 48;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 24,
    paddingRight: 24,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
});
