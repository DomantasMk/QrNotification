import React, { Component } from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'

import NotificationSlider from '../components/NotificationSlider'
import NotificationCard from '../components/NotificationCard'

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


    render() {
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
