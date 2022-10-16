import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Camera, useCameraDevices } from 'react-native-vision-camera'

const ScanPresensi = () => {
   
    const devices = useCameraDevices('ultra-wide-angle-camera')
    const device = devices.back

    console.log('devicess', device);


  return (
    <View style={{flex: 1}}>
   {device == 'null' ?
            <ActivityIndicator size="large" color="black" /> :
            <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
    }
   
    </View>
  )
}

export default ScanPresensi

const styles = StyleSheet.create({})