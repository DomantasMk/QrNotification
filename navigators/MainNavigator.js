import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'

import HomeScreen from '../screens/HomeScreen';
import QrScreen from '../screens/QrScreen';
import TimerScreen from '../screens/TimerScreen';

const MainNavigator = createStackNavigator({
Home:HomeScreen,
});
const BottomNavigator = createMaterialBottomTabNavigator({
"Scan Qr Code":{screen:QrScreen, navigationOptions:{
    tabBarIcon: (tabinfo) =>{return <Ionicons name="md-qr-scanner" size={25} color={tabinfo.tintColor}/>}
}},
Home:{screen:MainNavigator, navigationOptions:{
    tabBarIcon: (tabinfo) =>{return <Ionicons name="md-home" size={25} color={tabinfo.tintColor}/>}
}},
Timer:{screen:TimerScreen, navigationOptions:{
    tabBarIcon: (tabinfo) =>{return <Ionicons name="md-time" size={25} color={tabinfo.tintColor}/>}
}}
},
{
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#00c45f' },
    shifting:true,
  })

const App = createAppContainer(BottomNavigator);

export default App;