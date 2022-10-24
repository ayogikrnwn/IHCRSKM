import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import HeaderWithBack from '../../component/Header/HeaderWithBack';
import InputTextWhite from '../../component/Input/InputTextWhite';
import DatePicker from 'react-native-date-picker'
import Square from '../../component/Square/Square';
import InputTextWhiteLarge from '../../component/Input/InputTextWhiteLarge';
import {launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const FormPengajuan = ({navigation}) => {
 


      const [date, setDate] = useState(new Date())
      const [open, setOpen] = useState(false)
      const [dateSelected, setDateSelected] = useState("")
      const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [pickerResponse, setPickerResponse] = useState(null);
    const [inputan, setInput] = useState({
      keterangan: ""
    })

    const onImageLibraryPress = useCallback(() => {
      const options = {
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
      };
      launchImageLibrary(options, setPickerResponse);
    }, []);
  
    const uri = pickerResponse
    console.log('urigmbr', uri);
   
   const datss = JSON.stringify(dateSelected)
   console.log('datss', dateSelected);


   const handleCreateIzin = async () => {
    const value = await AsyncStorage.getItem('@token')
    const datas = (datss).slice(1,11)
    const data = new FormData();
    const urifile = pickerResponse.assets[0].uri
    data.append("uploadFile", {
      name: pickerResponse.assets[0].fileName,
      type:  pickerResponse.assets[0].type,
      uri:
        Platform.OS === "android"
          ?  urifile
          : urifile.replace("file://", "")
    });

    console.log('dataa', data._parts);
    const datakirim = {
      permit_date : datas,
      keterangan: inputan.keterangan,
      uploaded_docs1:  data._parts
    }
 
    console.log('kiriman', datakirim);
    try {
      // setLoading(true)
       await axios.post('https://api.waktukerja.com/api/ijin/pengajuan', datakirim, 
      { 
        headers: {
          "Content-Type": "multipart/form-data",
    Accept: "application/json",
        Authorization : 'Bearer ' + value
      } 
    } 
     
      )
  
        .then((res) => {
       
         console.log('response', res.data.data);
         alert('Pengajuan Berhasil!')
         navigation.replace('Home')
          
        });
    } catch (error) {
    
      console.log("err", error.response);
      
     
    }
  }
  
  return (
    <>
    
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <HeaderWithBack title="Formulir Pengajuan" desc="Pengajuan Izin" />

<ScrollView>

    <View style={{backgroundColor: '#E6EDF4', height: 400, paddingHorizontal: 16}}>
     <View style={styles.container}>
       
     
      </View>
      <View style={{marginTop: 10}}>
      <Text style={{color: '#00162A', fontWeight: 'bold'}}>Tanggal Izin</Text>

      {dateSelected !== "" ?
      <Square text={(datss).slice(1,11)}  onPress={() => setOpen(true)}/>
      :
      <Square text="Pilih  Tanggal"  onPress={() => setOpen(true)}/>

    }

     
<View style={{marginTop:20}}>
<InputTextWhiteLarge title="Keterangan Izin" placeholder="Tulis Keterangan"  onChangeText={(e) => setInput({ ...inputan, keterangan: e })}  />

</View>
     

      </View>
      
    </View>

    <View style={{backgroundColor: '#E6EDF4', height: 130, paddingHorizontal: 16, marginTop: 10, paddingVertical: 20}}>
    <Text style={{color: '#00162A', fontWeight: 'bold'}}>Lampiran</Text>
   {pickerResponse !== null ?
    <Square text={pickerResponse.assets[0].fileName}  onPress={onImageLibraryPress}/>
   :
   <Square text="Pilih File"  onPress={onImageLibraryPress}/>

  }

    </View>
   
    <TouchableOpacity style={{backgroundColor: '#004B8C', width: '90%', height: 40,  marginBottom: 14, borderRadius: 8, marginTop: 30, alignSelf: 'center'}} 
              onPress={handleCreateIzin}
              >
        <Text style={{textAlign: 'center', marginTop:3, fontSize: 14, fontFamily: 'Poppins-Light', paddingVertical: 5, color: 'white', fontWeight: 'bold'}}>Ajukan Izin</Text>
    </TouchableOpacity>
</ScrollView>
   
    </View>
    <DatePicker
        modal
        open={open}
        date={date}
        mode="date"
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setDateSelected(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
    </>
  )
}

export default FormPengajuan

const styles = StyleSheet.create({
    container: {
        
        
       
      },
      dropdown: {
        height: 50,
        borderColor: '#B3C9DD',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'yellow',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 20,
        fontSize: 14,
        color: 'black'
      },
      placeholderStyle: {
        fontSize: 16,
        color: 'black'
      },
      selectedTextStyle: {
        fontSize: 16,
        backgroundColor: 'white',
        color: 'black'
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
        
        
      },
})