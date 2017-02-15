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
        <Text style={styles.text}>{textContent}</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'whitesmoke',
    color: '#4A90E2',
    fontSize: 36,
    padding: 20
  },
})
