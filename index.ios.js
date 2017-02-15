/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box]} />
        <View style={[styles.box,{backgroundColor: 'red'}]} />
        <View style={[styles.box,{backgroundColor: 'yellow'}]} />
        <View style={[styles.box,{backgroundColor: 'green'}]} />
        <View style={[styles.box,{backgroundColor: 'orange'}]} />
        <View style={[styles.box,{backgroundColor: 'pink'}]} />
        <View style={[styles.box,{backgroundColor: 'teal'}]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
    flexWrap: 'wrap',
    padding: 15
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'steelblue',
    borderRadius: 20,
    margin: 10
  },
});

AppRegistry.registerComponent('Playground', () => Playground);
