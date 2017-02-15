import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class Toggle extends Component {
    onPress = (option) => {
        // define props
        const {onChange} = this.props
        onChange(option)
    }

    renderOption = (option) => {
        // define props
        const {value, options} = this.props

        return(
            <TouchableOpacity onPress={this.onPress.bind(this, option)} style={[styles.option, option === value && styles.activeOption]}>
                <Text style={styles.text}>
                    {option}
                </Text>
            </TouchableOpacity>
        )
    }

    render(){
        const {label, options} = this.props
        
        return(
            <View style={styles.container}>
                <Text style={[styles.text,styles.label]}>
                    {label}
                </Text>
                <View style={styles.optionContainer}>
                    {options.map(this.renderOption)}

                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingBottom: 20,
  },
  text: {
    fontSize: 14,
  },
  label: {
    padding: 4,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  option: {
    padding: 4,
    backgroundColor: 'whitesmoke',
  },
  activeOption: {
    backgroundColor: 'skyblue',
  },
})