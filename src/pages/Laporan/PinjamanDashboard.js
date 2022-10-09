import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderSecondary from '../../component/Header/HeaderSecondary'
import TextWithBorder from '../../component/TextField/TextWithBorder'

const PinjamanDashboard = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
     <HeaderSecondary title="Pinjaman" desc="Lorem Ipsum"  />
    <View style={{padding: 16}}>
    <TextWithBorder title="Pinjaman BJB" />
    <TextWithBorder title="POT LIMIT WAKTU Kelebihan Bayar" />
    <TextWithBorder title="Pinjaman BJB" />
    <TextWithBorder title="Pinjaman BJB" />


    </View>
    
    </View>
  )
}

export default PinjamanDashboard

const styles = StyleSheet.create({})