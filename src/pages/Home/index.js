import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import IMGdummy from '../../assets/dumypp.png'
import icnotif from '../../assets/notifikasi.png'
import icdecoration from '../../assets/decorations.png'
import icmasuk from '../../assets/icmasuk.png'
import icsearch from '../../assets/icsearch.png'
import iccircle from '../../assets/circle.png'
import circlegreen from '../../assets/circlegreen.png'
import circleorange from '../../assets/circleorange.png'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({route}) => {
 
const getToken = async () => {
  const value = await AsyncStorage.getItem('@token')
  console.log('valuetoken', value);
}

useEffect(() => {
  getToken()
}, [])


  return (
    <View style={{flex: 1, backgroundColor: '#E6EDF4'}}>
      <View style={{backgroundColor: 'white', width: '100%', height:71, justifyContent: 'space-between', flexDirection: 'row', padding: 16}}>
        <View>
        <Image source={IMGdummy} />
        </View>
        <View style={{marginLeft: -50, marginTop: -3}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#00162A'}}>Veronika Yulian</Text>
        <Text style={{fontSize: 14,color: '#292929'}}>Staff Nurse Radiognastic Pratama</Text>
        </View>

        <View style={{marginTop: 10}}>
        <Image source={icnotif}  />
        </View>
      
      </View>

      <View style={{height: 113, backgroundColor: '#1A5D98'}}>
        <View>
            <Image source={icdecoration} style={{alignSelf: 'flex-end'}} />
        </View>

        <View style={{marginTop: -65, marginLeft: 16}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', color: 'white'}}>Selamat Pagis</Text>
          <Text style={{fontSize: 14,  color: 'white'}}>Silahkan melakukan presensi masuk</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between' ,backgroundColor: 'white', width: '90%', height: 80, alignSelf: 'center', marginTop: 10, borderRadius: 12}}>
            <View>
            <Text style={{marginLeft: 16, width: 150, color: '#003562', fontSize: 14, fontWeight: 'bold', marginTop: 16}}>Senin, 20 September 2022 </Text>
            <Text style={{marginLeft: 16, color: 'grey'}}>07:30:12</Text>
            </View>
            <View style={{width: 120, height: 40, backgroundColor: '#1A5D98',  borderRadius: 6,marginTop: 16, marginRight: 28, alignItems: 'center', paddingHorizontal: 10, flexDirection: 'row'}}>
            <Image source={icmasuk} />
            <Text style={{marginLeft: 16, color: 'white', fontWeight: 'bold'}}>Masuk</Text>
         
           
            </View>
        </View>

        <View style={{marginLeft: 16, marginTop: 21, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            
          <Text style={{fontSize: 14, color: '#1A5D98', fontWeight: 'bold'}}>Riwayat Presensi</Text>
          <Text style={{fontSize: 10, color: 'black', marginTop: 3}}>Cek Riwayat Kehadiranmu</Text>
          </View>
          <View style={{marginRight: 24}}>
            <Image source={icsearch} />
          </View>

        </View>

      <View style={{width: '100%', height: 34, backgroundColor: '#FAFAFA', paddingHorizontal: 10 , alignItems: 'center', marginTop: 12, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 12, color: 'black'}}>Tanggal</Text>
      <Text style={{fontSize: 12, color: 'black',  marginLeft: 50}}>Ket.</Text>
      <Text style={{fontSize: 12, color: 'black'}}>Jam Masuk</Text>
      <Text style={{fontSize: 12, color: 'black'}}>Jam Keluar</Text>
      
      </View>

      <View style={{width: '100%', height: 34, backgroundColor: '#FAFAFA', paddingHorizontal: 10 , alignItems: 'center',  flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 12, color: 'black'}}>Senin 20 Februari 2022</Text>
      {/* <Text style={{fontSize: 12, color: 'black', marginLeft: -38}}>Ket.</Text> */}
      <Image source={iccircle} style={{marginLeft: -50}} />
      <Text style={{fontSize: 12, color: 'black'}}>08:00:00</Text>
      <Text style={{fontSize: 12, color: 'black'}}>17:00:00</Text>
      
      </View>

      <View style={{width: '100%', height: 34, backgroundColor: '#FAFAFA', paddingHorizontal: 10 , alignItems: 'center',  flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 12, color: 'black'}}>Senin 20 Februari 2022</Text>
      {/* <Text style={{fontSize: 12, color: 'black', marginLeft: -38}}>Ket.</Text> */}
      <Image source={iccircle} style={{marginLeft: -50}} />
      <Text style={{fontSize: 12, color: 'black'}}>08:00:00</Text>
      <Text style={{fontSize: 12, color: 'black'}}>17:00:00</Text>
      
      </View>

      <View style={{width: '100%', height: 34, backgroundColor: '#FAFAFA', paddingHorizontal: 10 , alignItems: 'center',  flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 12, color: 'black'}}>Senin 20 Februari 2022</Text>
      {/* <Text style={{fontSize: 12, color: 'black', marginLeft: -38}}>Ket.</Text> */}
      <Image source={iccircle} style={{marginLeft: -50}} />
      <Text style={{fontSize: 12, color: 'black'}}>08:00:00</Text>
      <Text style={{fontSize: 12, color: 'black'}}>17:00:00</Text>
      
      </View>

<View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 16}}>
<Text style={{fontSize: 10, color: 'black', marginTop: 3}}> Sebelumnya </Text>
<Text style={{fontSize: 10, color: 'black', marginTop: 3}}> Setelahnya </Text>

</View>
      
<Text style={{fontSize: 10, color: 'black', fontWeight: 'bold', marginLeft: 14, marginTop: 24}}>Keterangan Warna</Text>
      <View style={{flexDirection: 'row', paddingHorizontal: 16, marginTop: 12, justifyContent: 'space-around'}}>
        <View style={{flexDirection: 'row'}}>
          <Image source={circlegreen} />
          <Text style={{fontSize: 10, color: 'black', marginTop: -3, marginLeft: 3}}>Active</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image source={iccircle} />
          <Text style={{fontSize: 10, color: 'black', marginTop: -3, marginLeft: 3}}>Active</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image source={circleorange} />
          <Text style={{fontSize: 10, color: 'black', marginTop: -3, marginLeft: 3}}>Active</Text>
        </View>
      </View>

      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})