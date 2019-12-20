import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native'
import {Switch} from "react-native-paper"
import { AsyncStorage } from 'react-native';


export default class NotificationSlider extends Component {

    constructor(props) {
        super(props)
        this.state = { SwitchState: false }
      }

    _storeData = async (itemName, itemValue) => {
        try {
          await AsyncStorage.setItem(itemName, itemValue);
        } catch (error) {
          // Error saving data
        }
      };
    
      _retrieveData = async (itemName) => {
        try {
          const value = await AsyncStorage.getItem(itemName);
          if (value !== null) {
            // We have data!!
            return value;
          }
        } catch (error) {
          // Error retrieving data
        }
      };
      ChangeSwitchValue(){
        this._retrieveData("value").then(value =>{
            if(value =="true"){
                this.setState({SwitchState:false});
                this._storeData("value", "false");
            }
            else{
                this.setState({SwitchState:true});
                this._storeData("value", "true");
            }
        });
      }
      componentDidMount(){
        this._retrieveData("value").then(value =>{
            if(value == null){
                this.setState({SwitchState:false});
                this._storeData("value", "false");
            }
            else if(value =="false"){
                this.setState({SwitchState:false});
                this._storeData("value", "false");
            }
            else{
                this.setState({SwitchState:true});
                this._storeData("value", "true");
            }
        });
      }

    render() {
        return (
            <TouchableHighlight onPress={() =>{this.ChangeSwitchValue()}}>
              <View  style={styles.container}>
                <Text>Let me know when a machine is available</Text>
                <View style={{marginLeft:"auto"}}><Switch onValueChange={() =>{this.ChangeSwitchValue()}} value={this.state.SwitchState} color="#00c45f"/></View>
              </View>
            </TouchableHighlight>
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
