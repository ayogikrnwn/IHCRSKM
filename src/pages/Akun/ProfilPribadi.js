import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, View } from 'react-native'
import HeaderProfile from '../../component/Header/HeaderProfile'
import SquareProfile from '../../component/Square/SquareProfile'

const ProfilPribadi = ({navigation}) => {
  const [getData, setGetData] = useState({})
 
  const getToken = async () => {
    const value = await AsyncStorage.getItem('@token')
    
   
    
 
    // console.log('authorssss',config );
   
    try {
      // setLoading(true)
       await axios.get('https://api.waktukerja.com/api/profile',  
      { 
        headers: {
        Authorization : 'Bearer ' + value
      } 
    } 
     
      )
  
        .then((res) => {
       
         console.log('response', res.data.data);
          const respres = res.data.data
          setGetData(respres)
        });
    } catch (error) {
    
      console.log("err", error);
      
     
    }
  }
  
  
  
  useEffect(() => {
    getToken()
    // getPresensi()
  }, [])
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderProfile title="Profil Karyawan" desc="Pribadi" onPress={() => navigation.goBack()} />
      <ScrollView>


      <View style={{padding: 16}}>
        <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={{uri: getData.id_upload_path}} style={{width: 100, height: 100}} />
            </View>
            <View style={{flex: 1}}>
            <SquareProfile text={getData.id_nomor} title="NIK" />
            <SquareProfile text={getData.tmb} title="TBM" />
            </View>
        </View>
        <View>
        <SquareProfile text={getData.nama} title="Nama" />
        <SquareProfile text={getData.talahir} title="Tanggal Lahir" />
        <SquareProfile text={getData.nomor_telepon} title="No. Telepon" />
        <SquareProfile text={getData.email} title="Email" />
        <SquareProfile text="-" title="NPWP" />

        <SquareProfile text="-" title="PTKP" />
        <SquareProfile text="-" title="Jamsostek" />

        <SquareProfile text={getData.jabatan} title="Jabatan" />



        </View>
        
      </View>
      </ScrollView>
    </View>
  )
}

export default ProfilPribadi

const styles = StyleSheet.create({})