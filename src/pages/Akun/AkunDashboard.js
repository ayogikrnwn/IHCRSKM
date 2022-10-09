import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../component/Header/Header'
import TextWithBorder from '../../component/TextField/TextWithBorder'
import ImgPribadis from '../../assets/pribadis.png'
import ImgDataK from '../../assets/DataKeluarga.png'
import ImgPendidikan from '../../assets/Pendidikan.png'
import ImgKesehatan from '../../assets/Kesehatan.png'
import ImgPkerja from '../../assets/Pengalaman.png'
import ImgMCU from '../../assets/Medicalcheckup.png'
import ImgEBook from '../../assets/EmployeeBook.png'
import ImgPin from '../../assets/PIN.png'
import ImgFAQ from '../../assets/FAQ.png'
import ImgLO from '../../assets/logout.png'

const AkunDashboard = ({navigation}) => {
  return (
    <View style={{flex:1, backgroundColor: 'white'}}>
    <Header title="Akun" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

<ScrollView>
<View>
    <View style={{backgroundColor: '#E6EDF4', width: '100%', height: 300, padding: 16}}>
    <Text style={{fontSize: 12, color: '#292929', marginBottom: 8, fontWeight: 'bold'}}>Profil Karyawan</Text>

        <TextWithBorder src={ImgPribadis} title="Pribadi" onPress={() => navigation.navigate('ProfilPribadi')} />
        <TextWithBorder src={ImgDataK} title="Data Keluarga" />
        <TextWithBorder src={ImgPendidikan} title="Pendidikan" />
     
        <TextWithBorder src={ImgKesehatan} title="Kesehatan" />
        <TextWithBorder src={ImgPkerja} title="Pengalaman Kerja" />

    </View>

    <View style={{backgroundColor: '#E6EDF4', width: '100%', height: 150, padding: 16, marginTop: 10}}>
    <Text style={{fontSize: 12, color: '#292929', marginBottom: 8, fontWeight: 'bold'}}>IHC RSKM</Text>

        <TextWithBorder src={ImgMCU} title="Medical Check-Up" onPress={() => navigation.navigate('MedicalCheck')} />
        <TextWithBorder src={ImgEBook} title="Employee Book" />
        

    </View>

    <View style={{backgroundColor: '#E6EDF4', width: '100%', height: 200, padding: 16, marginTop: 10}}>
    <Text style={{fontSize: 12, color: '#292929', marginBottom: 8, fontWeight: 'bold'}}>Tentang Aplikasi</Text>

        <TextWithBorder src={ImgPin} title="Ganti Pin" />
        <TextWithBorder src={ImgFAQ} title="FAQ" />
        <TextWithBorder src={ImgLO} title="Log Out" />

        

    </View>


    </View>

</ScrollView>
   
   
    </View>
  )
}

export default AkunDashboard

const styles = StyleSheet.create({})