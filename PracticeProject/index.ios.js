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
import BaseballPage from './BaseballPage';


export default class PracticeProject extends Component {

  render () {
    return (
      <Navigator
        initialRoute = {{id:'explore'}}
        renderScene = {(route, navigator) => {
          this._navigator = navigator;
          switch (route.id) {
            case 'explore':
              return (<Explore navigator = {navigator} title = "explore" />);
            case 'men':
              return (<MenSports navigator = {navigator} title = "men" />);
            case 'women':
              return (<WomenSports navigator = {navigator} title = "women" />);
            case 'baseball':
              return (<BaseballPage navigator = {navigator} title = "baseball" />);
          }
        }
        }
    />);
  }
};



AppRegistry.registerComponent('PracticeProject', () => PracticeProject);
