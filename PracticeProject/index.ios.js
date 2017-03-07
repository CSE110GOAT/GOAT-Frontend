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
import MenSports from './MenSports';
import WomenSports from './WomenSports';
import Explore from './Explore';

import BaseballPage from './MSportPages/BaseballPage';
import MenBasketball from './MSportPages/MenBasketball';
import MenXC from './MSportPages/MenXC';
import MenFencing from './MSportPages/MenFencing';
import Golf from './MSportPages/Golf';
import MenRowing from './MSportPages/MenRowing';

import WomenBasketball from './WSportPages/WomenBasketball';
import WomenXC from './WSportPages/WomenXC';


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
            case 'MBasketball':
              return (<MenBasketball navigator = {navigator} title = "MBasketball" />);
            case 'MenXC':
              return (<MenXC navigator = {navigator} title = "MenXC" />);
            case 'MFencing':
              return (<MenFencing navigator = {navigator} title = "MFencing" />);
            case 'Golf':
              return (<Golf navigator = {navigator} title = "Golf" />);
            case 'MRowing':
              return (<MenRowing navigator = {navigator} title = "MRowing" />);

            case 'WBasketball':
              return (<WomenBasketball navigator = {navigator} title = "WBasketball" />);
            case 'WomenXC':
              return (<WomenXC navigator = {navigator} title = "WomenXC" />);
            case 'WFencing':
              return (<WomenFencing navigator = {navigator} title = "WFencing" />);
          }
        }
        }
    />);
  }
};

AppRegistry.registerComponent('PracticeProject', () => PracticeProject);
