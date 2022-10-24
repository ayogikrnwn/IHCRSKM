import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../component/Header/Header'
import Square from '../../component/Square/Square'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const LaporanDashboard = ({navigation}) => {

  const [getData, setGetData] = useState([])
 
  const getToken = async () => {
    const value = await AsyncStorage.getItem('@token')
    
   
    
 
    // console.log('authorssss',config );
   
    try {
      // setLoading(true)
       await axios.get('https://api.waktukerja.com/api/payroll/components/all',  
      { 
        headers: {
        Authorization : 'Bearer ' + value
      } 
    } 
     
      )
  
        .then((res) => {
       
         console.log('response', res.data);
          const respres = res.data
          setGetData(respres)
        });
    } catch (error) {
    
      console.log("err", error.response);
      
     
    }
  }
  
  
  
  useEffect(() => {
    getToken()
    // getPres
  }, [])

  return (
    <View style={{flex: 1, backgroundColor: '#E6EDF4'}}>
     <Header title="Laporan" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " />
     <View style={{padding:16}}>
      {getData.map((item, index) => {
        return (
        <Square text={item.component_label} onPress={() => navigation.navigate('Laporan_DPMK')}  />

        )
      })}
      
        <Square text="Payslip Reguler" onPress={() => navigation.navigate('LaporanPayslip')}/>
        <Square text="Payslip Non-Reguler" />
        
        
     </View>
    </View>
  )
}

export default LaporanDashboard

const styles = StyleSheet.create({})