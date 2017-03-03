import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  Navigator
} from 'react-native';

import Header from './Header';
import SportIcon from './SportIcon';
import NavBar from './NavBar';
import MenSports from './MenSports';
import WomenSports from './WomenSports';

export default class Explore extends Component {

  constructor() {
    super()
  }

  navExploreMen() {
    this.props.navigator.push({
      id: 'men'
    })
  }

  navExploreWomen() {
    this.props.navigator.push({
      id: 'women'
    })
  }

  render() {
    return(
      <View style = {{flex: 1}}>

      <View>
          <Header />
      </View>

      <TouchableHighlight style = {styles.button} onPress = {this.navExploreMen.bind(this)}>
          <Text style = {styles.title}> Men's Sports </Text>
      </TouchableHighlight>

      <TouchableHighlight style = {styles.button}  onPress = {this.navExploreWomen.bind(this)}>
          <Text style = {styles.title}> Women's Sports </Text>
      </TouchableHighlight>

      </View>

    );
  }
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderStyle: 'solid',
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 25,
    textAlign: 'center',
  },
});

AppRegistry.registerComponent('Explore', () => Explore);
