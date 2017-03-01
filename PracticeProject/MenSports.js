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
  TouchableHighlight,
  TabBarIOS

} from 'react-native';


import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import Explore from './Explore';
import WomenSports from './WomenSports';
import BaseballPage from './BaseballPage';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons';

export default class MenSports extends Component {

  navBaseball() {
    this.props.navigator.push({
      id: 'baseball'
    })
  }

  navBack () {
    this.props.navigator.pop({
      id: 'explore'
    })
  }

  render () {
    return (
      <View style={{flex: 1}}>

      <View style={styles.head}>
        <Header />
      </View>

      <View style = {styles.topBar}>
      <TouchableHighlight onPress = {this.navBack.bind(this)}>
        <Image
          source = {require('./Back-50.png')}
          style = {styles.pic}

        />
      </TouchableHighlight>

          <View style = {styles.banner}>
            <Text style = {styles.title}> MEN'S SPORTS </Text>
          </View>

        </View>


      <ScrollView>
          <View style={{flex: 1, flexDirection: 'row'}}>

          <TouchableHighlight onPress = {this.navBaseball.bind(this)}>
          <View>
            <SportIcon
              pic={require('./sport_icons/baseball.png')}
              sport='Baseball'
            />
          </View>
          </TouchableHighlight>


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

  banner: {
    width: 320,
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'column',
    marginTop: 8,
    marginBottom: 8,
    paddingRight: 60

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

  topBar: {
    flexDirection: 'row',
    width: window.width,
    borderWidth: 0.5,
    borderColor: 'green',

  },

  title: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    marginLeft: 37

  },

  pic: {

    width: 25,
    height: 25,
    marginTop: 5,
    marginLeft: 10,
    marginRight: 0


  }

});

AppRegistry.registerComponent('MenSports', () => MenSports);
