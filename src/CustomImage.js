import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class CustomImage extends Component {
    
  render() {
      const{fromWeb, imageName} = this.props
      var source = (fromWeb)? {uri: imageName}: imageName
        return (
      <Image style={styles.image} source={source}/>
        )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})