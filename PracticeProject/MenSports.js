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
import WomenSports from './WomenSports';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class MenSports extends Component {

  render () {
    return (
      <View style={{flex: 1}}>
      <View style={styles.head}>
          <Header />
      </View>
      <ScrollView>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/baseball.png')}
              sport='Baseball'
            />

            <SportIcon
              pic={require('./sport_icons/basketball.png')}
              sport='Basketball'
            />
            <SportIcon
              pic={require('./sport_icons/cross_country.png')}
              sport='Cross Country'
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/fencing.png')}
              sport='Fencing'
            />
            <SportIcon
              pic={require('./sport_icons/golf.png')}
              sport='Golf'
            />
            <SportIcon
              pic={require('./sport_icons/rowing.png')}
              sport='Rowing'
            />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <SportIcon
              pic={require('./sport_icons/soccer.png')}
              sport='Soccer'
            />

            <SportIcon
              pic={require('./sport_icons/swimming.png')}
              sport='Swimming & Diving'
            />

            <SportIcon
              pic={require('./sport_icons/tennis.png')}
              sport='Tennis'
            />

          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>

            <SportIcon
              pic={require('./sport_icons/track.png')}
              sport='Track & Field'
            />
            <SportIcon
              pic={require('./sport_icons/volleyball.png')}
              sport='Volleyball'
            />

              <SportIcon
                pic={require('./sport_icons/water_polo.png')}
                sport='Water Polo'
              />

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

AppRegistry.registerComponent('MenSports', () => MenSports);
