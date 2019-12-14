import React, { Component } from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

export default class TimeScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Time:0,

         }
      }
    startTimer(){

    }
    setTimer(time){
        this.setState({Time:time});
    }
    render() {
        return (
            <View style={styles.TimeView}>
                <Text style={styles.TimeText}>
                    Time: {this.state.Time}
                </Text>
                <Button title="Start timer" onPress={() =>{this.setTimer(100)}}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    TimeView: {
      alignSelf:"center",
      marginTop:"auto",
      marginBottom:"auto",
    },
    TimeText:{
        textAlign:"center",
        fontSize:20,
        marginBottom:10,
    }
  });
  