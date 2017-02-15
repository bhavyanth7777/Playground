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
import CustomImage from './src/CustomImage';

export default class Playground extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomText textContent='Yolo'/>
        <CustomImage fromWeb={false} imageName={require('./images/logo.png')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

AppRegistry.registerComponent('Playground', () => Playground);
