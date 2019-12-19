import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import * as Permissions from 'expo-permissions';

export default function QrScreen() {

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
      (async () => {
        BarCodeScanner.req
        const { status } = await Permissions.getAsync(Permissions.CAMERA);
        setHasPermission(status === 'granted');
      })();
    }, []);
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
  
    if (hasPermission === null) {
      return <View style={styles.container}><View style={{justifyContent:'center'}}><Text style={{fontSize:30,}}>No access to camera</Text></View></View>;
    }
    if (hasPermission === false) {
      return <View style={styles.container}><View style={{justifyContent:'center'}}><Text style={{fontSize:30,}}>No access to camera</Text></View></View>;
    }
  
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
          
          <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned()}
          style={StyleSheet.absoluteFillObject}
        />
  
        {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
          
      </View>
    );
}
const styles = StyleSheet.create({
  container :{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
  },
});