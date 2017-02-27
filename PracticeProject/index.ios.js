'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Navigator,

} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import SportPage from './SportPage';
import Explore from './Explore'


class PracticeProject extends Component {

  render () {
    return (
      <Navigator
        initialRoute = {{id:'first'}}
        renderScene = {(route, navigator) => {
          this._navigator = navigator;
          switch (route.id) {
            case 'first':
              return (<Explore navigator = {navigator} title = "first" />);
            case 'second':
              return (<SportPage navigator = {navigator} title = "second" />);
        }
      }
      }
    />);
  }
}



AppRegistry.registerComponent('PracticeProject', () => PracticeProject);
