import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header/Header'
import IconHelp from '../../assets/help.svg'
import Square from '../../component/Square/Square'

const PengajuanDashboard = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      

        <Header title="Pengajuan" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ScrollView>
        <View>
                <View style={{height: 320, backgroundColor: '#E6EDF4', padding: 16}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

                <Text style={{fontSize: 14, color: '#004B8C', fontWeight: 'bold'}}>Formulir Pengajuan</Text>
                   <IconHelp />
                    </View>
                    <Square text="Formulir Izin"  onPress={() => navigation.navigate('FormPengajuan', {
                      type: 'Izin'
                    })}/>
                    <Square text="Formulir Cuti"  onPress={() => navigation.navigate('FormPengajuan', {
                      type: 'Cuti'
                    })}/>
                    <Square text="Formulir Lembur"  onPress={() => navigation.navigate('FormPengajuan', {
                      type: 'Lembur'
                    })}/>
                    <Square text="Formulir Tukar Dinas"  onPress={() => navigation.navigate('FormPengajuan',{
                      type: 'Tukar Dinas'
                    })}/>



                </View>
                <View style={{height: 320, backgroundColor: '#E6EDF4', padding: 16, marginTop: 10}}>
                   
                <Text style={{fontSize: 14, color: '#004B8C', fontWeight: 'bold'}}>Riwayat Pengajuan</Text>
                 <Text style={{marginTop: 34, color: 'black'}}>Izin</Text>
                 <View style={{borderWidth: 0.5, borderColor: '#B3C9DD', marginTop: 16}}></View>
                 <Text style={{marginTop:16, color: 'black'}}>Cuti</Text>
                 <View style={{borderWidth: 0.5, borderColor: '#B3C9DD', marginTop: 16}}></View>
                 <Text style={{marginTop: 16, color: 'black'}}>Lembur</Text>
                 <View style={{borderWidth: 0.5, borderColor: '#B3C9DD', marginTop: 16}}></View>
                 <Text style={{marginTop: 16, color: 'black'}}>Tukar Dinas</Text>
                 <View style={{borderWidth: 0.5, borderColor: '#B3C9DD', marginTop: 16}}></View>

                </View>

        </View>
        </ScrollView>
      
    </View>
  )
}

export default PengajuanDashboard

const styles = StyleSheet.create({})