import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderSecondary from '../../component/Header/HeaderSecondary'
import TextWithBorder from '../../component/TextField/TextWithBorder'

const MedicalCheck = () => {
  return (
    <View style={{flex: 1}}>
    <HeaderSecondary title="Pinjaman" desc="Lorem Ipsum"  />
   <View style={{padding: 16}}>
   <TextWithBorder title="Riwayat Pengobatan" />
   <TextWithBorder title="Riwayat Medical Checkup" />
   <TextWithBorder title="Kupon MCU" />



   </View>
   
   </View>
  )
}

export default MedicalCheck

const styles = StyleSheet.create({})