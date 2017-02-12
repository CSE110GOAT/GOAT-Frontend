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
          <View style={styles.sport_icon}>
            <Text style={styles.sport_title}>Baseball</Text>
          </View>
          <View style={styles.sport_icon}>
            <Text style={[styles.sport_title, {left: 20}]}>Basketball</Text>
          </View>
          <View style={styles.sport_icon}>
            <Text style={[styles.sport_title, {left: 8}]}>Cross Country</Text>
          </View>

        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon}>
            <Text style={styles.sport_title}>Fencing</Text>
          </View>
          <View style={styles.sport_icon}>
            <Text style={[styles.sport_title, {left: 45}]}>Golf</Text>
          </View>
          <View style={styles.sport_icon}>
            <Text style={styles.sport_title}>Rowing</Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon}>
            <Text style={[styles.sport_title]}>Soccer</Text>
          </View>
          <View style={styles.sport_icon}>
            <Text style={[styles.sport_title]}>Softball</Text>
          </View>
          <View style={styles.sport_icon}>
            <Text style={[styles.sport_title, {left: 5, fontSize: 13}]}>Swimming & Diving</Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon}>
            <Text style={styles.sport_title}>Tennis</Text>
          </View>
          <View style={styles.sport_icon}>
            <Text style={[styles.sport_title, {left: 8}]}>Track & Field</Text>
          </View>
          <View style={styles.sport_icon}>
            <Text style={styles.sport_title}>Volleyball</Text>
          </View>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.sport_icon}>
            <Text style={styles.sport_title}>Water Polo</Text>
          </View>
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
    backgroundColor: 'white',
    borderColor: 'grey',
    borderStyle: 'solid',
    borderWidth: 0.5,
    top: 7,
  },

  sport_title: {
    paddingTop: 100,
    fontFamily: 'Chalkboard SE',
    fontSize: 18,
    left: 30
  }

});

AppRegistry.registerComponent('PracticeProject', () => HelloWorldApp);
