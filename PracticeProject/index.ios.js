'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Navigator

} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import MenSports from './MenSports';
import WomenSports from './WomenSports';
import Explore from './Explore';


export default class PracticeProject extends Component {

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
              return (<MenSports navigator = {navigator} title = "second" />);
            case 'third':
              return (<WomenSports navigator = {navigator} title = "third" />);
          }
        }
        }
    />);
  }
};



AppRegistry.registerComponent('PracticeProject', () => PracticeProject);
