import React, { Component } from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'

import NotificationSlider from '../components/NotificationSlider'
import NotificationCard from '../components/NotificationCard'

import * as Permissions from 'expo-permissions';

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'AO3 Laundry',
        headerStyle: {
          backgroundColor: '#00c45f',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
  /*fetch("http://localhost:8000").then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
    console.log(data)
  }) */

    render() {
      async function checkMultiPermissions() {
        const { status } = await Permissions.getAsync(
          Permissions.CAMERA,
          Permissions.NOTIFICATIONS
        );
        if (status !== 'granted') {
          alert('Hey! You heve not enabled selected permissions');
        }
      }
      checkMultiPermissions();
        return (
            <View styles={styles.container}>
                <NotificationSlider/>
                <ScrollView>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                <NotificationCard/>
                </ScrollView>

            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ebebeb',
  },
});
