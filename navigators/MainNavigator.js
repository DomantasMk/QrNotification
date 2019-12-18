import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {createMaterialTopTabNavigator } from 'react-navigation-tabs'

import HomeScreen from '../screens/HomeScreen';
import QrScreen from '../screens/QrScreen';
import TimerScreen from '../screens/TimerScreen';

const MainNavigator = createStackNavigator({
Home:HomeScreen,
});
const SecondNavigator = createStackNavigator({
    TimerScreen:TimerScreen,
    });
const BottomNavigator =   createMaterialTopTabNavigator(
    {
        "Scan Qr Code":{screen:QrScreen, navigationOptions:{
            tabBarIcon: (tabinfo) =>{return <Ionicons name="md-qr-scanner" size={25} color={tabinfo.tintColor}/>}
        }},
        Home:{screen:MainNavigator, navigationOptions:{
            tabBarIcon: (tabinfo) =>{return <Ionicons name="md-home" size={25} color={tabinfo.tintColor}/>}
        }},
        Timer:{screen:SecondNavigator, navigationOptions:{
            tabBarIcon: (tabinfo) =>{return <Ionicons name="md-time" size={25} color={tabinfo.tintColor}/>}
        }}
        },
    {
      tabBarPosition: 'bottom',
      swipeEnabled: true,
      animationEnabled: true,
      initialRouteName:"Home",
      tabBarOptions: {
        showIcon:true,
        activeTintColor: '#f0edf6',
        inactiveTintColor: '#3e2465',
        style: {
          backgroundColor: '#00c45f',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
        },
      },
    }
  );
BottomNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index < 1) {
      tabBarVisible = false;
    }
}
const App = createAppContainer(BottomNavigator);

export default App;