import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class CustomText extends Component {
  render() {
      const {textContent} = this.props
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{textContent}</Text>
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
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 36,
    padding: 20
  },
})
