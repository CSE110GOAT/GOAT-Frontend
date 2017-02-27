import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import SportPage from './SportPage';


export default class Explore extends Component {

  constructor() {
    super()
  }

  navExplore() {
    this.props.navigator.push({
      id: 'second'
    })
  }

  render() {
    return(
      <TouchableHighlight onPress = {this.navExplore.bind(this)}>
        <View >
          <Text style = {styles.title}> Men Sports </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: window.width,
    height: window.width/3,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 18,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('Explore', () => Explore);
