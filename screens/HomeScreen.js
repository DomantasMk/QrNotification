import React, { Component } from 'react'
import {View, StyleSheet, ScrollView, Button} from 'react-native'

import NotificationSlider from '../components/NotificationSlider'
import NotificationCard from '../components/NotificationCard'
import { Ionicons } from '@expo/vector-icons';
import * as Permissions from 'expo-permissions';
import { TouchableHighlight } from 'react-native-gesture-handler';

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
        headerRight: () => (
          <TouchableHighlight onPress={() =>{console.log()}} style={{marginRight:20}}><Ionicons name="md-refresh" size={30} fontWeight={20} color={"white"} /></TouchableHighlight>
        ),
      };
  /*\
  data fetching
  fetch("http://localhost:8000").then(response => {
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
          alert('You have not enabled camera permissions, so the QR screen will not work');
        }
      }
      checkMultiPermissions();
        return (
            <View styles={styles.container}>
                <NotificationSlider/>
                <ScrollView>
                <NotificationCard time="61"/>
                <NotificationCard time="120"/>
                <NotificationCard time="180"/>
                <NotificationCard time="200"/>
                <NotificationCard time="260"/>
                <NotificationCard time="320"/>
                <NotificationCard time="376"/>
                <NotificationCard time="432"/>
                <View style={{margin:25,}}></View>
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
