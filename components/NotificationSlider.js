import React, { Component } from 'react'
import {View, Text, StyleSheet, Switch} from 'react-native'

export default class NotificationSlider extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Switch value={true} />
                <Text>Let me know when a machine is available</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      padding: 15,
      flexDirection:'row',
      backgroundColor: '#d8d8d8',
    },
  });
