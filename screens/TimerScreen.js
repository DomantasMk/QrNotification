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
            timer:0,
         }
      }
    startTimer(){
      if(this.state.TimeLeft==0){
        return
      }
      if(this.state.timer != 0){
        clearInterval(this.state.timer);
        this.setState({timer:0});
      }
      else{
        this.setState({timer :setInterval(() => {
        
          let arg = this.state.TimeLeft;
          arg = arg - 1;
          this.setState({TimeLeft: arg})
          if (arg < 1) {
            clearInterval(this.state.timer);
            this.setState({timer: 0})
            this.setState({TimeLeft: 0})
            this.forceUpdate();
          }
        }, 1000)});
      }
      
    }
    setTimer(time){
        if(time == 0){
            this.setState({timer: 0})
            this.setState({TimeLeft: 0})
            this.forceUpdate();
        }
        else{
          this.setState({TimeLeft:this.state.TimeLeft + time})
        }

    }
    returnTimerLabel(){
      if(this.state.timer == 0){
        return "Start timer"
      }
      else{return "Stop timer"}
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
                 <Button title={this.returnTimerLabel()} color="#00c45f" onPress={() =>{this.startTimer()}}></Button>
                </View>

                <View style ={styles.presetButtonRow}>
                  <View style={{flex:1, margin:5,}}>
                    <Button title="40 minutes" color="#00c45f" onPress={() =>{this.setTimer(2400)}}></Button>
                  </View>
                  <View style={{flex:1, margin:5,}}>
                    <Button title=" 1 hour" color="#00c45f" onPress={() =>{this.setTimer(10)}}></Button>
                  </View>
                </View>
                <View style ={styles.presetButtonRow}>
                  <View style={{flex:1, margin:5,}}>
                    <Button title="1 hour 20 minutes" color="#00c45f" onPress={() =>{this.setTimer(4800)}}></Button>
                  </View>
                  <View style={{flex:1, margin:5,}}>
                    <Button title="2 hours" color="#00c45f" onPress={() =>{this.setTimer(7200)}}></Button>
                  </View>
                </View>
                <View style={{margin:5,marginTop:10}}>
                  <Button title="Clear Timer" color="#00c45f" onPress={() =>{this.setTimer(0)}}></Button>
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
  