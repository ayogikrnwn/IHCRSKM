/* eslint-disable prettier/prettier */
import {ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import ImgLogo from '../../assets/logowaktukerja.png';
import axios from "axios"
import { APIUrl } from '../../context/APIUrl';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [inputan, setInput] = useState({
    email: "",
    password: "",
    company_code: "89EE21"
  })
  const [loading, setLoading]= useState(false)

  console.log('inputan', inputan);

  const handleLogin = async () => {
    try {
      setLoading(true)
       await axios.post('https://api.waktukerja.com/api/auth/login', inputan)
        .then((res) => {
          setLoading(false)
         console.log('response', res.data.data);
         const resData = res.data.data
         const resToken = res.data.token
          AsyncStorage.setItem('@token', resToken)
          AsyncStorage.setItem('@dataPribadi', JSON.stringify(resData))

         navigation.push('MyTabs',{ 
          dataPengguna: resData,
          token: resToken
         })
        });
    } catch (error) {
      setLoading(false)
      console.log("err", error.response.data);
      alert('Login Gagal')
      // navigation.navigate('MyTabs')
     
    }
  }
  
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 110,
        }}>
        <>
          <Image source={ImgLogo} />
          
          <Text style={{width: '100%',  marginLeft: 140, marginTop: 20, marginBottom: 10, color: '#002D54', fontWeight: 'bold'}}>Email</Text>
          <TextInput
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              backgroundColor: '#F0F7FF',
              borderRadius: 12,
              marginBottom: 8,
              width: '70%'
            }}

            placeholder="Input Email"
            onChangeText={(e) => setInput({ ...inputan, email: e })}  
          />
             <Text style={{width: '100%',  marginLeft: 140, marginTop: 20, marginBottom: 10, color: '#002D54', fontWeight: 'bold'}}>Password</Text>
          <TextInput
           
            style={{
             backgroundColor: '#F0F7FF',
              borderRadius: 12,
              marginBottom: 8,
              width: '70%'
            }}

            placeholder="Input Password"
            onChangeText={(e) => setInput({ ...inputan, password: e })}  
            secureTextEntry
          />
          <Text style={{width: '100%',   marginTop: 10, textAlign: 'right', marginRight: 110, marginBottom: 10, color: '#002D54', fontWeight: 'bold'}}>Lupa PIN ?</Text>
       
       {loading ? 
       <ActivityIndicator size="large" color="black" />
       :
<TouchableOpacity style={{backgroundColor: '#004B8C', width: '70%', height: 40,  marginBottom: 14, borderRadius: 8, marginTop: 83}} 
             onPress={handleLogin}
              >
        <Text style={{textAlign: 'center', marginTop:3, fontSize: 14, fontFamily: 'Poppins-Light', paddingVertical: 5, color: 'white', fontWeight: 'bold'}} >Login</Text>
    </TouchableOpacity>
      }
         
   

    <Text style={{width: '100%', textAlign: 'center',marginTop: 20, marginBottom: 10, color: '#739AC8', paddingHorizontal: 20}}>This Application for employee self service HR Information System.</Text>
    <Text style={{width: '100%', textAlign: 'center',marginTop: 10, marginBottom: 10, color: '#004B8C', paddingHorizontal: 20, fontWeight: 'bold'}}>Need Help?</Text>
            
    
     

        </>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
