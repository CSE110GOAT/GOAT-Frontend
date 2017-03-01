import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator,
  TabBarIOS
} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import MenSports from './MenSports';
import WomenSports from './WomenSports';
import Slider from './Slider.js';

import Icon from 'react-native-vector-icons/Ionicons';

export default class BaseballPage extends Component {

  constructor() {
    super()
  }

  navBack () {
    this.props.navigator.pop({
      id: 'men'
    })
  }

  render() {
    return(
      <View style = {{flex:1}}>

      <View style = {styles.topBar}>
          <TabBarIOS
            barTintColor = "white"
            tintColor = "black"
            unselectedItemTintColor = "black"
            translucent = {true}

            >

            <Icon.TabBarItemIOS
              iconName = "ios-arrow-back-outline"
              selectedIconName = "ios-arrow-back"
              onPress = {this.navBack.bind(this)}
              />
            </TabBarIOS>
            <View style = {styles.head}>
              <Text style = {styles.title}> BASEBALL </Text>
            </View>
        </View>

        <Slider />

      </View>

    );
  }
};

const styles = StyleSheet.create({
  head: {
    width: 320,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 8,
    paddingRight: 45

  },

  title: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 25,

  },

  topBar: {
    flexDirection: 'row',
    width: window.width,
  }

});

AppRegistry.registerComponent('BaseballPage', () => BaseballPage);
