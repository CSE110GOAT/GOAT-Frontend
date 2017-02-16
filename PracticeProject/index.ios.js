'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, View, StyleSheet, Image } from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{
          marginBottom: window.width/4 - 45
        }}>
          <View style={styles.banner}>
              <Text style={styles.banner_font}>Triton Athletics</Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/baseball.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Baseball</Text>
            </View>

            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/basketball.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Basketball</Text>
            </View>

            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/cross_country.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Cross Country</Text>
            </View>

          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/fencing.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Fencing</Text>
            </View>

            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/golf.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Golf</Text>
            </View>

            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/rowing.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Rowing</Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/soccer.png')}
              style={styles.sport_pic}
              />
              <Text style={[styles.sport_title]}>Soccer</Text>
            </View>

            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/softball.png')}
              style={styles.sport_pic}
              />
              <Text style={[styles.sport_title]}>Softball</Text>
            </View>

            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/swimming.png')}
              style={styles.sport_pic}
              />
              <Text style={[styles.sport_title, {fontSize: 13}]}>Swimming & Diving</Text>
            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/tennis.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Tennis</Text>
            </View>

            <View style={styles.sport_icon}>
              <Image
              source={require('./sport_icons/track.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Track & Field</Text>
            </View>

            <View style={styles.sport_icon}>
              <Image
                source={require('./sport_icons/volleyball.png')}
                style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Volleyball</Text>

            </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={[styles.sport_icon, {borderTopWidth: 0}]}>
              <Image
              source={require('./sport_icons/water_polo.png')}
              style={styles.sport_pic}
              />
              <Text style={styles.sport_title}>Water Polo</Text>
            </View>
            <View style={[styles.sport_icon, {borderBottomWidth: 0}]}>
            </View>
            <View style={styles.sport_icon, {borderTopWidth: 20}}>
            </View>
          </View>
        </ScrollView>

        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-end'
        }}>
          <View style={styles.home_icon}>
            <Image
            source={require('./home_bar_icons/home.png')}
            style={styles.home_pic}
            />
          </View>

          <View style={styles.home_icon}>
            <Image
            source={require('./home_bar_icons/magnifying_glass.png')}
            style={styles.home_pic}
            />
          </View>

          <View style={styles.home_icon}>
            <Image
            source={require('./home_bar_icons/social.png')}
            style={styles.home_pic}
            />
          </View>

          <View style={styles.home_icon}>
            <Image
            source={require('./home_bar_icons/news.png')}
            style={styles.home_pic}
            />
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  banner: {
    width: window.width,
    height: 100,
    backgroundColor: 'navy'
  },

  banner_font: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
    paddingTop: 30,
    paddingBottom: 30,
    color: 'gold'
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

  sport_title: {
    fontSize: 18,
    textAlign: 'center',
  },

  sport_pic: {
    width: window.width/3 - 50,
    height: window.width/3 - 50,
    alignSelf: 'center',
  },

  home_icon: {
    width: window.width/4,
    height: window.width/4 - 45,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderTopWidth: 0.5,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    justifyContent: 'center'
  },

  home_pic: {
    width: window.width/4 - 60,
    height: window.width/4 - 60,
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('PracticeProject', () => HelloWorldApp);
