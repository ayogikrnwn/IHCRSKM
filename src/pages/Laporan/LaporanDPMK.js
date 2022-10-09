import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderSecondary from '../../component/Header/HeaderSecondary'

const LaporanDPMK = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
     <HeaderSecondary title="Laporan DPMK" desc="Dana Pensiun Mitra Krakatau" />
     <View style={{padding: 16}}>
        <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 14, color: '#292929', alignSelf: 'center', fontWeight: 'bold'}}>PT. KRAKATAU MEDIKA</Text>
            <Text style={{fontSize: 12, color: '#808080', alignSelf: 'center'}}>Dana Pensiun Mitra Krakatau</Text>
        </View>
        <View style={{backgroundColor: '#E6EDF4', justifyContent: 'space-between', height: 200, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 16}}>
            <View>
                <Text style={styles.text}>Nama</Text>
                <Text style={styles.text}>NIK</Text>
                <Text style={styles.text}>Account Number</Text>
                <Text style={styles.text}>Iuran Karyawan</Text>
                <Text style={styles.text}>Iuran Perusahaan</Text>
               
                <Text style={styles.text}>Saldo Sebelumnya</Text>

            </View>
            <View>
                <Text style={styles.textEnd}>Veronica Yulian</Text>
                <Text style={styles.textEnd}>10021</Text>
                <Text style={styles.textEnd}>10021</Text>
                <Text style={styles.textEnd}>10021</Text>
                <Text style={styles.textEnd}>10021</Text>
               
                <Text style={styles.textEnd}>10021</Text>

            </View>
        </View>
        <View style={{backgroundColor: '#E6EDF4', justifyContent: 'space-between', height: 70, width: '90%', alignSelf: 'center', marginTop: 20, flexDirection: 'row', padding: 16}}>
            <View>
              
               
                <Text style={styles.textBold}>Saldo Saat Ini</Text>

            </View>
            <View>
                <Text style={styles.textBold}>122.000</Text>
             

            </View>
        </View>
     </View>
    </View>
  )
}

export default LaporanDPMK

const styles = StyleSheet.create({
    text: {fontSize:12, color: '#292929',marginBottom: 10, },
    textEnd: {fontSize:12, color: '#292929',marginBottom: 10, textAlign: 'right'},
    textBold: {fontSize:12, color: '#292929', fontWeight: 'bold'},

})