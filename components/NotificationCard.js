import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class NotificationCard extends Component {
    render() {
        return (
            <View style={styles.WholeCard}>
                <View style={styles.Picture}></View>
                <Text style={styles.inside}></Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    WholeCard: {
       margin:20,
       marginBottom:0,
       padding:0,
       paddingTop:0,
       paddingBottom:0,
       backgroundColor:"white",
       elevation:10,
       flexDirection: 'row',
    },
    Picture:{
    flex:1,
    backgroundColor:"gray",
    margin:20,
    padding:20,
    paddingTop:35,
    paddingBottom:35,
    },
    inside:{
        flex:8,
        alignSelf:'center',
        marginRight:20,
    },
  });
  