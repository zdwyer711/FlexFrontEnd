import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { SearchBar } from 'react-native-elements';

const getUserData = require('../client/user/getUserData');
const getTrackSearchSet = require('../client/user/getTrackSearchSet');

class SearchScreen extends Component {

  state = {
    search: '',
  };

  updateSearch = async (search) => {
    this.setState({ search });
    const accessToken = await getUserData('accessToken');
    console.log(search);
    console.log(accessToken);
    const trackSet = await getTrackSearchSet(accessToken, search);
    console.log(trackSet);
  };

  render() {
    const { search } = this.state;
    const showLoading = true;
    const lightTheme = false;
    return(
        <View style={styles.container}>
            <SearchBar
              containerStyle={styles.searchBarContainer}
              lightTheme={this.lightTheme}
              platform="ios"
              showLoading={this.showLoading}
              placeholder="Search Flex"
              onChangeText={this.updateSearch}
              value={search}
            />
            <Text>SearchScreen</Text>
        </View>
    );
  }
}

export default SearchScreen;

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#02071a'
   },
   searchBarContainer: {
     height: 84,
     paddingTop: 27,
     paddingLeft: 12,
     paddingRight: 12,
     flexDirection: 'row',
     backgroundColor: '#02071a'
   },
});
