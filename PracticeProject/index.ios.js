'use strict';

import React, { Component } from 'react';
import { AppRegistry, Text, ScrollView, View, StyleSheet } from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

class HelloWorldApp extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.banner}>
            <Text style={styles.banner_font}>Triton Athletics</Text>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
          <View style={styles.sport_icon} />
        </View>

      </ScrollView>
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
    backgroundColor: 'powderblue',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 0.5,
    top: 7
  }
});

AppRegistry.registerComponent('PracticeProject', () => HelloWorldApp);
