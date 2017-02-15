import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

export default class CustomImage extends Component {
    
  render() {
      const{fromWeb} = this.props
      console.log({fromWeb})
      if(fromWeb){
        return (
      <Image
        style={styles.image}
        source={{uri: 'http://www.reactnativeexpress.com/logo.png'}}
      />
        )
    }
    else{
        console.log("In else")
        return(
            <Image
        style={styles.image}
        source={require('../images/logo.png')}
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