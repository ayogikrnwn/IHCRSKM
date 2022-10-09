import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ICBack from '../../assets/arrowback.png'

const HeaderWithBack = ({title, desc}) => {
  return (
    <View style={{width: '100%', height: 71, backgroundColor: 'white', paddingHorizontal: 18, alignItems: 'center', flexDirection: 'row'}}>
    <TouchableOpacity>
        <Image source={ICBack} />
    </TouchableOpacity>
    <View style={{marginLeft: 16}}>
    <Text style={{fontSize: 14, color: '#00162A', fontWeight: 'bold'}}>{title} </Text>
    <Text style={{fontSize: 12, color: 'black', marginTop: 4}}>{desc} </Text>
    </View>
    

    </View>
  )
}

export default HeaderWithBack

const styles = StyleSheet.create({})