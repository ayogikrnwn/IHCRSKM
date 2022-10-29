import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../component/Header/Header'
import HeaderWithBack from '../../component/Header/HeaderWithBack'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { conversiDateTimeIDN } from '../../context/DateTimeServices'
import circlegreen from '../../assets/circlegreen.png'

const ViewAllPresensi = ({navigation}) => {
    const [getPresensi, setGetPresensi] = useState([])

    const getToken = async () => {
        const value = await AsyncStorage.getItem('@token')
        
       
        const AuthStr = 'Bearer' + value
        console.log('valuetoken', AuthStr);
        
        
        try {
        
           await axios.get('https://api.waktukerja.com/api/presensi',  
          { 
            headers: {
            Authorization : 'Bearer ' + value
          } 
        } 
         
          )
      
            .then((res) => {
           
             console.log('rzzzz', res.data.data.data);
              const respres = res.data.data.data
              setGetPresensi(respres)
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
    <View style={{flex: 1}}>
        <HeaderWithBack title="Data Presensi" desc="All Data" onPress={() => navigation.goBack() } />
      <View>
      <View style={{width: '100%', height: 34, backgroundColor: '#FAFAFA', paddingHorizontal: 10 , alignItems: 'center', marginTop: 12, flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text style={{fontSize: 12, color: 'black'}}>Tanggal</Text>
      <Text style={{fontSize: 12, color: 'black',  marginLeft: 50}}>Ket.</Text>
      <Text style={{fontSize: 12, color: 'black'}}>Jam Masuk</Text>
      <Text style={{fontSize: 12, color: 'black'}}>Jam Keluar</Text>
      
      </View>

      
     {getPresensi.length > 0 ?
      getPresensi.map((item,index) => {
          return (
            <View style={{width: '100%', height: 34, backgroundColor: '#FAFAFA', paddingHorizontal: 10 , alignItems: 'center',  flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 12, color: 'black'}}>{conversiDateTimeIDN(item.precense_date)}</Text>
    
    <Image source={circlegreen} style={{marginLeft: -50}} />
    <Text style={{fontSize: 12, color: 'black'}}>{(item.checkin).slice(11,19)}</Text>
    <Text style={{fontSize: 12, color: 'black'}}>{(item.checkout).slice(11,19)}</Text>
    </View>
          
          ) 
      }) :<Text>REd</Text> 
    }
   
      </View>
    </View>
  )
}

export default ViewAllPresensi

const styles = StyleSheet.create({})