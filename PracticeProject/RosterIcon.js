import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class RosterIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fitFont: false
    };
  }

  render() {
    return(
        <View style={styles.grid}>
          <Text style={styles.player}
          adjustsFontSizeToFit={this.state.fitFont}>{this.props.sport}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  grid: {
    width: window.width/3,
    height: window.width/3,
    backgroundColor: 'white',
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderTopWidth: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  player: {
    fontSize: 18,
    textAlign: 'center',
  },

});

AppRegistry.registerComponent('RosterIcon', () => RosterIcon);