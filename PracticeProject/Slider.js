import React, { Component } from 'react';
import { View, StyleSheet, Text, AppRegistry } from 'react-native';
import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import BaseballRoster from './BaseballRoster';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
});

export default class Slider extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'GAMES' },
      { key: '2', title: 'ROSTER' },
      { key: '3', title: 'STATS' },
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return <TabBar {...props} />;
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <View style={styles.page} >
          <Text>{this.props.games}</Text>
        </View>;
    case '2':
      return <View style={styles.page} >
          {this.props.roster}
        </View>;
    case '3':
      return <View style={styles.page} >
        <Text>{this.props.stats}</Text>
        </View>
    default:
      return null;
    }
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

AppRegistry.registerComponent('Slider', () => Slider);
