/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image
} from 'react-native';

import CustomText from './src/CustomText';

export default class Playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
        style={styles.image}
        source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
      />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
})

AppRegistry.registerComponent('Playground', () => Playground);
