import React, { Component } from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

export default class TimeScreen extends Component {
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
    constructor(props) {
        super(props)
        this.state = {
            TimeLeft:0,
         }
      }
    startTimer(){
      var x = setInterval(() => {
        
        let arg = this.state.TimeLeft;
        arg = arg - 1;
        this.setState({TimeLeft: arg})
        if (arg < 1) {
          clearInterval(x);
          this.setState({TimeLeft: 0})
        }
      }, 1000);
    }
    setTimer(time){
        this.setState({TimeLeft:time})
    }
    render() {
        return (
            <View style={styles.TimeView}>
              <View>
                <Text style={styles.TimeText}>
                    Time left: {Math.floor(this.state.TimeLeft / 60)} minutes {this.state.TimeLeft % 60} seconds
                </Text>
              </View>
                <View style={{margin:5,}}>
                 <Button title="Start timer" color="#00c45f" onPress={() =>{this.startTimer()}}></Button>
                </View>

                <View style ={styles.presetButtonRow}>
                  <View style={{flex:1, margin:5,}}>
                    <Button title="40 minutes" color="#00c45f" onPress={() =>{this.setTimer(2400)}}></Button>
                  </View>
                  <View style={{flex:1, margin:5,}}>
                    <Button title=" 60 minutes" color="#00c45f" onPress={() =>{this.setTimer(10)}}></Button>
                  </View>
                </View>
                <View style ={styles.presetButtonRow}>
                  <View style={{flex:1, margin:5,}}>
                    <Button title="80 minutes" color="#00c45f" onPress={() =>{this.setTimer(4800)}}></Button>
                  </View>
                  <View style={{flex:1, margin:5,}}>
                    <Button title="120 minutes" color="#00c45f" onPress={() =>{this.setTimer(7200)}}></Button>
                  </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    TimeView: {
      
      marginTop:"auto",
      marginBottom:"auto",
    },
    TimeText:{
        textAlign:"center",
        fontSize:20,
        marginBottom:10,
    },
    presetButtonRow:{
      flexDirection:"row",
      marginTop:5,
      
    }
  });
  