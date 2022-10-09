import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header/Header'
import Square from '../../component/Square/Square'

const LaporanDashboard = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#E6EDF4'}}>
     <Header title="Laporan" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
     <View style={{padding:16}}>
        <Square text="DPMK" onPress={() => navigation.navigate('Laporan_DPMK')}  />
        <Square text="PPIP" />
        <Square text="TKIP" />
        <Square text="Pinjaman" onPress={() => navigation.navigate('PinjamanDashboard')}  />
        <Square text="Payslip Reguler" onPress={() => navigation.navigate('LaporanPayslip')}/>
        <Square text="Payslip Non-Reguler" />
        
        
     </View>
    </View>
  )
}

export default LaporanDashboard

const styles = StyleSheet.create({})