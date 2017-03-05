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

import RosterIcon from '../../RosterIcon.js';

export default class WBasketballRoster extends Component {

  render() {
    return (
        <View style = {styles.overall_page}>

          <View style = {[styles.roster_row, {borderTopWidth: 0.5}]}>
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
              <View style = {styles.end_of_row}>
                <RosterIcon />
              </View>
            </TouchableHighlight>
          </View>

          <View style = {styles.roster_row}>
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
              <View style = {styles.end_of_row}>
                <RosterIcon />
              </View>
            </TouchableHighlight>
          </View>

        </View>
    );
  }
};

const styles = StyleSheet.create({
  overall_page: {
    flex: 1,
    marginTop: 10
  },

  roster_row: {
    flexDirection: 'row',
  },

  end_of_row: {
    borderRightWidth: 0.5
  }
});

AppRegistry.registerComponent('WBasketballRoster', () => WBasketballRoster);
