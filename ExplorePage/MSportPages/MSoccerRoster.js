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

import Header from '../Header';
import SportIcon from '../SportIcon';
import NavBar from '../NavBar';
import MenSports from '../MenSports';
import WomenSports from '../WomenSports';
import Slider from '../Slider.js';
import MenSoccer from './MenSoccer';
import RosterIcon from '../RosterIcon';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class MSoccerRoster extends Component {


  render() {
    return (

        <View style = {{flex: 1, marginTop: 10}}>


        <View style = {{flex:1, flexDirection: 'row'}}>
          <TouchableHighlight>
            <View>
              <RosterIcon />
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View>
              <RosterIcon />
            </View>
          </TouchableHighlight>

          <TouchableHighlight>
            <View>
              <RosterIcon />
            </View>
          </TouchableHighlight>
        </View>

        </View>

    );
  }
};

AppRegistry.registerComponent('MSoccerRoster', () => MSoccerRoster);
