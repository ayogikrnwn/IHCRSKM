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
const FormPengajuan = ({navigation, route}) => {
 

      const {type} = route.params;
      console.log('tipe', type);
      const [date, setDate] = useState(new Date())
      const [open, setOpen] = useState(false)
      const [openCal, setOpenCal] = useState(false)
      const [openTime, setOpenTime] = useState(false)
      const [openTimeCal, setOpenTimeCal] = useState(false)

      const [dateSelectedCal, setDateSelectedCal] = useState("")
      const [timeSelectedOne, setTimeSelectedOne] = useState("")
      const [timeSelectedTwo, setTimeSelectedTwo] = useState("")
      const [dateSelected, setDateSelected] = useState("")


      const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [pickerResponse, setPickerResponse] = useState(null);
    const [namaHeader, setNamaHeader] = useState(type)
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
   const datssTwice = JSON.stringify(dateSelectedCal)
   const timeOnes = JSON.stringify(timeSelectedOne)
    const timeTwo = JSON.stringify(timeSelectedTwo)

   console.log('datss', dateSelected);
   console.log('datss2', dateSelectedCal);
   console.log('timez', timeOnes);
   console.log('time2z', timeTwo);




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
  
  const handleCreateCuti = async () => {
    const value = await AsyncStorage.getItem('@token')
    const datas = (datss).slice(1,11)
    const dataCaltwo = (datssTwice).slice(1,11)
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
      request_date : datas,
      start_date : datas,
      end_date: dataCaltwo,
      keterangan: inputan.keterangan,
      uploaded_docs1:  data._parts,
      contact_number: inputan.noKontak
    }
 
    console.log('kiriman', datakirim);
    try {
      // setLoading(true)
       await axios.post('https://api.waktukerja.com/api/cuti/pengajuan', datakirim, 
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
         navigation.replace('MyTabs')
          
        });
    } catch (error) {
    
      console.log("err", error.response);
      
     
    }
  }

  const handleCreateLembur = async () => {
    const value = await AsyncStorage.getItem('@token')
    const datas = (datss).slice(1,11)
    const dataTimeAwal = (timeOnes).slice(12,20)
    const dataTimeAkhir = (timeTwo).slice(12,20)



  

    // console.log('dataa', data._parts);
    const datakirim = {
      overtime_date : datas,
      start_time : dataTimeAwal,
      end_date: dataTimeAkhir,
      end_time: dataTimeAkhir,
      keterangan: inputan.keterangan,
      tugas: inputan.tugas,
      task_orderer: inputan.task_orderer,
      pay_type: inputan.pay_type

    }
 
    console.log('kiriman', datakirim);
    try {
      // setLoading(true)
       await axios.post('https://api.waktukerja.com/api/lembur/pengajuan', datakirim, 
      { 
        headers: {
         
        Authorization : 'Bearer ' + value
      } 
    } 
     
      )
  
        .then((res) => {
       
         console.log('response', res.data.data);
         alert('Pengajuan Lembur Berhasil!')
         navigation.replace('MyTabs')
          
        });
    } catch (error) {
    
      console.log("err", error.response);
      
     
    }
  }

  return (
    <>
    
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {namaHeader == "Izin" 
      &&
      <>
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

            <View style={{backgroundColor: '#E6EDF4', height: 130, paddingHorizontal: 16, marginTop: 10, paddingVertical: 50}}>
          
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
      </>
      
      }
    
    {namaHeader == "Cuti" 
      &&
      <>
      <HeaderWithBack title="Formulir Pengajuan" desc="Pengajuan Cuti" />

        <ScrollView>

            <View style={{backgroundColor: '#E6EDF4', height: 400, paddingHorizontal: 16}}>
            <View style={styles.container}>
              
            
              </View>
              <View style={{marginTop: 10}}>
              <Text style={{color: '#00162A', fontWeight: 'bold', marginBottom: -10}}>Tanggal Mulai Cuti</Text>

              {dateSelected !== "" ?
              <Square text={(datss).slice(1,11)}  onPress={() => setOpen(true)}/>
              :
              <Square text="Pilih  Tanggal"  onPress={() => setOpen(true)}/>

            }

<Text style={{color: '#00162A', fontWeight: 'bold', marginBottom: -10, marginTop: 10}}>Tanggal Selesai Cuti</Text>

{dateSelected !== "" ?
<Square text={(datssTwice).slice(1,11)}  onPress={() => setOpenCal(true)}/>
:
<Square text="Pilih  Tanggal"  onPress={() => setOpenCal(true)}/>

}
            
        <View style={{marginTop:20}}>
        <InputTextWhiteLarge title="Keterangan Izin Cuti" placeholder="Tulis Keterangan"  onChangeText={(e) => setInput({ ...inputan, keterangan: e })}  />

        </View>
        

              </View>
              
            </View>

            <View style={{backgroundColor: '#E6EDF4', height: 200, paddingHorizontal: 16, marginTop: 10, paddingVertical: 20}}>
           

            <InputTextWhite title="Nomor Kontak Selama Cuti" placeholder="Masukan Nomor" onChangeText={(e) => setInput({ ...inputan, noKontak: e })} />
            <Text style={{color: '#00162A', fontWeight: 'bold'}}>Lampiran</Text>
          {pickerResponse !== null ?
            <Square text={pickerResponse.assets[0].fileName}  onPress={onImageLibraryPress}/>
          :
          <Square text="Pilih File"  onPress={onImageLibraryPress}/>

          }

            </View>
          
            <TouchableOpacity style={{backgroundColor: '#004B8C', width: '90%', height: 40,  marginBottom: 14, borderRadius: 8, marginTop: 30, alignSelf: 'center'}} 
                      onPress={handleCreateCuti}
                      >
                <Text style={{textAlign: 'center', marginTop:3, fontSize: 14, fontFamily: 'Poppins-Light', paddingVertical: 5, color: 'white', fontWeight: 'bold'}}>Ajukan Izin</Text>
            </TouchableOpacity>
        </ScrollView>
      </>
    

      }

{namaHeader == "Lembur" 
      &&
      <>
      <HeaderWithBack title="Formulir Pengajuan" desc="Pengajuan Lembur" />

        <ScrollView>

            <View style={{backgroundColor: '#E6EDF4', height: 630, paddingHorizontal: 16}}>
            <View style={styles.container}>
              
            
              </View>
              <View style={{marginTop: 10}}>
              <Text style={{color: '#00162A', fontWeight: 'bold', marginBottom: -10}}>Tanggal Mulai Lembur</Text>

              {dateSelected !== "" ?
              <Square text={(datss).slice(1,11)}  onPress={() => setOpen(true)}/>
              :
              <Square text="Pilih  Tanggal"  onPress={() => setOpen(true)}/>

            }

          <View>
          <Text style={{color: '#00162A', fontWeight: 'bold', marginBottom: -10, marginTop: 10}}>Jam Mulai</Text>

          {timeSelectedOne !== "" ?
          <Square text={(timeOnes).slice(12,20)}  onPress={() => setOpenTime(true)}/>
          :
          <Square text="Pilih Jam"  onPress={() => setOpenTime(true)}/>

          }
          </View>
          
          <View>
          <Text style={{color: '#00162A', fontWeight: 'bold', marginBottom: -10, marginTop: 10}}>Jam Selesai</Text>

          {timeSelectedTwo !== "" ?
          <Square text={(timeTwo).slice(12,20)}  onPress={() => setOpenTimeCal(true)}/>
          :
          <Square text="Pilih Jam"  onPress={() => setOpenTimeCal(true)}/>

          }
          </View>
           
            
        <View style={{marginTop:20}}>
        <InputTextWhite title="Tugas" placeholder="Masukan Detail Tugas" onChangeText={(e) => setInput({ ...inputan, tugas: e })} />
        <InputTextWhite title="Lembur Atas Perintah" placeholder="Lembur Atas Perintah" onChangeText={(e) => setInput({ ...inputan, task_orderer: e })} />
        <InputTextWhite title="Dibayar secara" placeholder="Dibayar secara" onChangeText={(e) => setInput({ ...inputan, pay_type: e })} />
        <InputTextWhite title="Keterangan" placeholder="Tambahkan Keterangan" onChangeText={(e) => setInput({ ...inputan, keterangan: e })} />
     
        </View>
        

              </View>
              
            </View>

           
            <TouchableOpacity style={{backgroundColor: '#004B8C', width: '90%', height: 40,  marginBottom: 14, borderRadius: 8, marginTop: 30, alignSelf: 'center'}} 
                      onPress={handleCreateLembur}
                      >
                <Text style={{textAlign: 'center', marginTop:3, fontSize: 14, fontFamily: 'Poppins-Light', paddingVertical: 5, color: 'white', fontWeight: 'bold'}}>Ajukan Lembur</Text>
            </TouchableOpacity>
        </ScrollView>
      </>
    

      }

   
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
       <DatePicker
        modal
        open={openCal}
        date={date}
        mode="date"
        onConfirm={(date) => {
          setOpenCal(false)
          setDate(date)
          setDateSelectedCal(date)
        }}
        onCancel={() => {
          setOpenCal(false)
        }}
      />
       <DatePicker
        modal
        open={openTime}
        date={date}
        mode="time"
        onConfirm={(date) => {
          setOpenTime(false)
          setDate(date)
          setTimeSelectedOne(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />

<DatePicker
        modal
        open={openTimeCal}
        date={date}
        mode="time"
        onConfirm={(date) => {
          setOpenTimeCal(false)
          setDate(date)
          setTimeSelectedTwo(date)
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