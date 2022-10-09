import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import HeaderWithBack from '../../component/Header/HeaderWithBack';
import InputTextWhite from '../../component/Input/InputTextWhite';


const FormPengajuan = () => {
    const data = [
        { label: 'Jenis 1', value: '1' },
        { label: 'Jenis 2', value: '2' },
        { label: 'Jenis 3', value: '3' },
        { label: 'Jenis 4', value: '4' },
      
      ];

      const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

   


  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <HeaderWithBack title="Formulir Pengajuan" desc="Pengajuan Cuti" />

<ScrollView>

    <View style={{backgroundColor: '#E6EDF4', height: 400, paddingHorizontal: 16}}>
    <Text style={{ paddingTop: 20, paddingBottom: 8, color: '#00162A', fontWeight: 'bold'}}>Jenis Cuti </Text>
     <View style={styles.container}>
       
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          
          placeholder={!isFocus ? 'Pilih Jenis Cuti' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
      </View>
      <View style={{marginTop: 10}}>
      <InputTextWhite title="Tanggal Cuti" placeholder="Durasi waktu cuti" />
      <InputTextWhite title="Alamat Selama Cuti" placeholder="Alamat" />
      <InputTextWhite title="No. HP Selama Cuti" placeholder="No. Handphone" />

      </View>
      
    </View>

    <View style={{backgroundColor: '#E6EDF4', height: 130, paddingHorizontal: 16, marginTop: 10, paddingVertical: 20}}>
    <InputTextWhite title="Disetujui Oleh" placeholder="Input NIK yang menyetujui" />

    </View>
   
    <TouchableOpacity style={{backgroundColor: '#004B8C', width: '90%', height: 40,  marginBottom: 14, borderRadius: 8, marginTop: 83, alignSelf: 'center'}} 
              onPress={() => navigation.navigate('Home')}
              >
        <Text style={{textAlign: 'center', marginTop:3, fontSize: 14, fontFamily: 'Poppins-Light', paddingVertical: 5, color: 'white', fontWeight: 'bold'}}>Ajukan Cuti</Text>
    </TouchableOpacity>
</ScrollView>
   
    </View>
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