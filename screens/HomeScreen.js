import React, { Component } from 'react'
import {View} from 'react-native'

import NotificationSlider from '../components/NotificationSlider'

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
            <View>
                <NotificationSlider/>
            </View>
        )
    }
}
