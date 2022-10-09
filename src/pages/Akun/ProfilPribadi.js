import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderProfile from '../../component/Header/HeaderProfile'

const ProfilPribadi = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderProfile title="Profil Karyawan" desc="Pribadi" />
    </View>
  )
}

export default ProfilPribadi

const styles = StyleSheet.create({})