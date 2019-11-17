import React, { Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class NotificationSlider extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Slider for notifications is gonna be here</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 30,
      flex: 1,
      backgroundColor: '#d8d8d8',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
