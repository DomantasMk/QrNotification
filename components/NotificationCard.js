import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class NotificationCard extends Component {
    returnHoursOrHour(time){
        if(Math.floor(this.props.time / 60) == 1){
            return ""
        }
        else{
            return "s"
        }
    }
    returnMinuteOrMinutes(time){
        if(Math.floor(this.props.time % 60) == 1){
            return "minute"
        }
        else{
            return "minutes"
        }
    }
    render() {
        return (
            <View style={styles.WholeCard}>
                <View style={styles.inside}>
                    <Text style={styles.insideText}>Laundry keys returned:</Text>
                    <Text style={styles.insideTextImportant}>{Math.floor(this.props.time / 60)} hour{this.returnHoursOrHour(this.props.time)} {this.props.time % 60} {this.returnMinuteOrMinutes(this.props.time)} ago</Text>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    WholeCard: {
       margin:10,
       marginBottom:0,
       padding:0,
       paddingTop:0,
       paddingBottom:0,
       backgroundColor:"white",
       elevation:10,
       flexDirection: 'row',
       justifyContent:"center",
    },
    Picture:{
    flex:1,
    backgroundColor:"gray",
    margin:20,
    padding:20,
    paddingTop:10,
    paddingBottom:10,
    },
    inside:{
        flex:8,
        alignSelf:'center',
        marginRight:20,
        margin:10,
        padding:0,

    },
    insideText:{
        fontSize:30,
        textAlign:'center'
    },    
    insideTextImportant:{
        fontSize:30,
        textAlign:'center',
        color:'red',

    }
  });
  