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
import Explore from './Explore';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class WomenSports extends Component {

  render () {
    return (
      <View style={{flex: 1}}>

      <View style={styles.head}>
          <Header />
      </View>

        <ScrollView style={{
          marginBottom: window.width/4 - 45
        }}>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/basketball.png')}
              sport='Basketball'
            />
            <SportIcon
              pic={require('./sport_icons/cross_country.png')}
              sport='Cross Country'
            />

            <SportIcon
              pic={require('./sport_icons/fencing.png')}
              sport='Fencing'
            />

          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>

            <SportIcon
              pic={require('./sport_icons/rowing.png')}
              sport='Rowing'
            />

            <SportIcon
              pic={require('./sport_icons/soccer.png')}
              sport='Soccer'
            />

            <SportIcon
              pic={require('./sport_icons/softball.png')}
              sport='Softball'
            />

          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>

            <SportIcon
              pic={require('./sport_icons/swimming.png')}
              sport='Swimming & Diving'
            />

            <SportIcon
              pic={require('./sport_icons/tennis.png')}
              sport='Tennis'
            />
            <SportIcon
              pic={require('./sport_icons/track.png')}
              sport='Track & Field'
            />

          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>

            <SportIcon
              pic={require('./sport_icons/volleyball.png')}
              sport='Volleyball'
            />

            <SportIcon
              pic={require('./sport_icons/water_polo.png')}
              sport='Water Polo'
            />

            <View style={[styles.sport_icon, {borderBottomWidth: 0}]}>
            </View>
          </View>

        </ScrollView>

        <NavBar />
      </View>

    );
  }
};

const styles = StyleSheet.create({
  head: {
    justifyContent: 'center',
    alignItems: 'center',
    width: window.width,
    height: 80,
    backgroundColor: '#00008b'
  },

  sport_icon: {
    width: window.width/3,
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
});

AppRegistry.registerComponent('WomenSports', () => WomenSports);
