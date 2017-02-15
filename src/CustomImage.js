import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class CustomImage extends Component {
    
  render() {
      const{fromWeb, imageName} = this.props
      if(fromWeb){
        return (
      <Image
        style={styles.image}
        source={{uri: imageName}}
      />
        )
    }
    else{
        return(
            <Image
        style={styles.image}
        source={imageName}
      />
        )
    }
  }
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
})