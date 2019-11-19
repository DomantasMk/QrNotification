import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class NotificationCard extends Component {
    render() {
        return (
            <View style={styles.WholeCard}>
                <View style={styles.Picture}></View>
                <Text style={styles.inside}>ADSDJOIAJEGOIJSROGISEG</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    WholeCard: {
       margin:20,
       padding:20,
       paddingTop:40,
       paddingBottom:40,
       backgroundColor:"white",
       elevation:10,
    },
    Picture:{
    
    backgroundColor:"gray",
    padding:15,
    },
    inside:{
        flex:3,
    },
  });
  